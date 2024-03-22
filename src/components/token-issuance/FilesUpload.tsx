"use client"
import { File, Image as ImageIcon, UploadCloud, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePropertyTitles } from '@/hooks/queries'
import { useMutation } from '@tanstack/react-query'
import { privateApi } from '@/api/adminAxios'
import useStore from '@/store'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '../reusable/Buttons'

type Props = {}

const FilesUpload = (props: Props) => {

  const { data: propertyTitles, isPending: propertyTitlesIsPending } = usePropertyTitles()
  // console.log({data})
  const { issuedTokenId } = useStore()
  const { control, register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();


  const [files, setFiles] = useState<FileList | null>(null)
  const [image, setImage] = useState<FileList | null>(null)
  const [onDrag, setOnDrag] = useState(false)
  const [uploadedDocs, setUploadedDocs] = useState<{name: string;deleteName: string;}[]>([])
  const [uploadedImages, setUploadedImages] = useState<{name: string;deleteName: string;}[]>([])
  const [docTitle, setDocTitle] = useState("")
  const [imgTitle, setImgTitle] = useState("")
  const [docDeleteName, setDocDeleteName] = useState("")
  const [imgDeleteName, setImgDeleteName] = useState("")

// console.log(image?.[0].name.split(".")[0])


  const uploadTitleDocument = useMutation({
    mutationFn: async ({ tokenId, title, uploadFile }: { tokenId: string; title: string; uploadFile: FormData}) => {
      const response = await privateApi.post(`/api/v1/property-tokens/upload-document/${tokenId}/${title}`, uploadFile, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      return response.data
    },
    onSuccess(data) {
      // queryClient.invalidateQueries({ queryKey: ["document"] })
      toast.success("Property document uploaded")
      // console.log(data)
      setUploadedDocs([...uploadedDocs, { name: docTitle, deleteName: data?.data} ])

    },
    onError(error) {
      console.log(error)
    }
  })

  const uploadPropertyImage = useMutation({
    mutationFn: async ({ tokenId, uploadFile }: { tokenId: string; uploadFile: FormData}) => {
      const response = await privateApi.post(`/api/v1/property-tokens/upload-image/${tokenId}`, uploadFile, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      return response.data
    },
    onSuccess(data) {
      // queryClient.invalidateQueries({ queryKey: ["document"] })
      toast.success("Property image uploaded")
      console.log(data)
      setUploadedImages([...uploadedImages, { name: imgTitle, deleteName: data?.data} ])
      // console.log({uploadedImages})
    },
    onError(error) {
      console.log(error)
    }
  })

  // Property document input handler
  const handleTitleChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('title', value);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    // console.log(file)
    setOnDrag(true)
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setOnDrag(false)
    setFiles(e.dataTransfer.files);
    // console.log(files)
  }

  const handleUploadDoc = async (file: any) => {
    if (file === null) {
      // If no file is selected, show an error message
      toast.error("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("formFile", file);
    const title = getValues("title")
    setDocTitle(title)

    if (title === undefined || file === null) {
      toast.error("Please Provide Document title and file to upload.");
      return;
    }
    // console.log({title})
    // console.log({ formData })
    // console.log({ file })
    if (title !== undefined || file !== null) {
      uploadTitleDocument.mutate({ tokenId: issuedTokenId, title, uploadFile: formData })
    }
  }


  const handleUploadImage = async (file: any) => {
    if (file === null) {
      // If no file is selected, show an error message
      toast.error("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("formFile", file);
    uploadPropertyImage.mutate({ tokenId: issuedTokenId, uploadFile: formData })
  }

  const deleteDoc = useMutation({
    mutationFn: async (deleteName: string) => {
      const response = await privateApi.delete(`/api/v1/property-tokens/delete-doc/${deleteName}`,)
      return response.data
    },
    onSuccess(data) {
      // queryClient.invalidateQueries({ queryKey: ["document"] })
      toast.success("Property document deleted successfully")
      // console.log(data)
      setUploadedDocs(prevDocs => prevDocs.filter(doc => doc.deleteName !== docDeleteName))
      // console.log({ uploadedDocs })
    },
    onError(error) {
      console.log(error)
      toast.error("Unable to delete doc")
    }
  })

  const deleteImage = useMutation({
    mutationFn: async (deleteName: string) => {
      const response = await privateApi.delete(`/api/v1/property-tokens/delete-image/${deleteName}`,)
      return response.data
    },
    onSuccess(data) {
      // queryClient.invalidateQueries({ queryKey: ["document"] })
      toast.success("Image deleted successfully")
      // console.log(data)
      setUploadedImages(prevImgs => prevImgs.filter(img => img.deleteName !== imgDeleteName))
      // console.log({ uploadedDocs })
    },
    onError(error) {
      console.log(error)
      toast.error("Unable to delete image")
    }
  })

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log("Files selected:", files); // Log selected files
    if (files) {
      setImage(files);
      const file = files[0]; // Get the first selected file
      console.log("First file:", file); // Log the first file
      if (file) {
        setImgTitle(file.name.split(".")[0]); // Set imgTitle using the name of the first file
        handleUploadImage(file)
      }
    }
  };

  // console.log("imgTitle:", imgTitle);

  return (
    <div className='flex flex-col gap-y-4'>
      <div className="">
        <div className='mb-3'>
          <Select name='title' onValueChange={handleTitleChange} required>
            {/* <FormControl> */}
            <label htmlFor="title" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Property title</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
              <SelectValue placeholder="Select Property title" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
              {propertyTitlesIsPending  && <SelectItem value={"loading"} disabled >loading...</SelectItem>}
              {propertyTitles?.data?.map((item: { title: string }, index: number) => (
                <SelectItem key={index} value={item.title}>{item.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className='text-sm'>Upload title document</p>
        <label
          htmlFor='uploadTitleDoc'
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border border-[#1A1A1A] group transition-all w-full h-[121px] rounded-md mt-1.5 flex items-center justify-center cursor-pointer`}>
          <input type="file" name="uploadTitleDoc" id="uploadTitleDoc" hidden multiple accept='image' onChange={(e) => {
            setFiles(e.target.files)
            handleUploadDoc(e.target.files?.[0])
          }}
          />
          {/* {files ? (
          <ul className='flex items-center justify-center '>
            <p className='text-sm mr-1 text-green-500'>Uploaded file(s):</p>
            {Array.from(files).map((file, index) => (
              <li key={file.name} className='appearance-none text-xs text-gray-500 px-0.5'>{file.name}{Array.from(files).length - 1 === index ? "" : ","}</li>
            ))}
          </ul>
        ) :  */}
          {/* ( */}
          <div className='flex flex-col items-center gap-y-1'>
            <UploadCloud color='#B1924E' className='group-hover:animate-bounce' />
            <p>
              <span className='text-[#B1924E]'>Upload a file</span>
              {" "}or drag and drop
            </p>
            <p className='text-[#737373] font-[400] text-sm'>PNG, JPG, GIF upto 5MB</p>
          </div>
          {/* ) */}
          {/* } */}
        </label>

        <div className='flex items-center gap-2 flex-wrap'>
          {uploadedDocs?.map((doc) => (
            <div key={doc.name} className='flex gap-1 relative text-[#6A6A6A] mt-2 h-6'>
              <File size={20} />
              <div className='flex items-end h-full'>
                <p className='text-xs'>{doc.name}</p>
              </div>
              <X size={12} className='cursor-pointer hover:scale-110 hover:text-red-700 transition' onClick={() => {
                setDocDeleteName(doc.deleteName)
                deleteDoc.mutate(doc.deleteName)
                }}
               />
            </div>
          ))}
        </div>
        
      </div>

      <div className="">
        <p className='text-sm'>Upload property images</p>
        <label
          htmlFor='uploadPropertyImage'
          // onDragOver={handleDrag}
          // onDrop={handleDrop}
          className={`border group transition-all border-[#1A1A1A]  w-full h-[121px] rounded-md mt-1.5 flex items-center justify-center cursor-pointer`}>
          <input type="file" name="uploadPropertyImage" id="uploadPropertyImage" hidden multiple accept='image' onChange={handleFileInputChange} />

          <div className='flex flex-col items-center gap-y-1'>
            <UploadCloud color='#B1924E' className='group-hover:animate-bounce' />
            <p>
              <span className='text-[#B1924E]'>Upload a file</span>
              {" "}or drag and drop
            </p>
            <p className='text-[#737373] font-[400] text-sm'>PNG, JPG, GIF upto 5MB</p>
          </div>
          {/* ) */}
          {/* } */}
        </label>

        {uploadedImages?.map((img) => (
          <div key={img.name} className='flex gap-1 relative text-[#6A6A6A] mt-2 h-6'>
            <ImageIcon />
            <div className='flex items-end h-full'>
              <p className='text-xs capitalize'>{img.name}</p>
            </div>
            <X size={12} className='cursor-pointer hover:scale-110 hover:text-red-700 transition' onClick={() => {
              setImgDeleteName(img.deleteName)
              console.log({imgDeleteName})
              deleteImage.mutate(img.deleteName)
            }} />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-x-2 mt-6">
        <Button type='submit'>Submit</Button>
      </div>
    </div>
  )
}

export default FilesUpload