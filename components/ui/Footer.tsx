import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
    return (
        <footer className="absolute top-full bottom-0 text-sm flex flex-col justify-center items-center w-full bg-gray-900 text-white p-12 mt-10">
            <p className="flex items-center gap-1 text-center">
                Copyright &copy; 2023 by Aditya Nandan.
                <br />
                All rights reserved.
            </p>
        </footer>
    );
};
export default Footer;
