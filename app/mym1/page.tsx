
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductHeader from '../components/productheader';
import Image from "next/image";
import TextSection from '../components/textsection';
import { WriggleBlock } from '../components/wriggleblock';
import BottomNav from '../components/bottomnav';

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function MyM1Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
        <Header />
        
        <div className='flex flex-col gap-y-[100px] w-10/12 items-center mt-10'>
        <ProductHeader 
        company="MyM1+ App" 
        title="Digital platform transformation" 
        subtitle="My M1+ app is a personalised application that manages your M1 services the way you want it to be."
        image={<Image src={`${assetPrefix}/images/M1/M1_logo.png`} alt="homage logo" width={160} height={160} className='h-40'/>}
        badgeTitle={'Project Lead'}
        />
        <TextSection
            title={'Travel hassle-free anywhere, everywhere'}
            paragraph={`The M1 Data Passport enables valued customers to convert a portion of their local mobile data allotment for overseas use. However, users were previously unaware of the limitations and cost implications of the product. This lack of clarity resulted in numerous requests for refunds and cancellations of subscriptions.`}
        />
        <WriggleBlock />

        <BottomNav
            leftTitle={'Homage'}
            leftLink={'/homage'}
            rightTitle={<>MerchPunk
                <span className='text-sm font-normal'>by BlockPunk</span></>}
            rightLink={'/merchpunk'}
        />
        </div>
        <Footer />
    </main>
    );
  }