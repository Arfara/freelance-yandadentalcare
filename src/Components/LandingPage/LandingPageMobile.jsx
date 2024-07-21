import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import bumpervideo from '../Assets/bumpervideo.mp4';
import logo from '../Assets/logo_2.svg';
import logo1 from '../Assets/logo_1.svg'
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

const LandingPageMobile = () => {
  const [currentDoctor, setCurrentDoctor] = React.useState(0);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
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
    <div className="font-sans relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-3/4 bg-gray-900 text-white h-full transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">&times;</button>
        </div>
        <nav className="flex flex-col items-center mt-8">
          <a href="#home" className="text-white text-lg py-2">Home</a>
          <a href="#about" className="text-white text-lg py-2">About us</a>
          <a href="#services" className="text-white text-lg py-2">Our Services</a>
          <a href="#dentist" className="text-white text-lg py-2">Our Dentist</a>
          <a href="#contact" className="text-white text-lg py-2">Contact us</a>
        </nav>
      </div>

      {/* Header */}
      <header className="bg-gray-900 text-white flex items-center justify-between p-4 relative z-10">
        <img src={logo1} className='w-20'></img>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl lg:hidden"
        >
          &#9776;
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-8 relative">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <video src={bumpervideo} width="1000" height="800" autoPlay loop muted />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <img src={rectangle1} alt="Rectangle 1" className="absolute top-10 left-15 w-2/3"/>
            <img src={ellipse1} alt="Ellipse 1" className="absolute bottom-0 right-0 w-1/3"/>
            <motion.img src={doctors[currentDoctor]} alt="doctor" className="top-8 relative w-2/3" animate={controls} initial={{ opacity: 0 }}/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 px-4 text-center">
        <div className="container mx-auto">
          <div className="mb-8">
            <img src={dokvector1} alt="Doctor Vector" className="mx-auto"/>
          </div>
          <ul className="space-y-4">
            <li className="flex flex-col items-center">
              <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full">✔️</div>
              <div className="mt-2">
                <h4 className="text-gray-800 font-bold">Lorem Ipsum</h4>
                <p className="text-gray-600">Pellentesque ultricies purus ac ex cursus erat tincidunt eu.</p>
              </div>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-8 px-4 text-center">
        <h2 className="text-xl font-bold text-gray-700">Our Services</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {/* Add service items as needed */}
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full sm:w-64">
            <img src="/path/to/service1.png" alt="Service 1" className="h-32 w-full object-cover rounded"/>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Service 1</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-yellow-500 mt-4 inline-block">Read More</a>
          </div>
          {/* Add more service items as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 px-4 text-center">
        <h2 className="text-xl font-bold text-gray-700">Testimonials and Reviews</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {/* Add testimonial items as needed */}
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full sm:w-64">
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-yellow-500 mt-4">★★★★★</p>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">John Doe</h3>
          </div>
          {/* Add more testimonial items as needed */}
        </div>
      </section>

      {/* Dentist Section */}
      <section id="dentist" className="bg-gray-100 py-8 px-4 text-center">
        <h2 className="text-xl font-bold text-gray-700">Meet Our Dentists</h2>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full sm:w-64">
            <img src={dokyanda} alt="Dentist 1" className="h-32 w-32 rounded-full mx-auto"/>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Dentist 1</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more dentist items as needed */}
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
          {/* Add more activity items as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center py-4 px-2">
          <div className="text-xs">
            <span className="block mb-1">Ruko New East No. 65B Jalan Jakarta Garden City Boulevard</span>
            <span className="block mb-1">yandadentalcare@yahoo.com</span>
            <span className="block mb-1">085935000090</span>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded text-sm">Book Now</button>
        </div>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Yanda Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageMobile;
