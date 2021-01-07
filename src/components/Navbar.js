import { Logo } from '../icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faDog,
    faBone,
    faCog,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Avatar from '../components/Avatar'
import { useState } from 'react'


function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <div className="flex items-center h-20 px-6 justify-between shadow-md bg-white relative z-50">
            <a className="flex-1 no-underline block h-8">
                <Logo className="h-full" />
            </a>
            <div className="flex-none hidden md:flex md:justify-center md:h-full">
                <a
                    href="#"
                    className="block h-full flex items-center mx-4 px-2 text-gray-600 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                    <FontAwesomeIcon icon={faHome} className="mr-3 w-5" /> Home
        </a>
                <a
                    href="#"
                    className="block h-full flex items-center mx-4 px-2 text-gray-600 transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                    <FontAwesomeIcon icon={faDog} className="mr-3 w-5" /> Dogs
        </a>
                <a
                    href="#"
                    className="block h-full flex items-center mx-4 px-2 text-gray-600 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                    <FontAwesomeIcon icon={faBone} className="mr-3 w-5" /> Bones
        </a>
                <a
                    href="#"
                    className="block h-full flex items-center mx-4 px-2 text-gray-600 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                    <FontAwesomeIcon icon={faCog} className="mr-3 w-5" /> Settings
        </a>
            </div>
            <div className="flex-1 items-center justify-end hidden md:flex">
                <Avatar
                    image="https://avatars1.githubusercontent.com/u/16757133"
                    className="cursor-pointer my-2"
                />
            </div>
            <div className="-mr-2 flex md:hidden">
                <FontAwesomeIcon
                    icon={mobileOpen ? faTimes : faBars}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-black text-3xl cursor-pointer h-4"
                />
            </div>
            {mobileOpen && (
                <div className="bg-white absolute top-full left-0 w-full py-8 shadow-md lg:hidden">
                    <div className="flex-1 flex flex-col items-center text-xl">
                        <a
                            href="#"
                            className="no-underline px-2 my-2 font-medium text-gray-600 hover:text-indigo-500 flex items-center"
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-3 h-6" /> Home
            </a>
                        <a
                            href="#"
                            className="no-underline px-2 py-1 my-2 font-medium text-gray-600 hover:text-indigo-500 flex items-stretch"
                        >
                            <FontAwesomeIcon icon={faDog} className="mr-3 h-6" /> Dogs
            </a>
                        <a
                            href="#"
                            className="no-underline px-2 my-2 font-medium text-gray-600 hover:text-indigo-500 flex items-center"
                        >
                            <FontAwesomeIcon icon={faBone} className="mr-3 h-6" /> Bones
            </a>
                        <a
                            href="#"
                            className="no-underline px-2 my-2 font-medium text-gray-600 hover:text-indigo-500 flex items-center"
                        >
                            <FontAwesomeIcon icon={faCog} className="mr-3 h-6" /> Settings
            </a>
                        <Avatar
                            image="https://avatars1.githubusercontent.com/u/16757133"
                            status="online"
                            className="cursor-pointer my-2"
                        />
                    </div>
                </div>
            )}
        </div>

    )
}

export default Navbar;