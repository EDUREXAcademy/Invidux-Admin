import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../assets/icons/logo.svg'
import arrowTop from '../../../../assets/icons/arrow-top.svg'

const PrivacyPolicy = () => {
  return (
    <div className='px-[5%] py-[40px]'>
      <header className='mb-[40px]'>
        <Image src={logo} alt="Invidux Logo" className='w-[145px]'/>
      </header>
      <main>
        <h1 className="text-slate-900 text-4xl font-bold leading-[44px] mb-[6px]">Privacy Policy</h1>
        <p className="text-slate-600 text-sm font-normal leading-tight mb-[56px]">Last updated: December 27th, 2023</p>
        <div className='flex flex-col md:flex-row gap-x-10'>
          <div className='max-w-[690px]'>
            <div className='mb-[40px]'>
              <h2 className="text-slate-900 text-[20px] md:text-2xl font-medium leading-tight mb-[32px]">This Privacy Policy will help you understand how we collect, use, and share your personal information.</h2>
              <h4 className="text-slate-900 text-xl font-medium leading-7 mb-[16px]">Privacy Policy</h4>
              <div className="text-slate-600 text-base font-normal text-justify leading-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              <br/><br/>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
              <br/><br/>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
              </div>
            </div>
            <div className='mb-[40px]'>
              <h4 className="text-slate-900 text-xl font-medium leading-7 mb-[16px]">Privacy Summary</h4>
              <ol className='pl-4 list-decimal text-justify'>
                <li>
                  <span className="text-slate-600 text-base font-semibold leading-normal">What personal information do we collect:</span>
                  <span className="text-slate-600 text-base font-normal leading-normal"> voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br/></span>
                </li>
                <li>
                  <span className="text-slate-600 text-base font-semibold leading-normal">How we use cookies and collect information using technology:</span>
                  <span className="text-slate-600 text-base font-normal font-['Inter'] leading-normal"> voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br/></span>
                </li>
                <li>
                  <span className="text-slate-600 text-base font-semibold leading-normal">We may transfer Personal information to other countries:</span>
                  <span className="text-slate-600 text-base font-normal leading-normal"> voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br/></span>
                </li>
                <li>
                  <span className="text-slate-600 text-base font-semibold leading-normal">Security:</span>
                  <span className="text-slate-600 text-base font-normal leading-normal"> voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br/></span>
                </li>
              </ol>
              <p className="text-slate-600 text-base font-normal leading-normal mt-6 text-justify">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>
          </div>
          {/* Table of Contents */}
          <div>
            <h2 className="text-slate-900 text-xl font-medium leading-7 mb-[40px]">Table of contents</h2>
            <div className='flex flex-col gap-y-[24px] text-slate-900 text-base font-normal underline leading-normal mb-[48px]'>
              <p>What personal information do we collect</p>
              <p>How we use cookies and collect information using technology</p>
              <p>We may transfer Personal information to other countries:</p>
              <p>Security</p>
            </div>
            <div className="flex text-[#B1924E] text-base font-medium leading-normal"><Link href='#'> Back to top </Link><Image src={arrowTop} alt="up arrow" /></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy