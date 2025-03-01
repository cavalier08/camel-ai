import "./globals.css";
import LinkBox from './linkbox';
import Form from './form';

export default function Footer() {
    return (
        <div display="flex text-white">
            <Form />
            <LinkBox />
            <LinkBox />
            <LinkBox />


        </div>
    );
}

