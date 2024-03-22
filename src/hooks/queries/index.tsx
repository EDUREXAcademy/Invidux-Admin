import { useQuery } from "@tanstack/react-query";
import {getCountries, getDashboardDatas, getInvestmentTypes, getListingStatus, getPropertyAmenities, getPropertyClass, getPropertyTitles, getRoles, getTokenReviews, getUnitTypes, getUser, getUserWallet } from "@/api";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};
export const useDashboardDatas = () => {
  return useQuery({
    queryKey: ["dasboardDatas"],
    queryFn: getDashboardDatas,
  });
};
export const useTokenReviews = () => {
  return useQuery({
    queryKey: ["tokenReviews"],
    queryFn: getTokenReviews,
  });
};

export const useUser = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });
};

export const useUserWallet = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: getUserWallet,
  });
};


// Registration

export const useGetRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });
};

// Token Issuance

export const usePropertyTitles = () => {
  return useQuery({
    queryKey: ["propertyTitles"],
    queryFn: getPropertyTitles,
  });
};

export const usePropertyAmenities = () => {
  return useQuery({
    queryKey: ["propertyAmenities"],
    queryFn: getPropertyAmenities,
  });
};

export const usePropertyClass = () => {
  return useQuery({
    queryKey: ["propertyClass"],
    queryFn: getPropertyClass,
  });
};

export const useInvestmentTypes = () => {
  return useQuery({
    queryKey: ["investmentTypes"],
    queryFn: getInvestmentTypes,
  });
};
export const useListingStatus = () => {
  return useQuery({
    queryKey: ["listingStatus"],
    queryFn: getListingStatus,
  });
};

export const useUnitTypes = () => {
  return useQuery({
    queryKey: ["UnitTypes"],
    queryFn: getUnitTypes,
  });
};