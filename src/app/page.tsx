
import { EB_Garamond, Nabla } from 'next/font/google';
import IntroSection from './components/introduction';
import AboutSection from './components/about';
import NavBar from './components/NavBar';
import './styles/globals.css';


export const metadata = {
  title: "Yong-Yu Huang",
  description: "Yong-Yu Huang's Portfolio",
}

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})

export default function Home() {
  return (
    <div className={`bg-white text-black ${garamond.className}`}>
    <NavBar />
    <AboutSection />

    </div>
);
}
