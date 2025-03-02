import "./globals.css";
import TryButton from './trybutton';

export default function GetStarted() {
    return (
        <div className="m-4 w-screen lg:flex lg:justify-center lg:items-center">
            <h3 className="text-2xl font-semibold lg:mr-70 lg:text-4xl">Get started for <span className="text-pink-300">free</span></h3>
            <div className="lg:float-right">
                <TryButton title="Try free" />
                <TryButton title="Contact us" />
            </div>

        </div>
    );
}