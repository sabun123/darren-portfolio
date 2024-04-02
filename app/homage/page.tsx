
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function HomagePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24" style={{backgroundColor: '#212121'}}>
        <Header />
        
        <Link href="/">
          Home
        </Link>
        <Footer />
    </main>
    );
  }