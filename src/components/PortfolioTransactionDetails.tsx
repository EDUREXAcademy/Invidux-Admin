import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Eye } from 'lucide-react'

type Props = {
    transaction: {
        date: string;
        tokenCode: string
        transType: string;
        amount: string;
        desc: string;
        balance: string;
        status: string;
        investmentType: string
        tokenVolume: string
        tokenValue: string
        view: string
    }
}

const PortfolioTransactionDetails = ({transaction}: Props) => {
  return (
      <Dialog>
          <DialogTrigger className='h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                  <Eye className="cursor-pointer h-full" size={20} />
              </div>
          </DialogTrigger>
          <DialogContent className="max-w-xl md:px-10 md:py-10">
              <DialogHeader>
                  <DialogTitle className='text-3xl font-normal'>Transaction Details</DialogTitle>
                  <DialogDescription className="flex flex-col gap-y-4 py-8">
                      <div className='flex justify-between items-center'>
                          <div>
                              <p className='text-3xl font-semibold text-[#977c42]'>${transaction.amount}</p>
                              <p className='text-sm text-[#838383] font-[400]'>{transaction.desc}</p>
                          </div>
                          {transaction.status === "Successful" ? (
                              <td className="whitespace-nowrap">
                                  <div className='bg-green-200 text-green-600 text-center p-2 rounded-sm'>
                                      {transaction.status}
                                  </div>
                              </td>
                          ) : (
                              <td className="whitespace-nowrap">
                                  <div className='bg-[#FFEBC3] text-[#D48C01] text-center p-2 rounded-sm'>
                                      {transaction.status}
                                  </div>
                              </td>
                          )}
                      </div>
                  </DialogDescription>
                  <div className='flex flex-col gap-y-5'>

                      <div className='grid grid-cols-5 w-full'>
                          <div className='col-span-2 '>
                              <h3>{transaction.tokenValue}</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Unit value</p>
                          </div>
                          <div className='col-span-2 '>
                              <h3>{transaction.tokenVolume}</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Token volume</p>
                          </div>
                          <div className=''>
                              <h3 className='truncate'>{transaction.date}</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Date</p>
                          </div>
                      </div>
                      
                      <div className='grid grid-cols-5'>
                          <div className='col-span-2'>
                              <h3>{transaction.transType}</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Transaction type</p>
                          </div>
                          <div className='col-span-2'>
                              <h3>{transaction.investmentType}</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Investment type</p>
                          </div>
                          <div className='col-span-'>
                              <h3>Primary</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Market</p>
                          </div>
                      </div>

                      <div className='grid grid-cols-5 w-full'>
                          <div className='col-span-2 '>
                              <h3>Seyi Doe</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Sender</p>
                          </div>
                          <div className='col-span-2 '>
                              <h3>John Doe</h3>
                              <p className='text-sm text-[#838383] font-[400]'>Receiver</p>
                          </div>
                      </div>
                  </div>
              </DialogHeader>
              <DialogFooter>
                  <DialogClose asChild className=" w-fit" >
                      <Button variant="outline" className='border-black border-2 text-base p-5'>Close</Button>
                  </DialogClose>
              </DialogFooter>
          </DialogContent>
      </Dialog>
  )
}

export default PortfolioTransactionDetails