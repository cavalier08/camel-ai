import "./globals.css";
import cat_pic from './img/cat_pic.jpg';
import TryButton from './trybutton';
import BlackTryButton from "./blacktrybutton";


export default function MainPage() {
    return (
        <div className="h-full w-screen justify-items-center">

            <h1 className="text-4xl font-extrabold mb-10 lg:text-6xl mt-20">The AI Data Analyst</h1>

            <h3 className="text-lg font-medium lg:font-extrabold lg:text-2xl mb-15">Ask questions, get instant charts and insights from your data.</h3>

            <div className="m-10 w-screen flex justify-center items-center">
                <TryButton title="Try free" />
                <BlackTryButton title="Book demo" />
            </div>


            <div className="w-screen p-4 flex justify-center items-center">
                <FunFact title="Y Combinator backed" />

                <FunFact title="Enterprise Security" />
                <FunFact title="100% Data Privacy" />

            </div>

            <Video />

            <div className="h-20 w-screen">

            </div>



        </div>

    );
}



function FunFact({ title }) {
    return (
        <div className="w-50 bg-gray-700 bg-opacity-10 text-gray-50 flex p-2 border-opacity-0 rounded-xl justify-center m-1">
            <img src={cat_pic} />
            {title}
        </div>
    );
}

function Video() {
    return (
        <div className="w-[75vw] h-[60vh] rounded-xl bg-black">
            <img src={cat_pic}></img>

        </div>
    );
}