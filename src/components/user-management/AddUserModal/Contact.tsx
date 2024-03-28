"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Plus } from "lucide-react";
import useStore from "@/store";
import { useCountries, useEmploymentStatus, useIdTypes, useIncomeRange, useJobSectors, useUnitTypes } from "@/hooks/queries";
import { TextField } from "@/components/reusable/FormInput";
import { Button, ForwardButton } from "@/components/reusable/Buttons";


const Contact = () => {
  const { control, handleSubmit, setValue, getValues } = useForm();
  const { data: countries, isPending: countryIsPending } = useCountries();
  const { data: idTypes, isPending: idTypesIsPending } = useIdTypes();
  const { data: incomeRange, isPending: incomeRangeIsPending} = useIncomeRange();
  const { data: employmentStatus, isPending: employmentStatusIsPending } = useEmploymentStatus();
  const { data: jobSectors, isPending: jobSectorsIsPending } = useJobSectors();
  const [countryId, setCountryId] = useState("");
  const [idType, setIdType] = useState("");
  const [incomeRangeValue, setIncomeRangeValue] = useState('')
  const [employmentStatusValue, setEmploymentStatusValue] = useState('')
  const [jobSector, setJobSector] = useState('')
  const [investmentLimit, setInvestmentLimit] = useState(0)

  const {
    addUserData,
    setAddUserData,
    newUserCurrentIndex,
    setNewUserCurrentIndex,
  } = useStore();

  const saveContact = (data: any) => {
    console.log({ data });
    setAddUserData({
      ...addUserData,
      contactAddress: {
        address : data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        countryId: Number(countryId),
      },
      kycInfo: {
        idType: idType,
        idNumber: data.idNumber,
        expiryDate: data.expiryDate,
      },
      incomeInfo: {
        incomeRange: incomeRangeValue,
        employmentStatus: employmentStatusValue,
        jobSector: jobSector,
        investmentLimit: investmentLimit,
      },
    })
    setNewUserCurrentIndex(newUserCurrentIndex + 1);
  };

  return (
    <form
      className="space-y-5 h-full mx-auto "
      onSubmit={handleSubmit(saveContact)}
    >
      <p className="font-bold">Property Units</p>

      <div className="w-full flex gap-4">
        <TextField
          type="text"
          name="address"
          label="Residential Address"
          placeholder="13, wilmer street"
          control={control}
          rules={{ required: "This filed is required" }}
        />

        <TextField
          type="text"
          name="city"
          placeholder="ikoyi"
          label="City"
          control={control}
          rules={{ required: "This filed is required" }}
        />
      </div>
      <div className="w-full flex gap-4">
        <TextField
          type="text"
          name="state"
          label="State"
          placeholder="Lagos"
          control={control}
          rules={{ required: "This filed is required" }}
        />

        <TextField
          type="number"
          name="postalCode"
          placeholder="123454"
          label="Postal Code"
          control={control}
          rules={{ required: "This filed is required" }}
        />
      </div>
      <div className="w-full -mt-2">
        <label
          htmlFor={"selectCountry"}
          className="block text-neutral-950 text-sm font-normal mb-[6px]"
        >
          Resident Country
        </label>
        <select
          className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed mb-4"
          value={countryId}
          onChange={(e) => {
            setCountryId(e.target.value);
          }}
        >
          <option value="">Select Country</option>
          {countries?.data?.map((country: any) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
          {countryIsPending && <option value="">loading...</option>}
        </select>
      </div>
      
      {/* kyc Info */}
      <p className="font-bold">kyc Info</p>
      <div className="w-full flex gap-4">
        <div className="w-full -mt-1">
          <label
            htmlFor={"selectIdType"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            Valid ID
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed mb-4"
            value={idType}
            onChange={(e) => {
              setIdType(e.target.value);
            }}
          >
            <option value="">Select User Id Type</option>
            {idTypes?.map((idType: any) => (
              <option key={idType.id} value={idType.id}>
                {idType.name}
              </option>
            ))}
            {idTypesIsPending && <option value="">loading...</option>}
          </select>
        </div>

        <TextField
          type="number"
          name="idNumber"
          placeholder="23436"
          label="Id Number"
          control={control}
          rules={{ required: "This filed is required" }}
        />
      </div>
      <TextField
        type="date"
        name="expiryDate"
        label="Expiry Date (Optional)"
        variant="xlong"
        control={control}
        rules={{ required: "This filed is required" }}
      />

      {/* Income Info< */}
      <p className="font-bold">Income Info</p>
      <div className="w-full flex gap-x-4">
        <div className="w-full -mt-2">
          <label
            htmlFor={"incomeRange"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            Income Range
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            value={incomeRangeValue}
            onChange={(e) => {
              setIncomeRangeValue(e.target.value);
              incomeRange?.filter((item:any)=>{
                if (item.range === e.target.value){
                  setInvestmentLimit(item.investmentLimit)
                }
              })
            }}
          >
            <option value="">Select Income Range</option>
            {incomeRange?.map((range: any) => (
              <option key={range.id} value={range.range}>
                {range.range}
              </option>
            ))}
            {incomeRangeIsPending && <option value="">loading...</option>}
          </select>
        </div>

        <div className="w-full -mt-2">
          <label
            htmlFor={"employmentStatus"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            Employment Status
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            value={employmentStatusValue}
            onChange={(e) => {
              setEmploymentStatusValue(e.target.value);
            }}
          >
            <option value="">Select Employment Status</option>
            {employmentStatus?.status?.map((empStatus: any) => (
              <option key={empStatus} value={empStatus}>
                {empStatus}
              </option>
            ))}
            {employmentStatusIsPending && <option value="">loading...</option>}
          </select>
        </div>
      </div>

        <div className="w-full -mt-2">
          <label
            htmlFor={"jobSectors"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            Job Sector
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            value={jobSector}
            onChange={(e) => {
              setJobSector(e.target.value);
            }}
          >
            <option value="">Select Job Sector</option>
            {jobSectors?.map((jobSector: any) => (
              <option key={jobSector.id} value={jobSector.sector}>
                {jobSector.sector}
              </option>
            ))}
            {jobSectorsIsPending && <option value="">loading...</option>}
          </select>
        </div>

        {/* <TextField
          type="number"
          name="investmentLimit"
          placeholder="23436"
          label="Investment Limit"
          control={control}
          rules={{ required: "This filed is required" }}
        /> */}

      <div className="flex justify-end gap-x-2 mt-6">
        <Button onClick={() => setNewUserCurrentIndex(newUserCurrentIndex - 1)}>
          <span className="flex gap-1.5">
            <ArrowLeft className="" /> Back
          </span>
        </Button>
        <ForwardButton type="submit" variant="dark">
          Continue
        </ForwardButton>
      </div>
    </form>
  );
};

export default Contact;
