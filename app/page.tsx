import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import { GreenLine } from "./components/greenline";
import { ReactElement } from "react";
import Link from "next/link";
import ImageWithFadeInAnimation from "./components/imagewithfadeinanimation";

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function Home() {

  const renderProfile = (): ReactElement => (
    <div className="flex flex-col-reverse  md:flex-row max-w-5xl w-full md:justify-between gap-4">
      <div className="flex flex-col justify-center px-6 md:px-0">
        <h2 className="text-white text-[28px] md:text-4xl font-bold" style={{ color: '#AFF5D7' }}>
          Product Designer
        </h2>
        <h2 className="text-white text-[28px] md:text-4xl font-bold mb-3"> based in Singapore.</h2>
        <p className="text-white text-base font-semibold">Design for humans</p>
      </div>
      <ImageWithFadeInAnimation
        src={`${assetPrefix}/images/Homepage/Homepage_dp.png`}
        alt="my image"
        width={0}
        height={0}
        className="w-screen overflow-x-visible md:w-[410px] h-auto transition-opacity duration-500 ease-in "
      />
    </div>
  );


  const renderReadMore = (urlLink: string) => (
    <Link href={urlLink} className="flex flex-col justify-center gap-2 transition-all duration-300 ease-in-out  transform hover:scale-105">
      <div className="flex flex-row items-center">
      <p className="text-white text-base font-semibold">Read More</p>
      <Image src={`${assetPrefix}/images/Iconography/Arrow icon_24px.png`} alt="right-arrow" width={24} height={24} className={'ml-1'} />
      </div>
      {GreenLine('w-28')}
    </Link>
  ); 

  const renderProduct = (imgSrc: string, product: React.ReactNode, description: string, urlLink: string, isFlipped: boolean = false): ReactElement => (
    <div className={`flex ${isFlipped ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} max-w-5xl w-full justify-between h-auto md:h-72 gap-y-5 md:gap-y-0 gap-x-4 px-6 md:px-0`}>
      <Image src={imgSrc} alt="my image" width={496} height={306}/>
      <div className="flex flex-col justify-center gap-5 md:gap-4 w-3/4 md:w-96">
        <p className="text-white text-lg md:text-xl font-semibold">{product}</p>
        <p className="text-white text-2xl md:text-3xl font-bold">{description}</p>
        {renderReadMore(urlLink)}
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 md:p-10" style={{backgroundColor: '#212121'}}>
      <Header />
      <div className="flex flex-col gap-10 md:gap-20 w-full md:w-10/12 items-center mt-10">
      {renderProfile()}
      {GreenLine('w-28 md:w-52 -mt-3 md:mt-0')}
      {renderProduct(
        `${assetPrefix}/images/Homepage/Homepage_Homage banner.png`,
        "Homage",
        "Holistic health & caregiving services where you are",
        "/homage",
        )}
      {renderProduct(
        `${assetPrefix}/images/Homepage/Homepage_M1 banner.png`,
        "MyM1+ App",
        "Digital platform transformation",
        "/mym1",
        true)}
      {renderProduct(
        `${assetPrefix}/images/Homepage/Homepage_Blockpunk banner.png`,
        <>MerchPunk <span className="text-sm font-normal">by BlockPunk</span></>,
        "The biggest search engine for all things Anime",
        "/merchpunk",
        )}
      </div>
      <Footer />
    </main>
  );
}
