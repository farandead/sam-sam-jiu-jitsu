import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import PageLayout from '../PageLayout'; // Assuming you have a PageLayout component
import backgroundImage from '../../assets/images/contact_us_bg.png'; // Add your background image here

const ContactUs = () => {
    return (
        <PageLayout className='pt-10' backgroundImage={backgroundImage} childClasses='bg-white/0' backgroundStyle={{ opacity: 0.3 }}>
            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#23b6cb]">CONTACT US!</h1>
                    
                    <p className="text-gray-600 mt-4">
                        Got questions? We have answers! Find everything you need to know about our classes, training, and more.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col space-y-8 text-left w-full lg:w-auto pt-20">
                        <div className="flex items-center space-x-8">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black text-3xl" />
                            <div className="h-10 border-l-4 border-black"></div> {/* Vertical line */}

                            <div>
                                <h3 className="font-bold text-lg text-[#23b6cb]">Address</h3>
                                <p className="text-black">3 St Mark's Rd, Wolverhampton, WV3 0QH</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <FontAwesomeIcon icon={faPhoneAlt} className="text-black text-3xl" />
                            <div className="h-10 border-l-4 border-black "></div> {/* Vertical line */}

                            <div>
                                <h3 className="font-bold text-lg text-[#23b6cb]">Phone</h3>
                                <p className="text-black">07548 893221</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <FontAwesomeIcon icon={faGlobe} className="text-black text-3xl" />
                            <div className="h-10 border-l-4 border-black "></div> {/* Vertical line */}

                            <div>
                                <h3 className="font-bold text-lg text-[#23b6cb]">Website</h3>
                                <p className="text-black">samsamjiujitsu.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#23b6cb] p-12 pb-20 rounded-lg shadow-lg w-full lg:w-full">
                        <h2 className="text-2xl font-extrabold mb-6 text-white pl-2 ">Send Message</h2>
                        <hr className="border-t-8 border-white w-1/3 mb-10  rounded-full" />
                        <form className="space-y-4">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="5"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-white font-bold text-black py-2 rounded hover:bg-[#39d8f1] hover:text-white transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default ContactUs;
