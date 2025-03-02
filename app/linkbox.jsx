import "./globals.css";

export default function LinkBox({ title, about1, about2, about3, href1, href2, href3 }) {
    return (
        <div className="mt-20 text-white w-30 h-30 m-2 h-50 ">
            <h5 className="text-gray-400 mb-10 text-sm">{title}</h5>
            <button className="button">
                <a href={href1}>{about1}</a>

            </button>
            <button className="button">
                <a href={href2}>{about2}</a>

            </button>
            <button className="button">
                <a href={href3}>{about3}</a>

            </button>

        </div >
    );

}


