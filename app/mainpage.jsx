import "./globals.css";
import cat_pic from './img/cat_pic.jpg';
import TryButton from './trybutton';
import BlackTryButton from "./blacktrybutton";


export default function MainPage() {
    return (
        <div className="h-full w-screen justify-items-center">

            <h1 className="text-4xl font-extrabold mb-10 lg:text-6xl mt-20 lg:mt-[20vh]">The AI Data Analyst</h1>

            <h3 className="text-lg font-medium w-[80vw] md:w-[90vw] h-auto lg:font-extrabold lg:text-2xl mb-15 text-center">Ask questions, get instant charts and insights from your data.</h3>

            <div className="m-10 w-[70vw] flex flex-wrap justify-center items-center">
                <TryButton title="Try free" />
                <BlackTryButton title="Book demo" />
            </div>


            <div className="w-screen p-4 flex justify-center items-center flex-wrap">
                <FunFact title="Y Combinator backed" />

                <FunFact title="Enterprise Security" />
                <FunFact title="100% Data Privacy" />

            </div>

            <Video />





        </div>

    );
}



function FunFact({ title }) {
    return (
        <div className="w-50 bg-gray-500/50 text-gray-50 p-2 border-opacity-0 rounded-xl justify-center m-1 flex">
            <img className="w-5 h-5 m-0 float-left mr-2" src="https://i.imgur.com/BTD22A6.png" />
            <h3 className="">{title}</h3>
        </div>
    );
}

function Video() {
    return (
        <div className="w-[75vw] h-[60vh] mx-auto rounded-xl bg-black">
            <img src={cat_pic}></img>

        </div>
    );
}