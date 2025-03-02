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
    <div className="bg-cover bg-[url('https://t3.ftcdn.net/jpg/04/38/04/24/360_F_438042459_X9KgJ6dGUcz2kJElm5ubL5pq7rrcC6wa.jpg')]">
      <div className="flex justify-center items-center">
        <Navbar />

      </div>
      <MainPage />
      <div className="bg-black">
        <div className="transition-opacity duration-1000 ease-in-out">
          <MoreInfo />
          <Build />
          <div className="lg:mx-auto lg:w-[60vw] h-auto">
            <Faq />

          </div>
          <GetStarted />
          <Footer />
        </div>




      </div>


    </div>
  );
}
