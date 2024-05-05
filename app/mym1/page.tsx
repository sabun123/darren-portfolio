
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductHeader from '../components/productheader';
import Image from "next/image";
import TextSection from '../components/textsection';
import { WriggleBlock } from '../components/wriggleblock';
import BottomNav from '../components/bottomnav';
import { GreenLine } from '../components/greenline';

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function MyM1Page() {

    const renderDiscoveryWorkshops = () => {
        return <>
        <div className='flex flex-col md:flex-row justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images//m1/M1_Discovery workshop.png`} alt="discovery workshop" width={0} height={0} className='w-[520px] h-auto'/>
        <TextSection
            title={'Discovery workshops'}
            paragraph={'The team facilitated discovery workshops for both the M1 App and Website, with a primary focus on the Roaming feature of the service. During these workshops, we conducted various activities to understand stakeholder thoughts, including affinity mapping of their common feedback. We then curated problem statements based on their pointers, enabling us to identify opportunities to improve the platforms.'}
        />
        </div>
        <TextSection
            title={<>This active collaboration within the design team and M1 stakeholders allows us to discover new opportunities that will benefit not only the business but also the <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>consumers of the service</span>.</>}
        />
        <WriggleBlock />
        </>
    };

    const renderUserResearchAndTesting = () => {
        return <>
        <div className='flex flex-col md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images//m1/M1_Interview.png`} alt="research and testing" width={0} height={0} className='w-[505px] h-auto'/>
        <TextSection
            title={'User research & testing'}
            paragraph={'We conducted 10 sessions of remote and physical interviews with existing M1 consumers. The purpose was to understand their user journey, evaluate the pain points they experience while using the app, identify different user nuances, and determine design inconsistencies and usability problem areas within the user interface and content.'}
        />
        </div>
        </>
    };

    const renderAffinityMapping = () => {
        return <>
        <div className='flex flex-col md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images//m1/M1_Affinity mapping.png`} alt="affinity mapping" width={0} height={0} className='w-[505px] h-auto'/>
        <TextSection
            title={'Affinity mapping'}
            paragraph={'The team facilitated discovery workshops for both the M1 App and Website, with a primary focus on the Roaming feature of the service. During these workshops, we conducted various activities to understand stakeholder thoughts, including affinity mapping of their common feedback. We then curated problem statements based on their pointers, enabling us to identify opportunities to improve the platforms.'}
        />
        </div>
        </>
    };

    const renderPersonaCuration = () => {
        return <>
        <div className='flex flex-col md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images//m1/M1_Persona.png`} alt="persona curation" width={0} height={0} className='w-[505px] h-auto'/>
        <TextSection
            title={'Persona curation'}
            paragraph={'The team facilitated discovery workshops for both the M1 App and Website, with a primary focus on the Roaming feature of the service. During these workshops, we conducted various activities to understand stakeholder thoughts, including affinity mapping of their common feedback. We then curated problem statements based on their pointers, enabling us to identify opportunities to improve the platforms.'}
        />
        </div>
        <WriggleBlock />
        </>
    };

    const renderHighFidelity = () => {
        return <>
        <div className='flex flex-col-reverse md:flex-row justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images/M1/M1_High fidelity mockup.png`} alt="discovery workshop" width={0} height={0} className='w-[505px] h-auto'/>
        <TextSection
            title={'High fidelity mockups & prototype'}
            paragraph={'Insights gathered from user research and M1 stakeholders informed our final prototype concept. This concept underwent several design iterations, with the user flow and consumer journey map supporting our design process. Additionally, high-fidelity mockups and prototypes were created and presented to the marketing and customer support director of the organisation, showcasing the outcomes of our research.'}
        />
        </div>
        </>
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
        <Header />
        
        <div className='flex flex-col gap-10 md:gap-y-[100px] w-full md:w-10/12 items-center mt-10'>
        <ProductHeader 
        company="MyM1+ App" 
        title="Digital platform transformation" 
        subtitle="My M1+ app is a personalised application that manages your M1 services the way you want it to be."
        image={<>
        <Image src={`${assetPrefix}/images/M1/M1_Logo.png`} alt="M1 logo" width={0} height={0} className='w-[160px] h-auto hidden md:block'/>
        <Image src={`${assetPrefix}/images/M1/M1_Logo_Mobile.png`} alt="M1 mobile logo" width={0} height={0} className='w-[32px] h-auto block md:hidden'/>
        </>}
        badgeTitle={'Project Lead'}
        />
        <TextSection
            title={'Travel hassle-free anywhere, everywhere'}
            paragraph={`The M1 Data Passport enables valued customers to convert a portion of their local mobile data allotment for overseas use. However, users were previously unaware of the limitations and cost implications of the product. This lack of clarity resulted in numerous requests for refunds and cancellations of subscriptions.`}
        />
        <WriggleBlock />

        {renderDiscoveryWorkshops()}
        {renderUserResearchAndTesting()}
        {renderAffinityMapping()}
        {renderPersonaCuration()}

        <Image src={`${assetPrefix}/images/M1/M1_Consoldiated screens.png`} alt="m1 consolidated" width={0} height={0} className='w-full max-w-[960px] h-auto'/>
        {renderHighFidelity()}

        {GreenLine('w-28 md:w-52')}

        <BottomNav
            leftTitle={'Homage'}
            leftLink={'/homage'}
            rightTitle={<div className='flex flex-col'>MerchPunk
            <span className='text-xs md:text-sm font-normal'>by BlockPunk</span></div>}
            rightLink={'/merchpunk'}
        />
        </div>
        <Footer />
    </main>
    );
  }