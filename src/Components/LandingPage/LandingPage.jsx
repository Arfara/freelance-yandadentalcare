import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bumpervideo from '../Assets/bumpervideo.mp4';
import logo from '../Assets/logo_2.svg';
import rectangle1 from '../Assets/Rectangle1.svg';
import ellipse1 from '../Assets/Ellipse1.svg';
import dokvector1 from '../Assets/dokvector1.svg';
import dokyanda from '../Assets/dokyanda.svg';
import doktasya from '../Assets/doktsaya.svg';
import dokdannyar from '../Assets/dokdannyar.svg';
import dokdewi from '../Assets/dokdewi.svg';
import dokdimas from '../Assets/dokdimas.svg';
import dokprima from '../Assets/dokprima.svg';
import dokstephanie from '../Assets/dokstephanie.svg';
import dokyonna from '../Assets/dokyonna.svg';

const doctors = [dokyanda, doktasya, dokdannyar, dokdewi, dokdimas, dokprima, dokstephanie, dokyonna];

const LandingPage = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 },
      }).then(() => {
        setCurrentDoctor((prevDoctor) => (prevDoctor + 1) % doctors.length);
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-2xl font-bold text-gray-800"></div>
          <div className="space-x-4">
            <a href="#home" className="text-white-800 hover:text-yellow-500">Home</a>
            <a href="#about" className="text-white-800 hover:text-yellow-500">About us</a>
            <a href="#services" className="text-white-800 hover:text-yellow-500">Our Services</a>
            <a href="#dentist" className="text-white-800 hover:text-yellow-500">Our Dentist</a>
            <a href="#contact" className="text-white-800 hover:text-yellow-500">Contact us</a>
          </div>
        </div>
      </header>

        {/* Hero Section */}
          <section id="home" className="bg-gray-100 py-16 relative">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <video src={bumpervideo} width="1000" height="800" autoPlay loop muted />
                </div>
              </div>
              <div className="md:w-1/2 relative flex justify-center md:justify-end">
                <img src={rectangle1} alt="Rectangle 1" className="absolute left-20 md:w-2/3 transform translate-x-10 translate-y-10 z-0" />
                <img src={ellipse1} alt="Ellipse 1" className="absolute bottom-10 right-10 md:w-1/3 transform translate-x-10 translate-y-10 z-0" />
                <motion.img src={doctors[currentDoctor]} alt="doctor" className="relative mr-20 top-6 z-10 w-2/3" animate={controls} initial={{ opacity: 0 }} />
              </div>
            </div>
          </section>

      <section id="about" className="py-16">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="md:w-1/3">
              <img src={dokvector1} alt="Doctor Vector" className="mx-auto"/>
            </div>
            <div className="md:w-2/3 md:mt-0 md:ml-20">
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full">✔️</div>
                  <div className="ml-4">
                    <h4 className="text-gray-800 font-bold">Lorem Ipsum</h4>
                    <p className="text-gray-600">Pellentesque ultricies purus ac ex cursus erat tincidunt eu. Duis malesuada eget leo quis porttitor.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full">✔️</div>
                  <div className="ml-4">
                    <h4 className="text-gray-800 font-bold">Lorem Ipsum</h4>
                    <p className="text-gray-600">Pellentesque ultricies purus ac ex cursus erat tincidunt eu. Duis malesuada eget leo quis porttitor.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full">✔️</div>
                  <div className="ml-4">
                    <h4 className="text-gray-800 font-bold">Lorem Ipsum</h4>
                    <p className="text-gray-600">Pellentesque ultricies purus ac ex cursus erat tincidunt eu. Duis malesuada eget leo quis porttitor.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">Our Services</h2>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full md:w-64">
              <img src="/path/to/service1.png" alt="Service 1" className="h-32 w-full object-cover rounded"/>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Service 1</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
              <a href="#" className="text-yellow-500 mt-4 inline-block">Read More</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full md:w-64">
              <img src="/path/to/service2.png" alt="Service 2" className="h-32 w-full object-cover rounded"/>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Service 2</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
              <a href="#" className="text-yellow-500 mt-4 inline-block">Read More</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full md:w-64">
              <img src="/path/to/service3.png" alt="Service 3" className="h-32 w-full object-cover rounded"/>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Service 3</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
              <a href="#" className="text-yellow-500 mt-4 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="dentist" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">Meet Our Dentists</h2>
          <div className="flex flex-wrap justify-center mt-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 m-4 w-full md:w-64">
                <img src={doctor} alt={`Doctor ${index}`} className="h-32 w-full object-cover rounded"/>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Doctor {index + 1}</h3>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activity" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Our Clinic Activity</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64">
            <img src="/path/to/activity1.png" alt="Activity 1" className="h-32 w-full object-cover rounded"/>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Activity 1</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64">
            <img src="/path/to/activity2.png" alt="Activity 2" className="h-32 w-full object-cover rounded"/>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Activity 2</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64">
            <img src="/path/to/activity3.png" alt="Activity 3" className="h-32 w-full object-cover rounded"/>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Activity 3</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis et sem sed malesuada.</p>
          </div>
        </div>
      </section>

      <section id="location" className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Our Clinic Location</h2>
        <div className="container mx-auto mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131531677!3d-37.81732797975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8d75dfb1c0!2sClinic!5e0!3m2!1sen!2sau!4v1611728482679!5m2!1sen!2sau"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="mx-auto"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-between items-center py-4 px-2">
          <div className="text-xs">
            <span className="block mb-1">Ruko New East No. 65B Jalan Jakarta Garden City Boulevard</span>
            <span className="block mb-1">yandadentalcare@yahoo.com</span>
            <span className="block mb-1">085935000090</span>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded text-sm">Book Now</button>
        </div>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Yanda Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
