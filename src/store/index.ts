import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import TokenIssuanceData, { IUser } from "@/api/types";

type Store = {
  email: string;
  username: string;
  user: IUser | null;
  confirmBvn: boolean;
  walletPinModal: boolean;
  openFundWallet: boolean;
  openWalletFilter: boolean;
  currentIndex: number;
  tokenIssuanceData: TokenIssuanceData;
  issuedTokenId: string;
  addUserData: {};
  newUserCurrentIndex: number;
  setEmail: (authEmail: string) => void;
  setUsername: (username: string) => void;
  setUser: (authUser: IUser | null) => void;
  setConfirmBvn: (confirmBvn: boolean) => void;
  setWalletPinModal: (walletPinModal: boolean) => void;
  setOpenFundWallet: (fundWalletPop: boolean) => void;
  setOpenWalletFilter: (walletFilterPop: boolean) => void;
  setCurrentIndex: (index: number) => void;
  setTokenIssuanceData: (data: TokenIssuanceData) => void;
  resetTokenIssuanceData: () => void;
  setIssuedTokenId: (tokenId: string) => void;
  setAddUserData: (addUserData: {}) => void;
  setNewUserCurrentIndex: (userIndex: number) => void;
};

const defaultTokenIssuanceData: TokenIssuanceData = {
  tokenType: {
    listingStatus: "",
    propertyClass: "",
    investmentType: "",
  },
  location: {
    houseNumber: "",
    streetName: "",
    estate: "",
    area: "",
    city: "",
    lga: "",
    state: "",
    countryId: 0,
  },
  property: {
    propertyValue: 0,
    totalTokenVolume: 0,
    currency: "",
    issueRetainedToken: 0,
    minimumSubscriptionUnit: 0,
    annualReturnEstimate: 0,
    appreciationEstimate: 0,
    issuePrice: 0,
    videoLink: "",
    issueStartsAt: "",
    issueExpiresAt: "",
    openHouseDate: "",
    coolOffExpiresAt: "",
    dealingExpiresAt: "",
    dealersMinimumSubscriptionUnit: 0,
    lockdownExpiresAt: "",
  },
  presellTerms: {
    minimumPledgeDeposit: 0,
    totalPledgeCap: 0,
    // callFrequency: "",
    firstCallDate: "",
  },
  propertyUnits: [
    {
      unitType: "",
      sqm: 0,
      noOfBedrooms: 0,
      noOfToilets: 0,
      fittedKitchen: "",
      furnishing: "",
      noOfLivingRooms: 0,
      exitingTokenVolume: 0,
    },
  ],
  description: {
    amenities: [],
    propertyDescription: "",
  },
  distribution: {
    frequency: "",
    tenure: "",
    startDate: "",
    relistAtMarturity: false,
    confersVotingRight: false,
    canLeverage: false,
    issuerBuyBack: false,
    gauranteedIncome: false,
    financialProjectionLink: "",
  },
};

const useStore = create(
  persist<Store>(
    (set, get) => ({
      email: "",
      username: "",
      user: null,
      confirmBvn: false,
      walletPinModal: false,
      openFundWallet: false,
      openWalletFilter: false,
      currentIndex: 0,
      tokenIssuanceData: defaultTokenIssuanceData,
      issuedTokenId: "",
      addUserData: {},
      newUserCurrentIndex: 0,
      setEmail: (authEmail: string) =>
        set((state) => ({ ...state, email: authEmail })),
      setUsername: (username: string) =>
        set((state) => ({ ...state, username: username })),
      setUser: (authUser: IUser | null) =>
        set((state) => ({ ...state, user: authUser })),
      setConfirmBvn: (confirmBvn) =>
        set((state) => ({ ...state, confirmBvn: confirmBvn })),
      setWalletPinModal: (walletPinModal) =>
        set((state) => ({ ...state, walletPinModal: walletPinModal })),
      setOpenFundWallet: (fundWalletPop) =>
        set((state) => ({ ...state, openFundWallet: fundWalletPop })),
      setOpenWalletFilter: (walletFilterPop) =>
        set((state) => ({ ...state, openWalletFilter: walletFilterPop })),
      setCurrentIndex: (index: number) => set({ currentIndex: index }),
      setTokenIssuanceData: (data: TokenIssuanceData) => set({ tokenIssuanceData: data }),
      resetTokenIssuanceData: () => set({ tokenIssuanceData: defaultTokenIssuanceData }),
      setIssuedTokenId: (tokenId: string) => set({ issuedTokenId: tokenId }),
      setAddUserData: (addUserData: {}) => set({ addUserData: addUserData }),
      setNewUserCurrentIndex: (userIndex: number) => set({ newUserCurrentIndex: userIndex}),
    }),
    {
      name: "store", // Set a name for your persisted store
      //storage: createJSONStorage(()=> sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
