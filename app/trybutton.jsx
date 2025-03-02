import "./globals.css";
export default function TryButton({ title }) {
    return (
        <button className="">
            <div className="p-2 pl-5 pr-5 w-48 bg-white rounded-3xl border-opacity-1 border-white border-2 font-bold m-4 ml-0 flex">
                <div>{title}</div> <div className="ml-auto ">&gt;</div>
            </div>
        </button>
    );
}