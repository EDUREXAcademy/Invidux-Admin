import { privateApi, publicApi } from "./adminAxios";
import TokenIssuanceData, { ContactInputs, IncomeInputs, registerInputs, verifyEmailInputs } from "./types";


// Authenication - publicApi
export const login = async (data: {email:string; password:string;}) => {
  const res = await publicApi.post("/api/v1/login", data);
  return res.data;
};
export const verifyOtp = async (data: verifyEmailInputs) => {
  const res = await publicApi.post("/api/v1/verify-otp", data);
  return res.data;
};
export const forgotPassword = async (email: {email:string}) => {
  const res = await publicApi.post("/api/v1/forgot-password", email);
  return res.data;
};
export const resendOtp = async (email: {email:string}) => {
  const res = await publicApi.post("/api/v1/request-otp", email);
  return res.data;
};
export const verifyPasswordOtp = async (data: {email:string; otp:string}) => {
  const res = await publicApi.post("/api/v1/verify-password-otp", data);
  return res.data;
};
export const resendPasswordOtp = async (data: {email:string}) => {
  const res = await publicApi.post("/api/v1/resend-password-otp", data);
  return res.data;
};
export const resetPassword = async (data: {email:string; password:string}) => {
  const res = await publicApi.post("/api/v1/reset-password", data);
  return res.data;
};
export const getRoles = async () => {
  const res = await publicApi.get("/api/v1/utilities/users/roles");
  return res.data;
};






// Token Issuance*************************************************
export const getPropertyTitles = async () => {
  const res = await publicApi.get("/api/v1/utilities/property-titles");
  return res.data;
};

export const getPropertyAmenities = async () => {
  const res = await publicApi.get("/api/v1/utilities/property-amenities");
  return res.data;
};
export const getPropertyClass = async () => {
  const res = await publicApi.get("/api/v1/utilities/tokens/property-class");
  return res.data;
};

export const getInvestmentTypes = async () => {
  const res = await publicApi.get("/api/v1/utilities/tokens/investment-type");
  return res.data;
};

export const getListingStatus = async () => {
  const res = await publicApi.get("/api/v1/utilities/tokens/listing-status");
  return res.data;
};

export const getUnitTypes = async () => {
  const res = await publicApi.get("/api/v1/utilities/unit-types");
  return res.data;
};

export const issueToken = async (data: TokenIssuanceData ) => {
  const res = await privateApi.post("/api/v1/property-tokens", data);
  return res.data;
};



// Wallet - privateApi *****************************************************************************************
export const activateWallet = async (data: {dateOfBirth: Date; bvn: string}) => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/activate", data);
  return res.data;
};
export const walletActivationOTP = async (otp: {otp:string}) => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/complete-activation", otp);
  return res.data;
};
export const resendWalletActivationOTP = async () => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/resend-activation-otp",);
  return res.data;
};
export const resendTransactionOTP = async (data: any) => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/resend-transaction-otp", data);
  return res.data;
};
export const setWalletPin = async (data: {newWalletPin: number}) => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/set-wallet-pin", data);
  return res.data;
};
export const fundWallet = async (data: {newWalletPin: number}) => {
  const res = await privateApi.patch("/api/v1/wallet/current-user/set-wallet-pin", data);
  return res.data;
};


// Queries - privateApi ****************************************************************************************
// Dasboard
export const getDashboardDatas = async () => {
  const res = await privateApi.get("/api/v1/admin/dashboard");
  return res.data;
};
export const getTokenReviews = async () => {
  const res = await privateApi.get("/api/v1/property-tokens");
  return res.data.data;
};
// Utilities
export const getCountries = async () => {
  const res = await publicApi.get("/api/v1/utilities/locations/countries");
  return res.data;
};
export const getUser = async () => {
  const res = await privateApi.get("/api/v1/profile/current-user");
  return res.data;
};




export const uploadProfileImage = async (data: any) => {
  const res = await privateApi.patch("/api/v1/profile/current-user/upload-photo", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};
export const uploadCoverImage = async (data: any) => {
  const res = await privateApi.patch("/api/v1/profile/current-user/upload-cover-photo", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};
export const uploadKYCImage = async (data: any) => {
  const res = await privateApi.patch("/api/v1/profile/current-user/set-kyc-image", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};
export const updateProfile = async (data: {userName: string; middleName: string; gender: string; maritalStatus: string}) => {
  const res = await privateApi.patch("/api/v1/profile/current-user", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.data;
};
export const updateContact = async (data: Omit<ContactInputs, "email" | "address">) => {
  const res = await privateApi.patch("/api/v1/profile/current-user/contact", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.data;
};
export const updateIncome = async (data: IncomeInputs) => {
  const res = await privateApi.patch("/api/v1/profile/current-user/update-income-info", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.data;
};
export const changePassword = async (data: { oldPassword: string; newPassword: string }) => {
  const res = await privateApi.post("/api/v1/profile/current-user/change-password", data);
  return res.data;
};
export const changePin = async (data: { oldWalletPin: string; newWalletPin: string }) => {
  const res = await privateApi.post("/api/v1/profile/current-user/change-wallet-pin", data);
  return res.data;
};

// Wallet
export const getUserWallet = async () => {
  const res = await privateApi.get("/api/v1/wallet/current-user");
  return res.data;
};




// Portfolio
export const getUserPortfolio = async () => {
  const res = await privateApi.get("/api/v1/portfolio/current-user");
  return res.data;
};
export const getPortfolioTransactions = async () => {
  const res = await privateApi.get("/api/v1/portfolio/current-user/transactions");
  return res.data;
};