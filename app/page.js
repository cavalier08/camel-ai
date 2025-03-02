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
    <div className="bg-cover bg-[url('https://e1.pxfuel.com/desktop-wallpaper/71/12/desktop-wallpaper-gaussian-blur-gradient-simple-backgrounds-blurred-colors-color-gradient.jpg')]">
      <div className="flex justify-center items-center">
        <Navbar />

      </div>
      <MainPage />
      <div className="bg-black">

        <MoreInfo />
        <Build />
        <div className="lg:mx-auto lg:w-[60vw] h-auto">
          <Faq />

        </div>
        <GetStarted />
        <Footer />


      </div>


    </div>
  );
}
