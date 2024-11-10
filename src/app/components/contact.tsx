import React from 'react'
import "../components/contact.css";

function Contact() {
    return (
        <div className='contact' id='contact-us'>
            <h1>Contact</h1>
            <div className='main-contact'>
                <form>
                    <h2>Contact Us</h2>

                    {/* User Name */}
                    <div className="form-group">
                        <label htmlFor="name">User Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your name'
                            className='input-field'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email'
                            className='input-field'
                            required
                        />
                    </div>


                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="subject"
                            id="subject"
                            name="subject"
                            placeholder='Enter your subject'
                            className='input-field'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter your password'
                            className='input-field'
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Write your message'
                            className='text'
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className='C-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact