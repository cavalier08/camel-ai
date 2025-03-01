import "./globals.css";

export default function LinkBox({ title, about1, about2, about3, about4 }) {
    return (
        <div>
            <h5>{title}</h5>
            <Link about1="About us" />
            <Link about2={about2} />
            <Link about3={about3} />
            <Link about4={about4} />
        </div>
    );

}

function Link({ href, about }) {
    return (
        <div>
            <a href={href} target="_blank" className="h-3 p-2 m-1">{about}</a>
        </div>
    );
}