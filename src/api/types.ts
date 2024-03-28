export const RE_DIGIT = new RegExp(/^\d+$/);
export interface IUser {
  email: string;
  registrationStatus: string;
  token: string;
  twoFactorEnabled: boolean;
  userId: string;
  username: string;
  walletActivated: boolean;
}
export interface registerInputs {
  email: string;
  password: string;
  agreeToTerm: boolean;
  source: number;
}
export interface verifyEmailInputs {
  email: string;
  otp: string;
}
export interface completeRegInputs {
  email: string;
  phone: string;
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  countryId: number;
}
export interface ContactInputs {
  email: string;
  phoneNumber: string;
  address: {
    street: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    countryName: string;
  };
  nextOfKin: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
  };
}
export interface IncomeInputs {
  incomeRange: string;
  employmentStatus: string;
  jobSector: string;
}

// Define the type for the token issuance data
interface TokenType {
  listingStatus: string;
  propertyClass: string;
  investmentType: string;
}

interface Location {
  houseNumber: string;
  streetName: string;
  estate: string;
  area: string;
  city: string;
  lga: string;
  state: string;
  countryId: number;
}

interface Property {
  propertyValue: number;
  totalTokenVolume: number;
  currency: string;
  issueRetainedToken: number;
  minimumSubscriptionUnit: number;
  annualReturnEstimate: number;
  appreciationEstimate: number;
  issuePrice: number;
  videoLink: string;
  dealingExpiresAt: string;
  dealersMinimumSubscriptionUnit: number;
  issueStartsAt: string; 
  issueExpiresAt: string; 
  openHouseDate: string; 
  coolOffExpiresAt: string; 
  lockdownExpiresAt: string; 
}

interface PresellTerms {
  minimumPledgeDeposit: number;
  totalPledgeCap: number;
  // callFrequency: string;
  firstCallDate: string; 
}

interface PropertyUnit {
  unitType: string;
  sqm: number;
  noOfBedrooms: number;
  noOfToilets: number;
  noOfLivingRooms: number;
  exitingTokenVolume: number;
  fittedKitchen: string;
  furnishing: string;
}

interface Description {
  amenities: string[];
  propertyDescription: string;
}

interface Distribution {
  frequency: string;
  tenure: string;
  startDate: string; 
  relistAtMarturity: boolean;
  confersVotingRight: boolean;
  canLeverage: boolean;
  issuerBuyBack: boolean;
  gauranteedIncome: boolean;
  financialProjectionLink: string;
}

// Define the type for the token issuance data
interface TokenIssuanceData {
  tokenType: TokenType;
  location: Location;
  property: Property;
  presellTerms: PresellTerms | null;
  propertyUnits: PropertyUnit[];
  description: Description;
  distribution: Distribution;
}

export default TokenIssuanceData;

