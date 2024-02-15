import logo from "../assets/webworld-wireless.png"
import {Link} from "react-router-dom"


export default function NavBar() {
    return (
        <nav class="  bg-black border-gray-700">
            <div class="max-w flex flex-wrap items-center justify-between  p-4">
                <a href="#" class="flex place-content-start  space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-16" alt="Web World Ireland Wireless" />
                </a>
                <div class="hidden w-full md:block md:w-auto justify-end" id="navbar-dropdown">

                    <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 + bg-zinc-950 border-gray-700">
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><Link to="/">HOME</Link></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><Link to="wireless_website_2024/AboutUs">ABOUT US</Link></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><Link to="/Plans">PLANS</Link></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><Link to="/FAQPage">FAQ</Link></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><a href="#">COVERAGE</a></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><a href="#">SPEED TEST</a></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><a href="#">CONTACT</a></button>
                        </li>
                        <li>
                            <button className="bg-yellow-400 hover:bg-amber-300 py-2 px-4 rounded"><a href="#">LOGIN</a></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}