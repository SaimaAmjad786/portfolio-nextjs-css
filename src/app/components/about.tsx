
import React from 'react';
import Link from "next/link";
import "../components/about.css";  // Ensure your path is correct
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import Image from "next/image";

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-header">
                <Image 
                    src="/pick2.avif" 
                    alt="Saima's Profile" 
                    width={200} 
                    height={200} 
                    className="image" 
                    layout="intrinsic" // Makes the image responsive
                />
            </div>

            <div className="about-content">
                <h1>About Me</h1>
                <h2>Frontend Developer</h2>
                <p>
                    My name is Saima Amjad. I have completed my Intermediate studies and I am currently enrolled in the Governor Sindh IT Initiative.
                    I am dedicated to advancing my skills in Web Development. My technical expertise spans HTML, CSS, TypeScript, with a focus on Next.js
                    and Tailwind CSS. Currently, I am working on personal projects using Next.js and Tailwind CSS. I am excited to explore my journey
                    in web development and contribute to the digital landscape through a blend of technical expertise and creative vision.
                </p>
                <div className="button" >
                    <button className="A-btn">Hire-Me</button>
                </div>

                <div className="social-media">
                    <Link target="_blank" href="https://github.com/SaimaAmjad786">
                        <FaGithub className="social-icon" />
                    </Link>

                    <Link target="_blank" href="https://vercel.com/new/saima-amjads-projects">
                        <IoLogoVercel className="social-icon" />
                    </Link>

                    <Link target="_blank" href="https://www.linkedin.com/in/saima-amjad-2263012b6/">
                        <FaLinkedin className="social-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
