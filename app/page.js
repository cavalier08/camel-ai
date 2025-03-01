import Navbar from './navbar';
import MainPage from './mainpage';
import MoreInfo from './moreinfo';
import Faq from './faq';
import GetStarted from './getstarted';
import Form from './form';
import Footer from './footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-slate-600 to-yellow-900">
      <div className="flex justify-center items-center">
        <Navbar />

      </div>
      <MainPage />
      <div className="bg-black">

        <MoreInfo />
        <div className="lg:flex lg:justify-center lg:justify-items-center lg:w-[60vw]">
          <Faq />

        </div>
        <GetStarted />
        <Footer />


      </div>


    </div>
  );
}
