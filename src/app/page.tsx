
import { EB_Garamond, Nabla } from 'next/font/google';
import IntroSection from './components/introduction';

import NavBar from './components/NavBar';
import './styles/globals.css';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})

export default function Home() {
  return (
    <div className={`bg-white text-black ${garamond.className}`}>
    <NavBar />
    <IntroSection/>
    <h2 ><span>Contact</span></h2>
      <p> <a href="mailto:yongyu.yy.huang@gmail.com">Email</a><span> or </span><a href="https://www.twitter.com/yong_yuhuang">Twitter</a><span> or </span><a href="https://yongyuhuang.substack.com/">substack</a>.
      </p>

    </div>
);
}
