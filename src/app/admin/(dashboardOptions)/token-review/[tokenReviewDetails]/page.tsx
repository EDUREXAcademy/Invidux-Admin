"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Bed,
  CheckCircle2,
  CookingPot,
  Delete,
  DoorOpen,
  Home,
  MapPin,
  MinusCircle,
  Paperclip,
  PartyPopper,
  Signal,
  Sofa,
} from "lucide-react";
import mainPic from "../../../../../assets/images/house-main.png";
import firstPic from "../../../../../assets/images/house1.png";
import secondPic from "../../../../../assets/images/house2.png";
import thirdPic from "../../../../../assets/images/house3.png";
import fourthPic from "../../../../../assets/images/house4.png";
import fourSquare from "../../../../../assets/icons/four-square.svg";
import hexagon from "../../../../../assets/icons/hexagon.svg";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/reusable/Buttons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "react-toastify";
import { privateApi } from "@/api/adminAxios";
import LoadingOverlay from "@/components/reusable/LoadingOverlay";

type Props = {};

const ViewTokenReview = ({ params }: any) => {
  const tokenId = params.tokenReviewDetails;

  const [assetDetail, setAssetDetail] = useState<any>({});
  const sold = assetDetail?.volume - assetDetail?.available;
  const progressBar = Math.round((sold / assetDetail?.volume) * 100);
  const [insuranceExpire, setInsuranceExpire] = useState("2024-01-01T00:00:00");
  const [coolOffExpire, setCoolOffExpire] = useState("2024-01-01T00:00:00");
  const [lockDownExpire, setLockDownExpire] = useState("2024-01-01T00:00:00");
  const [startDate, setStartDate] = useState("2024-01-01T00:00:00");
  const [nextDueDate, setNextDueDate] = useState("2024-01-01T00:00:00");
  const [maturityDate, setMaturityDate] = useState("2024-01-01T00:00:00");
  const [share, setShare] = useState(false);
  const linkValue = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/token-holders/invest/${params.assetDetails}`;

  const insuranceExpireDateTime = new Date(insuranceExpire);
  const coolOffExpireDateTime = new Date(coolOffExpire);
  const lockDownExpireDateTime = new Date(lockDownExpire);
  const startDateTime = new Date(startDate);
  const nextDueDateTime = new Date(nextDueDate);
  const maturityDateTime = new Date(maturityDate);
  const [isMakeCommit, setIsMakeCommit] = useState(false);

  const insuranceExpireDateFormatted = insuranceExpireDateTime
    .toISOString()
    .split("T")[0];
  const coolOffExpireDateFormatted = coolOffExpireDateTime
    .toISOString()
    .split("T")[0];
  const lockDownExpireDateFormatted = lockDownExpireDateTime
    .toISOString()
    .split("T")[0];
  const startDateFormatted = startDateTime?.toISOString()?.split("T")[0];
  const nextDueDateFormatted = nextDueDateTime?.toISOString()?.split("T")[0];
  const maturityDateFormatted = maturityDateTime?.toISOString()?.split("T")[0];
  const timeFormatted = insuranceExpireDateTime?.toTimeString()?.split(" ")[0];
  const router = useRouter();

  const [unit, setUnit] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const approveToken = async (tokenId:any) => {
    try {
      setIsLoading(true);
      const response = await privateApi.patch(
        `/api/v1/property-tokens/${tokenId}`,
        {approve: true,}
      );
      toast.success(response.data.message, {toastId: "success1"});
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const rejectToken = async (tokenId:any) => {
    try {
      setIsLoading(true);
      const response = await privateApi.patch(
        `/api/v1/property-tokens/${tokenId}`,
        {approve: false,}
      );
      toast.success(response.data.message, {toastId: "success1"});
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const getAsset = async () => {
    try {
      setIsLoading(true);
      const response = await privateApi.get(
        `/api/v1/property-tokens/${tokenId}`
      );
      setAssetDetail(response.data.data);
      setInsuranceExpire(response.data.data.issueExpiresAt);
      setCoolOffExpire(response.data.data.coolOffExpiresAt);
      setLockDownExpire(response.data.data.lockdownExpiresAt);
      setStartDate(response.data.data?.distribution?.startDate);
      setNextDueDate(response.data.data?.distribution?.nextDueDate);
      setMaturityDate(response.data.data?.distribution?.maturityDate);
      // toast.success(response.data.message, {toastId: "success1"});
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  useEffect(() => {
    getAsset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-[3%] py-8">
      {isLoading && <LoadingOverlay />}
      {/* back button */}
      <div
        className="flex gap-x-2 items-center cursor-pointer mb-6 text-slate-600"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-[18.46px] h-5 justify-center items-center gap-6 inline-flex" />
        <p className=" text-sm font-normal font-['Inter'] leading-tight">
          Back
        </p>
      </div>

      {/* Picture header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* main Picture */}
        <div className="relative">
          <Image
            src={
              assetDetail?.propertyImages
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/${assetDetail?.images[0]}`
                : ""
            }
            width={626}
            height={362}
            priority
            alt="Product Picture"
            className="rounded-[8px]"
          />
          <div className="absolute flex justify-center items-center gap-x-2 top-2 left-2 bg-white w-fit h-7 px-2 py-1 rounded-[7px] text-slate-600">
            <Signal />
            <p className="text-sm font-normal leading-tight">
              {assetDetail?.listingStatus}
            </p>
          </div>
        </div>
        {/* other pictures */}
        <div className="grid grid-cols-4 md:grid-cols-2 gap-2">
          <Image
            src={
              assetDetail?.propertyImages
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/${assetDetail?.images[1]}`
                : ""
            }
            width={626}
            height={362}
            priority
            alt="Product Picture"
            className="rounded-[8px]"
          />
          <Image
            src={
              assetDetail?.propertyImages
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/${assetDetail?.images[2]}`
                : ""
            }
            width={626}
            height={362}
            priority
            alt="Product Picture"
            className="rounded-[8px]"
          />
          <Image
            src={
              assetDetail?.propertyImages
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/${assetDetail?.images[3]}`
                : ""
            }
            width={626}
            height={362}
            priority
            alt="Product Picture"
            className="rounded-[8px]"
          />
          <div className="relative bg-opacity-10">
            <div className="absolute w-full h-full bg-black opacity-60" />
            <Image
              src={
                assetDetail?.propertyImages
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${assetDetail?.images[3]}`
                  : ""
              }
              width={626}
              height={362}
              priority
              alt="Product Picture"
              className="rounded-[8px]"
            />
            <div className="absolute top-[40%] left-4 w-[156px] h-8 px-2 py-1 bg-white bg-opacity-10 rounded border border-zinc-300 justify-center items-center gap-2 inline-flex">
              <Image src={fourSquare} alt="home" />
              <p className="text-center text-zinc-300 text-sm font-normal leading-normal">
                View all pictures
              </p>
            </div>
            <div className="absolute top-[60%] left-4 w-[156px] h-8 px-2 py-1 rounded justify-center items-center gap-2 inline-flex">
              <Image src={hexagon} alt="hexagon " />
              <p className="text-center text-[#856E3B] text-sm font-medium leading-tight">
                Virtual Tour
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body Contents */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="basis-1/2">
          {/* Investment Progress */}
          <div className="font-light text-[#585978] flex flex-col gap-y-1.5 px-4 border border-neutral-200 p-4 rounded-lg mb-6">
            <div className="flex justify-end text-xs md:text-sm">
              <p>
                Sold - {sold} of {assetDetail?.volume}
              </p>
            </div>

            {/* Progress Bar */}
            <Progress value={32} className="w-full h-2 bg-[#E7DDC8]" />

            <div className="flex gap-x-3 text-xs md:text-sm">
              <div className="flex gap-x-1.5 items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#4FBF6D]" />
                <span>Sold units</span>
              </div>
              <div className="flex gap-x-1.5 items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#E7DDC8]" />
                <span>Total volume</span>
              </div>
            </div>
          </div>

          {/* Asset Name */}
          <div className="mb-[24px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-slate-600 text-base font-normal font-['Inter'] leading-normal">
              {assetDetail?.propertyClass}
            </p>
            <div>
              <span className="text-black text-2xl font-medium">
                {assetDetail?.tokenCode} -{" "}
              </span>
              <span className="text-[#856E3B] text-xl font-medium leading-7">
                {assetDetail?.investmentType}
              </span>
            </div>
            <div className="inline-flex items-center gap-x-1">
              <MapPin size={16} />
              <p className="text-slate-600 text-sm font-normal leading-tight">
                {assetDetail?.estate}, {assetDetail?.area}, {assetDetail?.lga},{" "}
                {assetDetail?.city}, {assetDetail?.state} State.
              </p>
            </div>
          </div>

          {/* Dates */}
          <div className="mb-[24px] p-4 rounded-lg border border-neutral-200 flex justify-between items-start gap-2">
            <div className="space-y-0.5">
              <p className="text-slate-900 text-base font-medium font-['Inter'] leading-normal">
                {insuranceExpireDateFormatted}
              </p>
              <p className="text-slate-600 text-xs md:text-sm font-normal font-['Inter'] leading-tight">
                Issuance Expiry Date{" "}
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-slate-900 text-base font-medium font-['Inter'] leading-normal">
                {coolOffExpireDateFormatted}
              </p>
              <p className="text-slate-600 text-xs md:text-sm font-normal font-['Inter'] leading-tight">
                Cool-off Expiry Date
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-slate-900 text-base font-medium font-['Inter'] leading-normal">
                {lockDownExpireDateFormatted}
              </p>
              <p className="text-slate-600 text-xs md:text-sm font-normal font-['Inter'] leading-tight">
                Lockdown Expiry Date
              </p>
            </div>
          </div>

          {/* Options */}

          <div className="mb-[24px] max-w-[550px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 flex">
            <h2 className=" text-slate-900 text-base font-semibold leading-normal">
              Options
            </h2>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-normal leading-normal">
                Confers Voting Right
              </p>
              {assetDetail?.confersVotingRight ? (
                <CheckCircle2 className="text-[#989898] ml-auto" />
              ) : (
                <MinusCircle className="text-[#EF4444] ml-auto" />
              )}
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-normal leading-normal">
                Relist as Co-Own at Maturity
              </p>
              {assetDetail?.relistAtMarturity ? (
                <CheckCircle2 className="text-[#989898] ml-auto" />
              ) : (
                <MinusCircle className="text-[#EF4444] ml-auto" />
              )}
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-normal leading-normal">
                Can Leverage Property
              </p>
              {assetDetail?.canLeverage ? (
                <CheckCircle2 className="text-[#989898] ml-auto" />
              ) : (
                <MinusCircle className="text-[#EF4444] ml-auto" />
              )}
            </div>
          </div>

          {/* Property Details */}
          <div>
            <div className="flex lg:justify-between lg:items-center w-full">
              <h2 className=" text-slate-900 text-base font-semibold leading-normal mb-2">
                Property Details
              </h2>
              <p className="text-[#989898] text-sm font-normal font-['Inter'] underline leading-tight cursor-pointer">
                View Title Doc
              </p>
            </div>
            <div className="mb-2 max-w-[550px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <h2 className=" text-slate-900 text-base font-semibold leading-normal">
                Description
              </h2>
              <div className="text-[#585978] list-disc list-inside space-y-2.5 mt-2">
                <p>{assetDetail?.description}</p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-2 max-w-[550px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 flex">
            <h2 className=" text-slate-900 text-base font-semibold leading-normal">
              Amenities
            </h2>
            <div className=" flex place-content-between w-full gap-x-4 flex-wrap gap-y-4">
              {assetDetail?.tokenAmenities?.map((aminity: any, key: any) => (
                <div
                  key={key}
                  className="flex items-center gap-x-2 text-[#585978] text-sm"
                >
                  <Home />
                  <span>{aminity}</span>
                </div>
              ))}
            </div>
          </div>
          {assetDetail?.units?.map((unit: any, key: any) => (
            <Accordion
              key={key}
              type="single"
              collapsible
              className="px-4 rounded-lg border border-neutral-200"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Unit 1</AccordionTrigger>
                <AccordionContent>
                  <div className="flex w-full gap-x-4 flex-wrap gap-y-4">
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Home />
                      <span>{unit?.titleType}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Bed />
                      <span>{unit?.noOfBedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Sofa />
                      <span>{unit?.furnishing}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Delete />
                      <span>{unit?.noOfToilets} Toilets</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <DoorOpen />
                      <span>{unit?.noOfLivingRooms} LivingRooms</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Home />
                      <span>{unit?.sqm} sqm</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <PartyPopper />
                      <span>{unit?.documents}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <CookingPot />
                      <span>Fitted Kitched {unit?.fittedKitched}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-[#585978] text-sm">
                      <Paperclip />
                      <span>
                        {unit?.exitingTokenVolume?.toLocaleString()} Tokens to
                        exit
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* Body - Right Side*/}
        <div className="basis-1/2">
          <div className="h-fit mb-[24px] p-4 rounded-lg border border-neutral-200">
            <h2 className="mb-6 text-slate-900 text-3xl font-semibold leading-10">
              {assetDetail?.currencySymbol}
              {assetDetail?.issuePrice?.toLocaleString()}/token
            </h2>
            <div>
              <div className="mb-4 grid grid-cols-2 w-full">
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Min. subscription unit:
                </p>
                <p className="ml-auto text-right text-slate-900 text-base font- leading-normal">
                  {assetDetail?.minimumSubscriptionUnit}
                </p>
              </div>
              <div className="mb-4 grid grid-cols-2 w-full">
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Property class
                </p>
                <p className="ml-auto text-right text-slate-900 text-base font- leading-normal">
                  {assetDetail?.propertyClass}
                </p>
              </div>
              <div className="mb-4 grid grid-cols-2 w-full">
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Investment type
                </p>
                <p className="ml-auto text-right text-slate-900 text-base font- leading-normal">
                  {assetDetail?.investmentType}
                </p>
              </div>
            </div>
          </div>

          {/* Estimate Yield */}
          <div className="mb-[24px] max-w-[550px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 flex">
            <div className="flex lg:justify-between lg:items-center w-full">
              <h2 className=" text-slate-900 text-base font-semibold leading-normal">
                Estimated Yield
              </h2>
              <p className="text-zinc-500 text-sm font-normal font-['Inter'] underline leading-tight cursor-pointer">
                View Projection
              </p>
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Annual Returns:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base  leading-normal">
                {assetDetail?.annualYield?.regularReturns}
              </p>
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Capital Appreciation:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base leading-normal">
                {assetDetail?.annualYield?.appreciationEstimate}
              </p>
            </div>
          </div>

          {/* Distribution */}
          <div className="mb-[24px] max-w-[550px] p-4 rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 flex">
            <h2 className=" text-slate-900 text-base font-semibold leading-normal">
              Distribution
            </h2>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Frequency:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base  leading-normal">
                {assetDetail?.distribution?.frequency}
              </p>
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Start Date:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base leading-normal">
                {startDateFormatted}
              </p>
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Next Due Date:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base leading-normal">
                {nextDueDateFormatted}
              </p>
            </div>
            <div className="grid grid-cols-2 w-full">
              <p className="text-slate-600 text-base font-[400] leading-normal">
                Maturity Date:
              </p>
              <p className="ml-auto text-right text-slate-900 text-base leading-normal">
                {maturityDateFormatted}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <Button fullWidth disabled={assetDetail?.approval?.status === 'Approved' ? true : false }  variant="dark" onClick={() => approveToken(assetDetail?.id)}>
              {/* {assetDetail?.approval?.status === 'Approved' ? 'Approved' : "Approve"} */}
              Approve
            </Button>
          </div> 
          <Button
            fullWidth
            variant="outline"
            className="w-full"
            onClick={() => rejectToken(assetDetail?.id)}
            disabled={assetDetail?.approval?.status === 'Rejected' ? true : false } 
          >
            {/* {assetDetail?.approval?.status === 'Rejected' ? 'Rejected' : "Reject"} */}
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewTokenReview;
