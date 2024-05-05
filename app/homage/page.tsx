
"use client"

import Header from '../components/header';
import Footer from '../components/footer';
import ProductHeader from '../components/productheader';
import Image from "next/image";
import TextSection from '../components/textsection';
import { WriggleBlock } from '../components/wriggleblock';
import BottomNav from '../components/bottomnav';
import TextSubtitle from '../components/textsubtitle';
import { GreenLine } from '../components/greenline';
import { useEffect, useRef } from 'react';

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function HomagePage() {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const renderUnderstandingTheProblem = () => {
        return <>
        <div className='flex flex-col md:flex-row justify-between max-w-5xl w-full items-center gap-4'>
        <Image src={`${assetPrefix}/images/Homage/Homage_Pie chart.png`} alt="chart logo" width={0} height={0} className='w-[520px] h-auto'/>
        <TextSection
            title={'Understanding the problem'}
            paragraph={<>Since January 2022, most of our leads have been coming from channels such as phone calls and web forms, with only around <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>30% of qualified leads</span> originating from self-serve channels (Homage App). This situation puts a high strain on operations, as it is not scalable and could potentially increase the drop-off rate if Homage is slow to respond to customers.</>}
        />
        </div>
        </>
    };

    const renderComplicatedOnboardingProcess = () => {
        return <>
        <div className='flex flex-col gap-6 md:gap-8'>
            <TextSection
                title={'Complicated onboarding process'}
                paragraph={<>
                To book their first care visit, Care Owners (CO) must provide essential details about the Care Recipient (CR), including medical conditions, mobility, disabilities, medications, and home environment. This information is crucial for the smart matching algorithm to find a Care Professional (CP) who meets the CR&apos;s care needs for future appointments.
                <br />< br/>
                COs can choose between a one-time hour-long In-Person Care Assessment (IPCA), where a Homage Care Specialist assesses the CR&apos;s home environment and conditions, or a 30-60 minute Self-Care Assessment (Self-CA) to save time. The IPCA results in service recommendations within 1-3 days (depending on the assessment date), while the Self-CA takes 3-5 working days.
                </>}
            />
            <Image src={`${assetPrefix}/images/Homage/Homage_Old design screens.png`} alt="design screens" width={0} height={0} className='w-[960px] h-auto'/>
            <TextSubtitle text={'Previous onboarding flow design screens'} />
            <TextSection
                title={''}
                paragraph={`While completing a Self-CA may seem more time-efficient and immediate, COs are required to complete approximately 25 steps before booking their first care visit. The time taken to complete the Self-CA varies depending on the COs' knowledge about all the medical and care needs of their loved ones. This has resulted in 75% of drop-offs coming from the care assessment process.`}
            />
        </div>
        <WriggleBlock />
        </>
    };

    const renderListeningWithTheIntentToUnderstand = () => {
        return <>
        <div className='flex flex-col gap-8'>
            <TextSection
                title={'Listening with the intent to understand'}
                paragraph={'We conducted a series of user interviews and usability testing sessions with our in-house Care Specialists, as well as Care Owners/Recipients from Singapore, Malaysia, and Australia. The goal was to understand the challenges they face when creating their profile and booking their first visit. We then consolidated these findings and grouped them into themes and categories through affinity mapping.'}
            />
            <Image src={`${assetPrefix}/images/Homage/Homage_Interviews.png`} alt="interviews" width={0} height={0} className='w-[960px] h-auto'/>
            <TextSubtitle text={'Interview & usability testing sessions conducted with Care Owners and in-house Care Specialists'} />
            <Image src={`${assetPrefix}/images/Homage/Homage_Affinity mapping.png`} alt="affinity mapping" width={0} height={0} className='w-[960px] h-auto'/>
            <TextSubtitle text={'Affinity mapping of findings'} />   
        </div>
        <WriggleBlock />
        </>
    };

    const renderWhatWereTheProblems = () => {
        return <>
        <TextSection
            title={'So... what were the problems?'}
            paragraph={'We identified a series of issues, ranging from UX/UI issues to pesky bugs that needed fixing, during our analysis. We then selected a few themes to brainstorm solutions. After 3 months of competitive analysis and design refinement, we developed proper solutions to address the issues and capitalize on opportunities for improvement.'}
        />
         <Image src={`${assetPrefix}/images/Homage/Homage_Case 1.png`} alt="case 1" width={0} height={0} className='w-[960px] h-auto'/>
            <TextSubtitle text={'Guided onboarding screens'} />
        </>
    };

    const renderCase1 = () => {
        return <>
        <TextSection
            title={'Case 1: “Help me get started! What should I be doing now?”'}
            paragraph={<>After creating their basic user profile, users are often unsure of the next steps. They may wonder, &quot;Do I need to purchase a package? Should I book a service? If so, which service should I select for my loved one?&quot; Therefore, we aim to provide users with clearer guidance on the next steps of actions they can take, using visuals like a progress stepper and app banners. We also encourage them to set up their care plan to receive tailored care recommendations for their loved ones.
            <br /><br />
            We believe that a guided onboarding experience in the app will provide a <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>sense of presence and assurance</span> to Care Owners. It shows that Homage is committed to assisting our Care Owners every step of the way.</>}
        />
         <Image src={`${assetPrefix}/images/Homage/Homage_Case 2.png`} alt="case 2" width={0} height={0} className='w-[960px] h-auto'/>
            <TextSubtitle text={'Simplified Self-CA flow'} />
        </>
    };

    const renderCase2 = () => {
        return <>
        <div className='flex flex-col gap-8'>
            <TextSection
                title={'Case 2: “What is Hyperlipedemia? Why are there so many questions to fill up? I don’t have all the information now... can I save my progress?”'}
                paragraph={<>
                To receive care recommendations and book a service, users must complete nearly 20 fields in the Self-CA flow, including understanding and selecting complex medical terms, and submitting required documentation for review by Care Specialists. Users often lack all necessary information at once, hence by allowing them to save their progress and return after acquiring information would be ideal.
                <br />< br/>
                We believe that by simplifying the questions and allowing users to automatically save their inputs, we can provide them with a <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>sense of calmness and remove any unnecessary sense of urgency</span> to complete their assessment.
                </>}
            />
        </div>
        <WriggleBlock />
        </>
    };

    const callbackFunction = (entries : IntersectionObserverEntry[], observer : IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                const videoElement = entry.target as HTMLVideoElement;
                if (videoElement.paused) {
                    videoElement.play();
                }
            }
        });
      };


    useEffect(() => {

        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver(callbackFunction, options);
        
        if (videoRef.current) observer.observe(videoRef?.current);

        return () => {
        if (videoRef.current) observer.unobserve(videoRef?.current);
        };
    }, [videoRef]);

    // create a div that LOADS and plays an .mp4 file which is in ${assetPrefix}/images/Homage/Homage_demo clip.mp4
    const renderDemoClip = () => {

        return <>
        <div className='flex flex-col gap-8'>
        <video
            ref={videoRef}
            loop
            muted
            autoPlay
            src={`${assetPrefix}/images/Homage/Homage_demo clip.mp4`}
            className='w-full h-auto'
        />
        </div>
        </>
    };
    
    const renderKeepingThingsClean = () => {
        return <>
        <div className='flex flex-col md:flex-row-reverse justify-between max-w-5xl w-full items-center gap-4'>
        {renderDemoClip()}
        <TextSection
            title={'Keeping things clean, clear and concise'}
            paragraph={<>
            As a large portion of our Care Owners are between 30-70 years old, we aim to provide them with a user-friendly app experience. We minimised the use of colours and adopted a minimal white template to <span style={{color: '#AFF5D7', fontWeight: 'bold'}}>reduce visual clutter and eye strain</span>.
            <br /><br />
            Over 6 months, we collaborated closely with our software engineers to enhance the app&apos;s UI design and resolve bugs. Simultaneously, we developed the Homage Design System, creating reusable components for a consistent design branding, while ensuring accessibility and flexibility.
            <br /><br />
            The feedback has been generally positive, with users finding the revamped app easier to navigate, and the old, daunting Homage blue interface (lol) is now a thing of the past.
            </>}
        />
        </div>
        
        <WriggleBlock/>
        </>
    };

    const renderContinuousImprovement = () => {
        return <div className='flex flex-col gap-10 items-center'>
        <div className='flex flex-col md:flex-row w-full justify-between gap-4 md:gap-0'>
            <Image src={`${assetPrefix}/images/Homage/Homage_Chart diagram 1.png`} alt="diagram 1" width={0} height={0} className='w-full md:w-1/2 max-w-[460px] h-auto'/>
            <Image src={`${assetPrefix}/images/Homage/Homage_Chart diagram 2.png`} alt="diagram 2" width={0} height={0} className='w-full md:w-1/2 max-w-[460px] h-auto'/>
        </div>
        <TextSection
            title={'Continuous improvement is better than delayed perfection'}
            paragraph={<>
                In a 3-week pilot, we observed a steady increase in app conversions from qualified leads to actualized leads in 2/3 of the countries (AU had a lower sample size as the business focuses less on the B2C market). More users successfully completed their profile creation and booked an In-Person Care Assessment or completed their Self-Care Assessment.
                <br />< br/>
                Overall, there was a 50% decrease in the number of users unable to self-serve in Singapore (15/19 of the users required urgent nursing services the next/following day), and a 30% increase in users who could fully self-serve and complete the onboarding flow themselves.
                <br /><br />
                Since mid-2023, with further improvements introduced, we have observed more users completing the onboarding process independently and relying less on our Care Advisory team for support.
                </>}
        />
        {GreenLine('w-28 md:w-52')}
        </div>
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-10" style={{backgroundColor: '#212121'}}>
        <Header />
        <div className='flex flex-col gap-10 md:gap-y-[100px] w-full md:w-10/12 items-center mt-10'>
        <ProductHeader 
        company="Homage" 
        title="Holistic health & caregiving services where you are" 
        subtitle="Homage is a personal care solution that combines curated and trained care professionals with smart technologies to manage and provide on-demand holistic home and community-based caregiving to seniors and adults, allowing them to age and recover with grace, control and dignity."
        image={<>
        <Image src={`${assetPrefix}/images/Homage/Homage_Logo.png`} alt="homage logo" width={0} height={0} className='w-[310px] h-auto hidden md:block'/>
        <Image src={`${assetPrefix}/images/Homage/Homage_Logo_Mobile.png`} alt="chart logo" width={0} height={0} className='w-[32px] h-auto block md:hidden'/>
        </>}
        badgeTitle={'Project Lead'}
        />
        <TextSection
            title={'Every minute is crucial when it comes to health'}
            paragraph={`Caregivers would understand the stress of providing immediate care for their loved ones, and every moment of care is crucial. Sometimes, caregivers seek care services outside to accommodate their busy lifestyles as well. 

            At Homage, we aim to simplify this care-sourcing process through the Homage App, where caregivers can self-manage and onboard the app, then book care services for their loved ones.`}
        />
        <WriggleBlock />
        {renderUnderstandingTheProblem()}

        {renderComplicatedOnboardingProcess()}
        {renderListeningWithTheIntentToUnderstand()}
        {renderWhatWereTheProblems()}
        {renderCase1()}
        {renderCase2()}
        {renderKeepingThingsClean()}
        {renderContinuousImprovement()}

        <BottomNav
            leftTitle={<div className='flex flex-col'>MerchPunk
            <span className='text-xs md:text-sm font-normal'>by BlockPunk</span></div>}
            leftLink={'/merchpunk'}
            rightTitle={'MyM1+ App'}
            rightLink={'/mym1'}
        />
        </div>

        <Footer />
    </main>
    );
  }