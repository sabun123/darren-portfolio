import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import { GreenLine } from "./components/greenline";
import { ReactElement } from "react";
import Link from "next/link";

export default function Home() {

  const renderProfile = (): ReactElement => (
    <div className="flex flex-col md:flex-row max-w-5xl w-full md:justify-between gap-4">
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-4xl font-bold">
          Product Designer
        </h2>
        <h2 style={{ color: '#AFF5D7' }} className="text-white text-4xl font-bold mb-3"> based in Singapore.</h2>
        <p className="text-white text-base font-semibold">Design for humans</p>
      </div>
      <Image src="/images/Homepage/Homepage_dp.png" alt="my image" width={410} height={286} />
    </div>
  );

  const renderReadMore = (urlLink: string) => (
    <Link href={urlLink} className="flex flex-col justify-center gap-2">
      <div className="flex flex-row items-center">
      <p className="text-white text-base font-semibold">Read More</p>
      <Image src={'/images/Iconography/Arrow icon_24px.png'} alt="right-arrow" width={24} height={24} className={'ml-1'} />
      </div>
      {GreenLine('w-28')}
    </Link>
  ); 

  const renderProduct = (imgSrc: string, product: string, description: string, urlLink: string, isFlipped: boolean = false): ReactElement => (
    <div className={`flex ${isFlipped ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} max-w-5xl w-full justify-between h-72`}>
      <Image src={imgSrc} alt="my image" width={496} height={306}/>
      <div className="flex flex-col justify-center gap-4 w-3/4 md:w-96">
        <p className="text-white text-xl font-bold">{product}</p>
        <p className="text-white text-3xl font-bold">{description}</p>
        {renderReadMore(urlLink)}
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24" style={{backgroundColor: '#212121'}}>
      <Header />

      {/* make a div that can contain elements vertically aligned and have a gap of 80px between them */}
      <div className="flex flex-col gap-10 md:gap-20 w-10/12 items-center mt-10">
      {renderProfile()}
      {GreenLine()}
      {renderProduct(
        "/images/Homepage/Homepage_Homage banner.png",
        "Homage",
        "Holistic health & caregiving services where you are",
        "/homage",
        )}
      {renderProduct(
        "/images/Homepage/Homepage_M1 banner.png",
        "MyM1+ App",
        "Digital platform transformation",
        "/mym1",
        true)}
      {renderProduct(
        "/images/Homepage/Homepage_Blockpunk banner.png",
        "MerchPunk by BlockPunk",
        "The biggest search engine for all things Anime",
        "/merchpunk",
        )}
      </div>
      <Footer />
    </main>
  );
}