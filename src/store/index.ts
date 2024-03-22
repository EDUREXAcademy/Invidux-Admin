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
  // tokenType: {
  //   listingStatus: "Wait-listed",
  //   propertyClass: "Wait-listed",
  //   investmentType: "Medium Co-own",
  // },
  // location: {
  //   state: "Lagos",
  //   city: "Ikeja",
  //   lga: "Ikeja Local Government",
  //   area: "Airport way",
  //   estate: "Love Estate",
  //   streetName: "ABC avenue",
  //   houseNumber: "100",
  //   countryId: 161,
  // },
  // property: {
  //   propertyValue: 200000,
  //   totalTokenVolume: 10000,
  //   openHouseDate: "2024-03-20",
  //   coolOffExpiresAt: "2024-03-21",
  //   issuePrice: 1500,
  //   issueStartsAt: "2024-03-22",
  //   issueExpiresAt: "2024-03-23",
  //   dealingExpiresAt: "2024-03-23",
  //   dealersMinimumSubscriptionUnit: 100,
  //   lockdownExpiresAt: "2024-03-23",
  //   minimumSubscriptionUnit: 50,
  //   issueRetainedToken: 20,
  //   annualReturnEstimate: 30,
  //   appreciationEstimate: 40,
  //   videoLink: "https://youtube.com",
  //   currency: "Naira",
  // },
  // presellTerms: {
  //   minimumPledgeDeposit: 10,
  //   firstCallDate: "2024-03-22",
  //   totalPledgeCap: 20,
  // },
  // propertyUnits: [
  //   {
  //     sqm: 1342,
  //     exitingTokenVolume: 12347,
  //     unitType: "Condo",
  //     noOfBedrooms: 1,
  //     noOfToilets: 1,
  //     noOfLivingRooms: 1,
  //     fittedKitchen: "No",
  //     furnishing: "Partially Furnish",
  //   },
  // ],
  // description: {
  //   propertyDescription: "The desc",
  //   amenities: ["Access Road"],
  // },
  // distribution: {
  //   frequency: "",
  //   tenure: "",
  //   startDate: "",
  //   relistAtMarturity: false,
  //   confersVotingRight: false,
  //   canLeverage: false,
  //   issuerBuyBack: false,
  //   gauranteedIncome: false,
  //   financialProjectionLink: "",
  // },
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
      setTokenIssuanceData: (data: TokenIssuanceData) =>
        set({ tokenIssuanceData: data }),
      resetTokenIssuanceData: () =>
        set({ tokenIssuanceData: defaultTokenIssuanceData }),
      setIssuedTokenId: (tokenId: string) => set({ issuedTokenId: tokenId }),
    }),
    {
      name: "store", // Set a name for your persisted store
      //storage: createJSONStorage(()=> sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
