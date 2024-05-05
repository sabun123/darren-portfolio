
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductHeader from '../components/productheader';
import Image from "next/image";
import { WriggleBlock } from '../components/wriggleblock';
import TextSection from '../components/textsection';
import BottomNav from '../components/bottomnav';
import { GreenLine } from '../components/greenline';

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function MerchPunkPage() {

  const renderStartToFinish = () => {
    return <>
      <div className='flex flex-col justify-between max-w-5xl w-full items-center gap-4'>
      
      <TextSection
          title={'The start to finish shopping experience'}
          paragraph={<>
          What makes an e-commerce platform successful is providing customers with a great user experience. The fewer the steps, the less stress for users. Our aim was to create a seamless checkout experience from the moment customers land on the homepage to the final checkout summary page. 
          <br /><br />
          One area where MerchPunk initially lacked was a Shopping Cart System, which allows customers to quickly organize their intended purchases and complete their orders hassle-free.</>}
      />
      <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Shopping cart screens.png`} alt="discovery workshop" width={0} height={0} className='w-full h-auto'/>
      </div>
      </>
  };

  const renderBounceRateReduction = () => {
    return <>
    <div className='flex flex-col-reverse md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
    <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Bounce rate.png`} alt="discovery workshop" width={0} height={0} className='w-[440px] h-auto'/>
    <TextSection
        title={'Bounce rate reduction'}
        paragraph={'One of the primary challenges for every e-commerce site is minimising the bounce rate. MerchPunk previously experienced a consistent drop-off rate of over 75%, indicating poor user experience during the checkout flow. Consequently, we implemented features that swiftly reduced the bounce rate by almost 15%.'}
    />
    </div>
    <WriggleBlock />
    </>
  };

  const renderOurMVP = () => {
    return <>
      <div className='flex flex-col-reverse md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
      <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Blockchain NFT.png`} alt="discovery workshop" width={0} height={0} className='w-[440px] h-auto'/>
      <TextSection
          title={'Our MVP: Blockchain NFC Tags'}
          paragraph={`MerchPunk utilises blockchain tagging to distinctly differentiate authentic products from counterfeits. Each purchase is tagged with NFC chips containing a blockchain certificate of authenticity, which cannot be modified or replicated by any third party.
          This approach not only combats counterfeit products but also collects valuable data on consumer demographics, aiding creators in planning their next releases.`}
      />
      </div>
    </>
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
      <Header />
      
      <div className='flex flex-col gap-10 md:gap-y-[100px] w-full md:w-10/12 items-center mt-10'>
        <ProductHeader 
        company={<>MerchPunk <span className='text-sm md:text-xl font-normal'> by BlockPunk</span></>}
        title="The biggest search engine for all things Anime" 
        subtitle="MerchPunk is the world’s largest Anime search engine and our mission is to help fans find and buy official Japanese merchandise easily and straight from the source."
        image={<Image src={`${assetPrefix}/images/Merchpunk/Merckpunk_Logo.png`} alt="merchpunk logo" width={0} height={0} className='w-[352px] h-auto hidden md:block'/>}
        badgeTitle={'UX/UI Designer'}
        />

        <div className='flex flex-col md:flex-row justify-between max-w-5xl w-full items-center gap-10'>
        <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Competitive analysis.png`} alt="chart logo" width={520} height={330} className='h-auto'/>
        <TextSection
            title={'Competitive analysis'}
            paragraph={'To comprehend the fundamentals and prerequisites for creating a successful e-commerce site, we delved into studying similar competitors and case studies. This approach served to inspire and stimulate our design thinking, aiding us in understanding the information architecture and various user flows of consumers more effectively.'}
        />
        </div>
        <WriggleBlock />

        {renderStartToFinish()}
        {renderBounceRateReduction()}

        <Image src={`${assetPrefix}/images/Merchpunk/Merchpunk_Consolidated screens.png`} alt="merchpunk consolidated" width={0} height={0} className='w-full max-w-[960px] h-auto'/>
        {renderOurMVP()}

        {GreenLine('w-28 md:w-52')}

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