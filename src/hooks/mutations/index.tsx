import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import useStore from "@/store";
import {login, verifyOtp, forgotPassword, verifyPasswordOtp, resendOtp,
  resendPasswordOtp, resetPassword, activateWallet, walletActivationOTP, resendWalletActivationOTP, 
  resendTransactionOTP, setWalletPin, updateProfile, uploadProfileImage, updateContact, updateIncome, uploadCoverImage, uploadKYCImage, changePassword, changePin, issueToken, addNewUser } from "@/api";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

// Authentication *******************************************************************************************
export const useLogin = () => {
  const store = useStore();
  const router = useRouter();
  return useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      store.setUser(data?.data)
      if (data === 'Please verify your account.') {
        toast.success(data, {
          toastId: "success1",
        })
        router.push('/admin/email-verification')
      }
      else if (data.data.twoFactorEnabled === false) {
        toast.success(data.message, {
          toastId: "success1",
        });
        router.push('/admin/token-review')
        // router.refresh()
      } else {
        toast.success(data.message, {
          toastId: "success1",
        });
        router.push('/admin/twofa')
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.data.token);
      }
    },
    onError: (error: any) => {
      let resMessage;
      if( error?.response?.status === 500  &&  error?.response?.data === "You have an existing login otp, please verify your otp!"){
        toast.success('Please enter your 2FA code')
        router.push('/token-holders/twofa')
      }else if(error?.response?.status === 500 && error?.response?.data === 'Please complete your registration'){
        toast.success(error?.response?.data)
        router.push('/token-holders/register')
      }else resMessage = error.response.data.errorMessages || error?.response?.data
      toast.error(resMessage, {
        toastId: "error1",
      });
    },
  });
};

export const useVerifyOtp= () => {
  const router = useRouter();
  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
      router.push('/admin/dashboard')
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useForgotPassword= () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data:any) => {
      store.setEmail(data.data.email)
      toast.success(data.message, {
        toastId: "success1",
      });
      router.push('/admin/verify-password-otp')
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useVerifyPasswordOtp = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: verifyPasswordOtp,
    onSuccess: (data:any) => {
      store.setEmail(data.data.email)
      toast.success(data.message, {
        toastId: "success1",
      });
      router.push('/admin/reset-password')
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useResendPasswordOtp = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: resendPasswordOtp,
    onSuccess: (data:any) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useResetPassword = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
      router.push('/admin/login')
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

// Private Admin *******************************************************************************************
export const useAddNewUser = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: addNewUser,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};





// Wallet ****************************************************************************************************
export const useActivateWallet = () => {
  const router = useRouter();
  const store = useStore()
  // let setConfirmBvn = store.setConfirmBvn
  return useMutation({
    mutationFn: activateWallet,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
      store.setConfirmBvn(true)
      // router.push('/admin/wallet/confirm-bvn')
    },
    onError: (error: any) => {
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useWalletActivationOtp = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: walletActivationOTP,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
      store.setConfirmBvn(false)
      // window.location.reload()
    },
    onError: (error: any) => {
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useResendWalletActivationOtp = () => {
  return useMutation({
    mutationFn: resendWalletActivationOTP,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useResendTransactionOtp = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: resendTransactionOTP,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useSetWalletPin = () => {
  const router = useRouter();
  const store = useStore()
  return useMutation({
    mutationFn: setWalletPin,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
      store.setWalletPinModal(false)
      window.location.reload()
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
      resMessage = error.response.data.errorMessages : 
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};


// User Profile***********************************************************************
//Profile Image
export const useUploadProfileImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: (data:any) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

//Cover Image
export const useUploadCoverImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadCoverImage,
    onSuccess: (data: any) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data:any) => {
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};


//KYC Image
export const useUploadKYCImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadKYCImage,
    onSuccess: (data: any) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useUpdateContactInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateContact,
    onSuccess: (data:any) => {
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

export const useUpdateIncomeInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateIncome,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries(["userData"] as InvalidateQueryFilters);
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
    },
  });
};

// Change Password
export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data: any) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
        resMessage = error.response.data.errorMessages :
        error?.response?.status === 500 ?
          resMessage = error.response.data :
          resMessage = (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      toast.error(resMessage);
    },
  });
};
// Change Wallet Pin
export const useChangePin = () => {
  return useMutation({
    mutationFn: changePin,
    onSuccess: (data: any) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
        resMessage = error.response.data.errorMessages :
        error?.response?.status === 500 ?
          resMessage = error.response.data :
          resMessage = (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      toast.error(resMessage);
    },
  });
};

// Token Issuance
export const useTokenIssuance = () => {
  return useMutation({
    mutationFn: issueToken,
    onSuccess: (data: any) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 400 ?
        resMessage = error.response.data.errorMessages :
        error?.response?.status === 500 ?
          resMessage = error.response.data :
          resMessage = (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      toast.error(resMessage);
    },
  });
};