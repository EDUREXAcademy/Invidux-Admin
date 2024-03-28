"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { TextField } from '../reusable/FormInput';
import { ArrowLeft, Check, ChevronDown, X } from 'lucide-react';
import { Button, ForwardButton } from '../reusable/Buttons';
import useStore from '@/store';
import { InvalidateQueryFilters, QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { issueToken } from '@/api';
import { toast } from 'react-toastify';

type Props = {}

const Distribution = (props: Props) => {
  const { control, register, handleSubmit, setValue, getValues, formState: { errors, isValid } } = useForm();
  const queryClient = useQueryClient()

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex, resetTokenIssuanceData, setIssuedTokenId} = useStore()
  const [optionArray, setOptionArray] = useState<string[]>([])
  const [showOptions, setShowOptions] = useState(false)
  const [submitData, setSubmitData] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const modal = document.getElementById('options');
      if (modal && !modal.contains(target)) {
        setShowOptions(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  const deleteOption = (item: string) => {
    // Check if the item is already in the coverList
    if (!optionArray.includes(item)) {
      // If not, do nothing
      return
    } else {
      // If already in the list, remove it
      const updatedList = optionArray.filter((cover) => cover !== item);
      setOptionArray(updatedList);
    }
  };

  const addToOptions = (item: string) => {
    // Check if the item is already in the coverList
    if (!optionArray.includes(item)) {
      // If not, create a new array with the item added
      setOptionArray([...optionArray, item]);
    } else {
      // If already in the list, remove it
      const updatedList = optionArray.filter((cover) => cover !== item);
      setOptionArray(updatedList);
    }
  }

  const handleFrequencyChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('frequency', value);
  };

  console.log({isValid})
  // const saveDistribution = async (data: any) => {
  //   // alert(JSON.stringify(data, null, 2))

  //   if (!isValid) {
  //     // If the form is not valid, return early and don't execute further logic
  //     return;
  //   }
  //   setTokenIssuanceData({
  //     ...tokenIssuanceData, distribution: {
  //       ...data,
  //       relistAtMarturity: optionArray?.includes("Relist at Maturity"),
  //       confersVotingRight: optionArray?.includes("Confers Voting Right"),
  //       canLeverage: optionArray?.includes("Can Leverage"),
  //       issuerBuyBack: optionArray?.includes("Issuer Buy Back"),
  //       gauranteedIncome: optionArray?.includes("Gauranteed Income"),
  //     }
  //   })
  //   // console.log({...tokenIssuanceData})
  //   // setSubmitData(true)
  //   submitTokenIssuanceData.mutate(
  //     { ...tokenIssuanceData }, {
  //     onSuccess: (data: any) => {
  //       // QueryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
  //       setIssuedTokenId(data?.data)
  //       setCurrentIndex(currentIndex + 1)
  //       toast.success(data.message);
  //       resetTokenIssuanceData()
  //     },
  //     onError: (error: any) => {
  //       console.log(error)
  //       const resMessage =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //       toast.error(resMessage);
  //     },
  //   })
  // }

  
  
  // useEffect(() => {
    // submitData && setTimeout(() => {
      // submitTokenIssuanceData.mutate(
      //   { ...tokenIssuanceData }, {
      //   onSuccess: (data: any) => {
      //     // QueryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
      //     setIssuedTokenId(data?.data)
      //     setCurrentIndex(currentIndex + 1)
      //     toast.success(data.message);
      //     resetTokenIssuanceData()
      //       setSubmitData(false)
      //   },
      //   onError: (error: any) => {
      //     console.log(error)
      //     const resMessage =
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //       error.message ||
      //       error.toString();
      //     toast.error(resMessage);
      //     setSubmitData(false)
      //   },
      // })
    // }, 1500);
  // }, [submitData])
  

  const submitTokenIssuanceData = useMutation({
    mutationFn: issueToken,
  });

  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  const saveDistribution = async (data: any) => {
    if (!isValid) {
      return; // Ensure form is valid before proceeding
    }
    setSubmitData(true)
    // Update tokenIssuanceData state
    setTokenIssuanceData({
      ...tokenIssuanceData,
      distribution: {
        ...data,
        relistAtMarturity: optionArray?.includes("Relist at Maturity"),
        confersVotingRight: optionArray?.includes("Confers Voting Right"),
        canLeverage: optionArray?.includes("Can Leverage"),
        issuerBuyBack: optionArray?.includes("Issuer Buy Back"),
        gauranteedIncome: optionArray?.includes("Gauranteed Income"),
      },
    });
  };

  // Add this useEffect hook to watch for changes in submitData
  useEffect(() => {
    if (isValid && submitData) { // Ensure form is valid before mutation
      submitTokenIssuanceData.mutate(
        { ...tokenIssuanceData }, {
        onSuccess: (data: any) => {
          setIssuedTokenId(data?.data);
          setCurrentIndex(currentIndex + 1);
          toast.success(data.message);
          resetTokenIssuanceData();
          setSubmitData(false);
            queryClient.invalidateQueries(["allIssuedToken"] as InvalidateQueryFilters);
        },
        onError: (error: any) => {
          console.log(error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          toast.error(resMessage);
          setSubmitData(false);
        },
      });
    }
  }, [ isValid, submitData]);


  useEffect(() => {
    setValue('relistAtMarturity', optionArray.includes('Relist at Maturity'));
    setValue('confersVotingRight', optionArray.includes('Confers Voting Right'));
    setValue('canLeverage', optionArray.includes('Can Leverage'));
    setValue('issuerBuyBack', optionArray.includes('Issuer Buy Back'));
    setValue('gauranteedIncome', optionArray.includes('Gauranteed Income'));
  }, [optionArray, setValue]);

  return (
    <form className='space-y-5 h-full mx-auto w-full ' onSubmit={handleSubmit(saveDistribution)}>
      <div>
        <Select name='frequency' onValueChange={handleFrequencyChange}>
          {/* <FormControl> */}
          <label htmlFor="frequency" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Frequency</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Frequency" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            <SelectItem value={"Monthly"}>Monthly</SelectItem>
            <SelectItem value={"Weekly"}>Quarterly</SelectItem>
            <SelectItem value={"Daily"}>Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <TextField
        type='number'
        name='tenure'
        label="Tenure"
        placeholder='36'
        control={control}
        variant='xlong'
        rules={{ required: 'This filed is required' }}
        onChange={(e) => setValue('tenure', e.target.value)}
      />

      <TextField
        type='date'
        name='startDate'
        label="Start Date"
        control={control}
        variant='xlong'
        rules={{ required: 'Start date is required' }}
        onChange={(e) => setValue('startDate', e.target.value)}
      />

      <div className='relative'>
        <p className='text-sm mb-1'>Options (Multi-select)</p>
        <div className='flex items-center relative'>
          <div className='border border-[#838383] w-full min-h-12 rounded-md flex flex-wrap gap-2 items-center p-2 transition cursor-pointer' onClick={() => setShowOptions(prev => !prev)}>
            {optionArray.length < 1 && (
              <p className='text-sm text-[#838383]'>Select options...</p>
            )}
            {optionArray.map((option: string, index) => (
              <div key={index} className='bg-[#E5E5E5] text-[#838383] rounded-md px-2 py-1 text-sm text-center flex items-center gap-1.5 transition z-50'>
                <span className='text-sm'>{option}</span>
                <span>
                  <X size={14} className='cursor-pointer hover:scale-110 hover:text-red-700 transition' onClick={() => {
                    deleteOption(option)
                    setShowOptions(prev => !prev)
                  }} />
                </span>
              </div>
            ))}
          </div>
          <ChevronDown className={`absolute right-2 transition ${showOptions && "rotate-180"}`} strokeWidth={1} onClick={() => setShowOptions(prev => !prev)} />
        </div>

        {showOptions && <ul id='options' className='bg-white rounded-md w-full border px-1 py-2 text-sm absolute mt-3'>
          {options.map((item) => (
            <li
              key={item}
              className='hover:bg-gray-100 px-3 cursor-pointer py-2 rounded-sm flex items-center gap-2'
              onClick={() => addToOptions(item)}
            >
              <div className='w-4 '>
                {optionArray.includes(item) && <Check size={16} />}
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>}
      </div>

      <TextField
        name='financialProjectionLink'
        label="Financial Projection Link"
        control={control}
        variant='xlong'
        placeholder='https://drive.google.com/syuijndsd'
      // rules={{ required: 'This filed is required' }}
      />

      {/* <div className="flex justify-end gap-x-2 mt-6">
        <Button type='submit'>Submit</Button>
      </div> */}
      <div className="flex justify-end gap-x-2 mt-6">
        <Button onClick={()=> setCurrentIndex(currentIndex - 1)}>
          <span className='flex gap-1.5'><ArrowLeft className='' /> Back</span>
        </Button>
        <ForwardButton type='submit' variant="dark">
          Save
        </ForwardButton>
      </div>

    </form>
  )
}

const options = [
  "Relist at Maturity",
  "Confers Voting Right",
  "Can Leverage",
  "Issuer Buy Back",
  "Gauranteed Income"
]

export default Distribution