import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { PaystackButton } from 'react-paystack'

type configProps = {
  amount : number
  email : string
  reference: string
}


const PayButton = ({ amount, email, reference}:configProps) => {
  const router = useRouter()
  const publicKey = 'pk_test_ab5606be5cb5ece41207f5dabd1b6c6ab1be93f9'
  // const reference =  (new Date()).getTime().toString();
  console.log((new Date()).getTime().toString())

  const handlePaystackSuccessAction = (reference:string) => {
    // Implementation for whatever you want to do with reference and after success call.
    // router.push('/token-issuers/wallet')
    console.log(reference);
  }
  const handlePaystackCloseAction = () => {
    toast.error('Payment canceled by user.')
  }

  const componentProps = {
    reference: reference,
    email,
    amount,
    publicKey,
    text: 'Continue',
    onSuccess: (reference:string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return <PaystackButton {...componentProps} />;
};

export default PayButton;