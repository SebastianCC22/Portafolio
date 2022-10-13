import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

const links = [
    {
        id: 1,
        name: 'Home'
    },
    {
        id: 2,
        name: 'About Me'
    },
    {
        id: 3,
        name: 'Projects'
    },
    {
        id: 4,
        name: 'Contact'
    }   
]

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-sky-900 fixed">
      <div className="text-4xl ml-2 font-signature">
        <h1>Sebas</h1>
      </div>
      <ul className="hidden md:flex">

        {
            links.map(({id, name}) => (
                <li key={id} className="px-4 cursor-pointer font-medium hover:scale-110 duration-1000 hover:bg-gray-300 rounded-md">{name}</li>
            ))
        }
        

      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer  pr-4 z-10 text-black md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-sky-900 to-cyan-500 text-black">
        {
            links.map(({id, name}) => (
                <li key={id} className="px-4 cursor-pointer py-6 text-4xl">{name}</li>
            ))
        }
        </ul>


        )}



    </div>
  );
};

export default Navbar;