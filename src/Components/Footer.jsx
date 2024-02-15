import { FaFacebook, FaPaypal } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-6 lg:py-8">
                    {/* Sitemap */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-6 text-m font-semibold text-white uppercase">Sitemap</h2>
                        <ul className="text-white">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Residential Broadband</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Business Broadband</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Coverage Area</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Installation Process</a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-6 text-m font-semibold text-white uppercase">Contact</h2>
                        <ul className="text-white">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">sales@webworld.ie</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">+353 14951112</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Web World Ireland Unit B15 South City Business Centre,Tallaght, D24</a>
                            </li>
                        </ul>
                    </div>
                    {/* Service */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-6 text-m font-semibold text-white uppercase">Service</h2>
                        <ul className="text-white">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Monday to Friday: 9am to 9pm</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Saturday: 9am to 1pm</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">We Accept: </a>
                            </li>
                            <div className="flex items-center">
    <FaCcVisa className="inline-block mr-4" size={40} />
    <FaCcMastercard className="inline-block mr-4" size={40} />
    <FaPaypal className="inline-block" size={40} />
</div>

                        </ul>
                    </div>
                </div>
                {/* Bottom part of the footer */}
                <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
                    {/* Copyright */}
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center block md:inline-block md:mt-0">
                        © Copyright 2023 Web World Ireland All Rights Reserved
                    </span>
                    {/* Social icons */}
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="#" className="text-white hover:text-gray-500">
                            <FaFacebook size={25}/>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-500">
                            <FaTwitter size={25}/>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-500">
                            <FaLinkedin size={25}/>
                            <span className="sr-only">LinkedIn Account</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-500">
                            <MdEmail size={25}/>
                            <span className="sr-only">Email</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-500">
                            <FaBlogger size={25}/>
                            <span className="sr-only">Blog</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}