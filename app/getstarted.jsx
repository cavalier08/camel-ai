import "./globals.css";
import TryButton from './trybutton';
import BlackTryButton from "./blacktrybutton";
export default function GetStarted() {
    return (
        <div className="m-4 lg:flex lg:justify-center lg:items-center">
            <h3 className="text-2xl font-semibold lg:mr-70 lg:text-4xl">Get started for <span className="text-pink-300">free</span></h3>
            <div className="lg:float-right flex flex-wrap">
                <div className="float-right">
                    <TryButton title="Try free" />

                </div>
                <BlackTryButton title="Contact us" />
            </div>

        </div>
    );
}