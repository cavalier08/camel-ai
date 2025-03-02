import "./globals.css";
import LinkBox from './linkbox';
import Form from './form';

export default function Footer() {
    return (
        <div className="lg:w-screen  lg:flex lg:justify-items lg:items-center text-white mb-40">
            <div className="">
                <Form />

            </div>

            <div className="flex ">
                <LinkBox title="Company" about1=" About Us" about2="Schedule a call" about3="Email Us" />
                <LinkBox title="Links" about1="Data Sources" about2="Demo Videos" about3="Blog" />
                <LinkBox title="Legal" about1="Terms" about2="Privacy Policy" about3="Security" />
            </div>


        </div>
    );
}

