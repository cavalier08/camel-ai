import TryButton from './trybutton';
import './globals.css';

export default function Build() {
    return (
        <div className="flex justify-center items-center lg:w-[70vw]">
            <div className="sm:w-2/5 mr-4 ml-4">
                <h3 className="text-3xl mb-4">Want to build with camelAI?</h3>

                <h4 className="text-xl text-gray-400">Embed AI-Powered analytics directly in your application with our API</h4>
                <TryButton title="Join API Waitlist" />
            </div>
            <div className="lg:1/2 sm:w-3/5">
                <Fact title="Natural Language -> SQL" subtitle="Same powerful query engine that power camelAI" />
                <Fact title="Secure Integration" subtitle="Enterprise-grade security and permissions" />
                <Fact title="Flexible Integration" subtitle="Full control over the user experience" />

            </div>

        </div>
    );
}

function Fact({ title, subtitle }) {
    return (
        <div className="mb-4">
            <h3 className="lg:text-2xl text-white text-xl">{title}</h3>
            <h4 className="lg:text-lg text-gray-500">{subtitle}</h4>
        </div>
    );
}