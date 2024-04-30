
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductHeader from '../components/productheader';
import Image from "next/image";
import { WriggleBlock } from '../components/wriggleblock';
import TextSection from '../components/textsection';
import BottomNav from '../components/bottomnav';

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function MerchPunkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
      <Header />
      
      <div className='flex flex-col gap-y-[100px] w-10/12 items-center mt-10'>
        <ProductHeader 
        company={<>MerchPunk <span className='text-xl font-normal'> by BlockPunk</span></>}
        title="The biggest search engine for all things Anime" 
        subtitle="MerchPunk is the world’s largest Anime search engine and our mission is to help fans find and buy official Japanese merchandise easily and straight from the source."
        image={<Image src={`${assetPrefix}/images/Merchpunk/Merckpunk_Logo.png`} alt="homage logo" width={352} height={107} className='h-28'/>}
        badgeTitle={'UX/UI Designer'}
        />

        <div className='flex flex-row justify-between max-w-5xl w-full items-center gap-10'>
        <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Competitive analysis.png`} alt="chart logo" width={520} height={330} className='h-auto'/>
        <TextSection
            title={'Competitive analysis'}
            paragraph={'To comprehend the fundamentals and prerequisites for creating a successful e-commerce site, we delved into studying similar competitors and case studies. This approach served to inspire and stimulate our design thinking, aiding us in understanding the information architecture and various user flows of consumers more effectively.'}
        />
        </div>
        <WriggleBlock />

        <BottomNav
            leftTitle={'MyM1+ App'}
            leftLink={'/mym1'}
            rightTitle={'Homage'}
            rightLink={'/homage'}
        />
        </div>
        
      <Footer />
  </main>
  );
}