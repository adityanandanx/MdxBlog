import Image from "next/image";
import { FC } from "react";
import { H1 } from "../mdx/headings";
import ContactForm from "../ContactForm";
import Astronaut from "../../public/contact.jpg";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = ({}) => {
    return (
        // <div className="w-full flex flex-col justify-center items-center gap-10 mt-10 h-fit">
        <div className="relative grid lg:grid-cols-2 w-full border-2 border-slate-900 rounded-md overflow-hidden">
            <Image
                className="md:static h-56 object-cover lg:h-full w-full"
                src={Astronaut}
                alt="astronaut on a car"
                width={2160 / 2}
                height={2700 / 2}
            />
            <div className="flex flex-col gap-10 items-center lg:items-stretch py-16 lg:px-16 px-6">
                <H1>Let&lsquo;s have a chat!</H1>
                <ContactForm className="" />
            </div>
        </div>
        // </div>
    );
};

export default ContactSection;
