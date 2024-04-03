
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

export default function HomagePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
        <Header />
        <div className='flex flex-col gap-y-[100px] w-10/12 items-center mt-10'>
        <ProductHeader 
        company="Homage" 
        title="Holistic health & caregiving services where you are" 
        subtitle="Homage is a personal care solution that combines curated and trained care professionals with smart technologies to manage and provide on-demand holistic home and community-based caregiving to seniors and adults, allowing them to age and recover with grace, control and dignity."
        image={<Image src={`${assetPrefix}/images/Homage/Homage_logo.png`} alt="homage logo" width={310} height={79} className='h-20'/>}
        badgeTitle={'Project Lead'}
        />
        <TextSection
            title={'Every minute is crucial when it comes to health'}
            paragraph={`Caregivers would understand the stress of providing immediate care for their loved ones, and every moment of care is crucial. Sometimes, caregivers seek care services outside to accommodate their busy lifestyles as well. 

            At Homage, we aim to simplify this care-sourcing process through the Homage App, where caregivers can self-manage and onboard the app, then book care services for their loved ones.`}
        />
        <WriggleBlock />

        <div className='flex flex-row justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images/Homage/Homage_Pie chart.png`} alt="chart logo" width={520} height={330} className='h-auto'/>
        <TextSection
            title={'Understanding the problem'}
            paragraph={<>Since January 2022, most of our leads have been coming from channels such as phone calls and web forms, with only around <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>30% of qualified leads</span> originating from self-serve channels (Homage App). This situation puts a high strain on operations, as it is not scalable and could potentially increase the drop-off rate if Homage is slow to respond to customers.</>}
        />
        </div>
        <WriggleBlock />

        <TextSection
            title={'So... what were the problems?'}
            paragraph={'We identified a series of issues, ranging from UX/UI issues to pesky bugs that needed fixing, during our analysis. We then selected a few themes to brainstorm solutions. After 3 months of competitive analysis and design refinement, we developed proper solutions to address the issues and capitalize on opportunities for improvement.'}
        />

        <BottomNav
            leftTitle={<>MerchPunk
                <span className='text-sm font-normal'>by BlockPunk</span></>}
            leftLink={'/merchpunk'}
            rightTitle={'MyM1+ App'}
            rightLink={'/mym1'}
        />
        </div>

        
       
        <Footer />
    </main>
    );
  }