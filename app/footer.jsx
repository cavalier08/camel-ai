import "./globals.css";
import LinkBox from './linkbox';
import Form from './form';

export default function Footer() {
    return (
        <div className="lg:flex lg:justify-items lg:w-[70vw] lg:items-center text-white mx-auto mb-30 pl-5 w-[100vw] ">
            <div className="mx-auto w-auto h-auto flex justify-center items-center">
                <Form />

            </div>

            <div className="flex mx-auto h-auto justify-center items-center w-auto">
                <LinkBox title="Company" about1=" About Us" about2="Schedule a call" about3="Email Us" />
                <LinkBox title="Links" about1="Data Sources" about2="Demo Videos" about3="Blog" />
                <LinkBox title="Legal" about1="Terms" about2="Privacy Policy" about3="Security" />
            </div>




        </div>
    );
}

