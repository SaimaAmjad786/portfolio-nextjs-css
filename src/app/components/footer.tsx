import React from 'react'
import Link from "next/link";
import {FaGithub} from 'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <footer>
        <div className=" px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center ">
            <span className="ml-3 text-xl text-red-500 font-bold">Saima Portfolio</span>
          </a>
          <p className="text-sm text-red-500 font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Portfolio Website
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          
            <Link
              target='blank' href={"https://github.com/SaimaAmjad786"} className="text-white">
              <FaGithub className='text-3xl ' />
            </Link>

            <Link
              target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-gray-200">
              <IoLogoVercel className='text-3xl' />
            </Link>

            <Link
              target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-500">
              <FaLinkedin className='text-3xl ' />
            </Link>
          </span>
        </div>
      </footer>

    </div>
  )
}

export default Footer