import './globals.css';

export default function MoreInfo() {
    return (
        <div className="bg-black opacity-90">
            <div className="h-20 w-screen">

            </div>



            <div className="bg-slate-900 opacity-60 h-content w-screen p-2">
                <SlidingDisplay />
                <SlidingDisplay />
            </div>
            <Display title="Ask any question" heading1="Camel uses your live data." heading2="Get tables and charts instantly." />

            <Display title="Powerful Dashboards" heading1="Save any graph to a live dashboard." heading2="Start a chart to answer ad hoc questions." />






        </div>

    );
}

function SlidingDisplay() {
    return (
        <div className="transition-transform duration-1000 ease-in-out hover:translate-x-32 overflow-x-scroll flex wrap">
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />
            <SlidingImg />

        </div>
    );
}

function SlidingImg({ src }) {
    return (
        <div className="w-20 h-20 bg-white m-3 rounded-lg">
            <img src={src} />

        </div>
    );
}

function Display({ title, heading1, heading2, src }) {
    return (
        <div className="mb-15">
            <div className="">
                <h3 className="text-3xl w-auto border-dashed rounded-md border-gray-800 border-dashed border-2 p-2 flex justify-center items-center">{title}</h3>
            </div>
            <div className="text-white m-4 justify-items-center items-center text-lg font-semibold">
                <h4 className="">{heading1}</h4>
                <h4 className="">{heading2}</h4>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-gradient-to-r from-indigo-900 via-slate-600 to-yellow-900 w-[80vw] h-[50vh] lg:h-[80vh]  md:min-w-40 rounded-xl">
                    <img src={src} />

                </div>

            </div>


        </div>
    );

}
