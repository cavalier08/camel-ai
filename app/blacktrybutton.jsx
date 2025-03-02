import './globals.css';

export default function BlackTryButton({ title }) {
    return (
        <button className="">
            <div className="p-2 pl-5 text-white pr-5 w-48 bg-transparent rounded-3xl border-opacity-1 border-gray-300 border-2 font-bold m-4 ml-0 flex">
                <div>{title}</div> <div className="ml-auto ">&gt;</div>
            </div>
        </button>
    );

}   