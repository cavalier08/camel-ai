import "./globals.css";
import TryButton from './trybutton';

export default function Form() {
    return (
        <div className="mt-10">
            <h1 className="text-5xl m-4">camel<span className="text-pink-300">AI</span></h1>
            <form>
                <label className="block m-4 text-lg font-lg text-gray-900 dark:text-white mb-0">Subscribe to our newsletter for product updates


                </label>
                <div className="flex h-auto flex-wrap">
                    <input className="rounded-3xl m-4 h-12 bg-gray-50 border border-gray-300 text-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-900" placeholder="email" type="text">
                    </input>
                    <div className="text-black">
                        <TryButton title="Subscribe" />

                    </div>
                </div>



            </form>


        </div>
    );
}