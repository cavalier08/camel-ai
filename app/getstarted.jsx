import "./globals.css";
import TryButton from './trybutton';

export default function GetStarted() {
    return (
        <div className="m-4 w-screen lg:flex">
            <h3 className="text-2xl font-semibold">Get started for <span className="text-pink-300">free</span></h3>
            <div className="">
                <TryButton title="Try free" />
                <TryButton title="Contact us" />
            </div>

        </div>
    );
}