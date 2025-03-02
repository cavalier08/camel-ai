import "./globals.css";
import TryButton from './trybutton';
import BlackTryButton from "./blacktrybutton";
export default function GetStarted() {
    return (
        <div className="m-4 w-screen lg:flex lg:justify-center lg:items-center  ml-9">
            <h3 className="text-2xl font-semibold lg:mr-70 lg:text-4xl">Get started for <span className="text-pink-300">free</span></h3>
            <div className="lg:float-right">
                <TryButton title="Try free" />
                <BlackTryButton title="Contact us" />
            </div>

        </div>
    );
}