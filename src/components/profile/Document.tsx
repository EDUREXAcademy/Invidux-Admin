"use client"
import React, { useState } from 'react'
import { Button, ForwardButton } from '../reusable/Buttons'
import { File, PenLine, Trash2, UploadCloud } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { TextField } from '../reusable/FormInput'

type Props = {
  userData: {
    contact: {
      email: string
    }
  }
}

const Document = ({ userData }: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm()
  const [editMode, setEditMode] = useState(false)

  const uploadCoI = async () => {

  }

  return (
    <div className='pb-10'>
      <div className='flex justify-end items-center pt-3 md:hidden' onClick={() => setEditMode(true)}>
        <PenLine size={18} />
      </div>
      <div className={`flex flex-col gap-y-5 justify-between w-full lg:w-[60%] py-4 md:py-10 px-4 ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>

        {/* {Certificate of Incorporation} */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2 text-sm'>
            <File />
            <span>Certificate of Incorporation</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <Trash2 />
            </div>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <PenLine size={18} />
            </div>
          </div>
        </div>
        {/* {Form CO7 (Particulars of Directors)} */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2 text-sm'>
            <File />
            <span>Form CO7 (Particulars of Directors)</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <Trash2 />
            </div>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <PenLine size={18} />
            </div>
          </div>
        </div>

        {/* {Memorandum and Articles of Association} */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2 text-sm'>
            <File />
            <span>Memorandum and Articles of Association</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <Trash2 />
            </div>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <PenLine size={18} />
            </div>
          </div>
        </div>
        
        {/* {Proof of Company Address} */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2 text-sm'>
            <File />
            <span>Proof of Company Address</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <Trash2 />
            </div>
            <div className='text-[16px] w-[30%] md:flex gap-2 items-center h-fit w-fit cursor-pointer' onClick={() => setEditMode(true)}>
              <PenLine size={18} />
            </div>
          </div>
        </div>
      </div>



      <div className={`py-10 transition-all ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`}>
        <div className='flex flex-col gap-y-5 font-[400] w-full md:w-[80%]'>

          {/* Certificate of Incorporation */}
          <div>
            <p className='text-sm mb-1'>Certificate of Incorporation</p>
            <div className='flex items-center gap-2 relative'>
              <label htmlFor='coI' className='border border-black/45 rounded-md w-1/2 h-[50px] flex items-center cursor-pointer'>
                <label htmlFor="coI" className='absolute left-2  py-2 px-4 bg-[#B6B6B6] rounded-sm text-sm cursor-pointer'>
                  Add file
                </label>
                <input type="file" name="coI" id="coI" className='hidden' onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    // setImageFile(e.target.files?.[0])
                    // updateCoverPic(e.target.files?.[0])
                  }
                }} />
              </label>
              <div className='flex items-end'>
                <div className='h-fit'>
                  <Button>Upload <span><UploadCloud /></span></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Form CO7 (Particulars of Directors) */}
          <div>
            <p className='text-sm mb-1'>Form CO7 (Particulars of Directors)</p>
            <div className='flex items-center gap-2 relative'>
              <label htmlFor='formCO7' className='border border-black/45 rounded-md w-1/2 h-[50px] flex items-center cursor-pointer'>
                <label htmlFor="formCO7" className='absolute left-2  py-2 px-4 bg-[#B6B6B6] rounded-sm text-sm cursor-pointer'>
                  Add file
                </label>
                <input type="file" name="formCO7" id="formCO7" className='hidden' onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    // setImageFile(e.target.files?.[0])
                    // updateCoverPic(e.target.files?.[0])
                  }
                }} />
              </label>
              <div className='flex items-end'>
                <div className='h-fit'>
                  <Button>Upload <span><UploadCloud /></span></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Memorandum and Articles of Association */}
          <div>
            <p className='text-sm mb-1'>Memorandum and Articles of Association</p>
            <div className='flex items-center gap-2 relative'>
              <label htmlFor='memorandum' className='border border-black/45 rounded-md w-1/2 h-[50px] flex items-center cursor-pointer'>
                <label htmlFor="memorandum" className='absolute left-2  py-2 px-4 bg-[#B6B6B6] rounded-sm text-sm cursor-pointer'>
                  Add file
                </label>
                <input type="file" name="memorandum" id="memorandum" className='hidden' onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    // setImageFile(e.target.files?.[0])
                    // updateCoverPic(e.target.files?.[0])
                  }
                }} />
              </label>
              <div className='flex items-end'>
                <div className='h-fit'>
                  <Button>Upload <span><UploadCloud /></span></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Proof of Company Address */}
          <div>
            <p className='text-sm mb-1'>Proof of Company Address</p>
            <div className='flex items-center gap-2 relative'>
              <label htmlFor='proofOfAddress' className='border border-black/45 rounded-md w-1/2 h-[50px] flex items-center cursor-pointer'>
                <label htmlFor="proofOfAddress" className='absolute left-2  py-2 px-4 bg-[#B6B6B6] rounded-sm text-sm cursor-pointer'>
                  Add file
                </label>
                <input type="file" name="proofOfAddress" id="proofOfAddress" className='hidden' onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    // setImageFile(e.target.files?.[0])
                    // updateCoverPic(e.target.files?.[0])
                  }
                }} />
              </label>
              <div className='flex items-end'>
                <div className='h-fit'>
                  <Button>Upload <span><UploadCloud /></span></Button>
                </div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>
  )
}

export default Document