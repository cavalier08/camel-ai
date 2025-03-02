import Navbar from './navbar';
import MainPage from './mainpage';
import MoreInfo from './moreinfo';
import Faq from './faq';
import GetStarted from './getstarted';
import Form from './form';
import Footer from './footer';
import Build from './build';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-950 via-slate-600 to-pink-980">
      <div className="flex justify-center items-center">
        <Navbar />

      </div>
      <MainPage />
      <div className="bg-black">

        <MoreInfo />
        <Build />
        <div className="lg:flex lg:justify-center lg:items-center lg:w-[60vw]">
          <Faq />

        </div>
        <GetStarted />
        <Footer />


      </div>


    </div>
  );
}
