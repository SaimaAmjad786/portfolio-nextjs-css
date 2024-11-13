import React from 'react';
import Link from "next/link";
import "../components/service.css";  // Make sure your CSS file is correct
import { FaCode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiArtixlinux } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";

function Services() {
    return (
        <div className="service" id="service">
            <h1>Our Services</h1>
            <div className="main-service">
                {/* Card 1 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                            <FaFigma />
                        </Link>
                    </li>
                    <h2>Figma Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                            <FaCode />
                        </Link>
                    </li>
                    <h2>Graphic Designing</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                            <FaCode />
                        </Link>
                    </li>
                    <h2>Web Development</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>

                {/* Card 4 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                            <FaShoppingCart  />
                        </Link>
                    </li>
                    <h2>Ecommerce</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>

                {/* Card 5 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                            <SiArtixlinux />
                        </Link>
                    </li>
                    <h2>UX/UI Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>

                {/* Card 6 */}
                <div className="card">
                    <li>
                        <Link href={"/"}>
                        <FaMobileRetro />
                        </Link>
                    </li>
                    <h2>Digital Marketing</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur mollitia fugiat quia rerum iste perspiciatis blanditiis qui possimus nesciunt corrupti et omnis beatae quo temporibus nisi fugit, rem reiciendis.
                    </p>
                    <button className="S-btn">Read More...</button>
                </div>
            </div>
        </div>
    );
}

export default Services;