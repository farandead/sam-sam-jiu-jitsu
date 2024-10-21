import React, { useState } from 'react';
import { classSchedule } from '../../constants'; // Adjust the path as needed
import PageLayout from '../PageLayout'; // Ensure the correct path to your PageLayout component
import mainImage from '../../assets/images/2.png'; // Adjust the path as needed
import ImageSlider from '../ImageSlider'; // Import the ImageSlider component
import image1  from '../../assets/images/1.png';
import image2  from '../../assets/images/5.png';

const BookClass = () => {
    const slideshowImages = [image1, image2]; // Add more images as needed
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [healthConditions, setHealthConditions] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [firstTime, setFirstTime] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [signature, setSignature] = useState('');
    const [currentTab, setCurrentTab] = useState(0); // To control flow between tabs
    const [errors, setErrors] = useState({}); // To track errors for highlighting
     // Add more images as needed
    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
        const classForDay = classSchedule.find((cls) => cls.day === e.target.value);
        setSelectedClass(classForDay ? classForDay.className : '');
        setSelectedTime(''); // Reset selected time when day changes
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleNextTab = () => {
        if (currentTab < 2) {
            setCurrentTab(currentTab + 1);
        }
    };

    const handlePrevTab = () => {
        if (currentTab > 0) {
            setCurrentTab(currentTab - 1);
        }
    };

    const validateFields = () => {
        let newErrors = {};

        if (currentTab === 0) {
            if (!firstName) newErrors.firstName = true;
            if (!lastName) newErrors.lastName = true;
            if (!email) newErrors.email = true;
            if (!dob) newErrors.dob = true;
            if (!healthConditions) newErrors.healthConditions = true;

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setCurrentTab(0);
                return false;
            }
        }

        if (currentTab === 1) {
            if (!experienceLevel) newErrors.experienceLevel = true;
            if (!selectedDay) newErrors.selectedDay = true;
            if (!selectedClass) newErrors.selectedClass = true;
            if (!selectedTime) newErrors.selectedTime = true;
            if (!firstTime) newErrors.firstTime = true;
            if (!contactMethod) newErrors.contactMethod = true;

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setCurrentTab(1);
                return false;
            }
        }

        if (currentTab === 2) {
            if (!signature) newErrors.signature = true;

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setCurrentTab(2);
                return false;
            }
        }

        setErrors({});
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            alert(`Class booked: ${selectedClass} on ${selectedDay} at ${selectedTime}. Details - First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Phone: ${phone}, DOB: ${dob}, Health Conditions: ${healthConditions}, Experience Level: ${experienceLevel}, First Time: ${firstTime}, Preferred Contact Method: ${contactMethod}, Signature: ${signature}`);
        }
    };

    const renderTabContent = () => {
        switch (currentTab) {
            case 0:
                return (
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name: <span className="text-red-500">*</span></label>
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name: <span className="text-red-500">*</span></label>
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email: <span className="text-red-500">*</span></label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="dob">Date of Birth: <span className="text-red-500">*</span></label>
                            <input
                                id="dob"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="healthConditions">Any diseases or health conditions: <span className="text-red-500">*</span></label>
                            <textarea
                                id="healthConditions"
                                value={healthConditions}
                                onChange={(e) => setHealthConditions(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.healthConditions ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                placeholder="Please mention any health conditions"
                                required
                            />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="experience">Experience Level: <span className="text-red-500">*</span></label>
                            <select
                                id="experience"
                                value={experienceLevel}
                                onChange={(e) => setExperienceLevel(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.experienceLevel ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            >
                                <option value="">Select experience level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="day">Select a Day: <span className="text-red-500">*</span></label>
                            <select
                                id="day"
                                value={selectedDay}
                                onChange={handleDayChange}
                                className={`w-full px-3 py-2 border ${errors.selectedDay ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            >
                                <option value="">Select a day</option>
                                {classSchedule.map((cls) => (
                                    <option key={cls.day} value={cls.day}>{cls.day}</option>
                                ))}
                            </select>
                        </div>

                        {selectedDay && (
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="time">Select a Time: <span className="text-red-500">*</span></label>
                                <select
                                    id="time"
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    className={`w-full px-3 py-2 border ${errors.selectedTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {classSchedule
                                        .find((cls) => cls.day === selectedDay)
                                        ?.times.map((time) => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                </select>
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="firstTime">Is this your first time at the academy? <span className="text-red-500">*</span></label>
                            <select
                                id="firstTime"
                                value={firstTime}
                                onChange={(e) => setFirstTime(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.firstTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="contactMethod">Preferred contact method: <span className="text-red-500">*</span></label>
                            <select
                                id="contactMethod"
                                value={contactMethod}
                                onChange={(e) => setContactMethod(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.contactMethod ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            >
                                <option value="">Select a contact method</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="mb-4">
                            <p className="text-gray-600">
                                <strong>Voluntary Disclosure:</strong> By signing below, you acknowledge that Brazilian Jiu-Jitsu is a physically demanding sport that may result in injury. You agree to voluntarily participate and assume all risks involved. You also confirm that all the information provided is accurate to the best of your knowledge.
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="signature">Virtual Signature (Type your full name): <span className="text-red-500">*</span></label>
                            <input
                                id="signature"
                                type="text"
                                value={signature}
                                onChange={(e) => setSignature(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.signature ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
                                required
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <PageLayout className='pt-10'>
            <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#23b6cb]">Book a Class !</h1>
                    <p className="text-gray-600 mt-4">
                        Book your class today and experience Brazilian Jiu-Jitsu (BJJ) like never before! Don’t wait—join us on the mats today!
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                    <div className="flex justify-around text-center border-b-2 border-gray-300">
                        <div className={`py-2 px-4 ${currentTab === 0 ? 'text-[#23b6cb] border-b-4 border-[#23b6cb]' : 'text-gray-500'}`}>
                            Personal Information
                        </div>
                        <div className={`py-2 px-4 ${currentTab === 1 ? 'text-[#23b6cb] border-b-4 border-[#23b6cb]' : 'text-gray-500'}`}>
                            Experience
                        </div>
                        <div className={`py-2 px-4 ${currentTab === 2 ? 'text-[#23b6cb] border-b-4 border-[#23b6cb]' : 'text-gray-500'}`}>
                            Voluntary Disclosure
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3">
                        <h2 className="text-2xl font-bold text-center text-[#23b6cb] mb-6">Book a Class</h2>
                        <form onSubmit={handleSubmit}>
                            {renderTabContent()}

                            <div className="flex justify-between mt-6">
                                {currentTab > 0 && (
                                    <button type="button" onClick={handlePrevTab} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                        Previous
                                    </button>
                                )}
                                {currentTab < 2 ? (
                                    <button type="button" onClick={handleNextTab} className="bg-[#23b6cb] text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-200">
                                        Next
                                    </button>
                                ) : (
                                    <button type="submit" className="bg-[#23b6cb] text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-200">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className=" lg:block w-full lg:w-2/3">
                          <ImageSlider images={slideshowImages} />
                       
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default BookClass;
