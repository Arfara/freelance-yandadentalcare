import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Home from '../../Home';
import bumpervideo from '../Assets/bumpervideo.mp4';
import logo1 from '../Assets/logo_1.svg';
import rectangle1 from '../Assets/Rectangle1.svg';
import ellipse1 from '../Assets/Ellipse1.svg';
import dokvector1 from '../Assets/dokvector1.jpg';
import dokyanda from '../Assets/dokyanda.svg';
import doktasya from '../Assets/doktsaya.svg';
import dokdannyar from '../Assets/dokdannyar.svg';
import dokdewi from '../Assets/dokdewi.svg';
import dokjanet from '../Assets/dokjanet.png';
import dokprima from '../Assets/dokprima.svg';
import dokstephanie from '../Assets/dokstephanie.svg';
import dokyonna from '../Assets/dokyonna.svg';
import istanayatim from '../Assets/istanayatim.png';
import istanayatim2 from '../Assets/istanayatim2.jpg';
import istanayatim3 from '../Assets/istanayatim3.jpg';
import wa from '../Assets/WhatsApp_icon.png';
import pem_gigi_dewasa from '../Assets/pem_gigi_dewasa.jpeg';
import pem_gigi_anak from '../Assets/pem_gigi_anak.jpg';
import ortodonti from '../Assets/ortodonti.jpg';
import cabut_gigi from '../Assets/cabut_gigi.jpg';
import gigi_palsu from '../Assets/gigi_palsu.jpg';
import implan_gigi from '../Assets/impan_gigi.jpg';
import bleaching from '../Assets/bleaching.jpg';
import akar_gigi from '../Assets/akar_gigi.jpg';
import karang_gigi from '../Assets/karang_gigi.jpg';
import tambal_gigi from '../Assets/tambal_gigi.jpg';
import gingivektomi from '../Assets/gingivektomi.jpg';
import retainer_gigi from '../Assets/retainer_gigi.jpg';
import retainer_remove from '../Assets/retainer_remove.jpg';
import splinting from '../Assets/splinting.jpg';
import crown from '../Assets/crown.jpg';
import bridge from '../Assets/bridge.jpg';
import direct_veneer from '../Assets/direct_veneer.jpg';
import indirect_veneer from '../Assets/indirect_veneer.jpg';
import cabut_gigi_anak from '../Assets/cabut_gigi_anak.jpg';
import donor_darah from '../Assets/donor_darah.jpg';
import nobar_timnas from '../Assets/nobar_timnas.jpg';
import klinik1 from '../Assets/klinik1.png';
import klinik2 from '../Assets/klinik2.png';
import klinik3 from '../Assets/klinik3.png';
import klinik4 from '../Assets/klinik4.png';
import klinik5 from '../Assets/klinik5.png';
import klinik6 from '../Assets/klinik6.png';
import fluid1 from '../Assets/fluid1.png';
import fieldtrip1 from '../Assets/fieldtrip1.png';
import fieldtrip2 from '../Assets/fieldtrip2.png';
import fieldtrip3 from '../Assets/fieldtrip3.png';
import fieldtrip4 from '../Assets/fieldtrip4.png';
import fieldtrip5 from '../Assets/fieldtrip5.png';
import fieldtrip6 from '../Assets/fieldtrip6.png';


const doctors = [
  {
    image: dokyanda,
    name: 'drg. Yanda',
    description: 'Senin, Rabu : 15.00 - 20.00 Kamis: 09.00 - 15.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Yanda'
  },
  {
    image: doktasya,
    name: 'drg. Tasya',
    description: 'Jumat: 15.00 - 20.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Tasya'
  },
  {
    image: dokdannyar,
    name: 'drg. Dannyar',
    description: (
      <>
        Rabu: 09.00 - 15.00
        <br />
        Sabtu: 15.00 - 20.00
      </>
    ),
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Dannyar'
  },
  {
    image: dokdewi,
    name: 'drg. Dewi',
    description: 'Selasa: 09.00 - 15.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Dewi'
  },
  {
    image: dokjanet,
    name: 'drg. Jannette Lazia',
    description: 'Minggu: 15.00 - 20.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Jannette'
  },
  {
    image: dokprima,
    name: 'drg. Prima',
    description: (
      <>
        Selasa: 15.00 - 20.00
        <br />
        Sabtu, Minggu: 09.00 - 15.00
      </>
    ),
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Prima'
  },
  {
    image: dokstephanie,
    name: 'drg. Stephanie',
    description: 'Senin, Jumat: 09.00 - 15.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Stephanie'
  },
  {
    image: dokyonna,
    name: 'drg. Yonna',
    description: 'Kamis: 15.00 - 20.00',
    phoneNumber: '+6285935000090', 
    message: 'Halo Admin Yanda Dental Care 😊, saya ingin menanyakan tentang jadwal Dokter Yonna'
  }
];

const LandingPageMobile = () => {
  const [currentDoctor, setCurrentDoctor] = React.useState(0);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;    script.async = true;
    script.async = true;
    document.body.appendChild(script);
    script.onload = initMap;
  }, []);

  const initMap = () => {
    const placeId = 'ChIJmxSYhSyLaS4RzqP648I6BDw';
    const map = new window.google.maps.Map(document.createElement('div')); // Create a dummy map
  
    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: placeId,
      fields: ['reviews'],
      language: 'id'
    }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const reviewsContainer = document.getElementById('reviews-container');
        reviewsContainer.innerHTML = ''; 
  
        const sortedReviews = place.reviews.sort((a, b) => new Date(b.time * 1000) - new Date(a.time * 1000));

        sortedReviews.slice(0, 10).forEach(review => {
          const reviewDiv = document.createElement('div');
          reviewDiv.className = 'cursor-pointer bg-white shadow-lg rounded-lg p-6 w-80 h-auto flex-none transition-transform transform hover:scale-105 hover:shadow-xl';
  
          const authorContainer = document.createElement('div');
          authorContainer.className = 'flex flex-col items-center mb-2';
  
          if (review.profile_photo_url) {
            const profilePhoto = document.createElement('img');
            profilePhoto.src = review.profile_photo_url;
            profilePhoto.alt = 'Profile photo';
            profilePhoto.className = 'w-10 h-10 rounded-full mb-2';
            authorContainer.appendChild(profilePhoto);
          }
  
          const author = document.createElement('h3');
          author.className = 'text-xl font-semibold text-gray-700 text-center';
          author.textContent = review.author_name;
  
          authorContainer.appendChild(author);
  
          const rating = document.createElement('div');
          rating.className = 'text-yellow-500 mb-2 text-center';
          rating.textContent = '★'.repeat(review.rating);
  
          const date = document.createElement('div');
          date.className = 'text-gray-500 mb-2 text-center text-sm';
          date.textContent = new Date(review.time * 1000).toLocaleDateString();
  
          const text = document.createElement('p');
          text.className = 'text-gray-600 mb-4 break-words overflow-hidden';
          text.style.maxHeight = '6rem';
          text.textContent = review.text;
  
          reviewDiv.appendChild(authorContainer);
          reviewDiv.appendChild(rating);
          reviewDiv.appendChild(date);
          reviewDiv.appendChild(text);
  
          reviewsContainer.appendChild(reviewDiv);
        });
      }
    });
  };
  
  return (
    <div className="font-sans relative">
      <Helmet>
        <title>Yanda Dental Care | Dokter Gigi Cakung</title>
        <meta name="description" content="Yanda Dental Care berada Jakarta Garden City, Cakung. Layanan gigi murah, profesional, berkualitas, dengan fasilitas modern untuk perawatan gigi terbaik" />
        <meta name="keywords" content="pembersihan karang gigi,  pencabutan gigi, dental jakarta garden city, klinik gigi cakung, klinik gigi jakarta timur, dokter gigi jakarta timur, perawatan gigi berlubang, cabut gigi terdekat,  dokter gigi terdekat, pasang gigi palsu terdekat, klinik gigi terdekat, dental clinic terdekat, klinik cabut gigi terdekat,  ahli gigi terdekat, dental terdekat, dokter gigi sekitar sini, dokter gigi orthodontist terdekat, pasang behel terdekat, tambal gigi terdekat, dental klinik terdekat. " />
        <meta property="og:title" content="Home - Yanda Dental Care" />
        <meta property="og:description" content="Selamat datang di Yanda Dental Care, Klinik Gigi Berkualitas dengan Dokter Profesional" />
        <meta property="og:image" content="https://yandadentalcare.id/static/media/logo_1.1242e67a66346c3914b0257ccf256deb.svg" />
        <meta property="og:url" content="https://yandadentalcare.id/" />
      </Helmet>
      <div
        className={`rounded-lg p-10 fixed right-0 bg-gray-900 text-white transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
        style={{ width: '100vw', maxHeight: '100vh' }} // Set width to 100vw for full screen on mobile
      >
        <div className="flex justify-between items-center">
          {/* Logo inside the sidebar */}
          <img src={logo1} className="w-32 transform scale-150 cursor-pointer" alt="Logo" />
          
          {/* Close button */}
          <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center mt-8">
          <a href="#home" className="text-white text-lg py-2">Home</a>
          <a href="#about" className="text-white text-lg py-2">Tentang Kami</a>
          <a href="#services" className="text-white text-lg py-2">Layanan</a>
          <a href="#dentist" className="text-white text-lg py-2">Dokter Kami</a>
        </nav>
      </div>

      <header className="bg-gray-900 text-white flex items-center justify-between p-6 fixed top-0 left-0 right-0 z-20">
        <img src={logo1} className="w-32 transform scale-150 ml-4 cursor-pointer" alt="Logo" />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl lg:hidden"
        >
          &#9776;
        </button>
      </header>

      <div className="pt-16">
        <section id="home" className="bg-gray-100 py-8 relative">
          <div className="container mx-auto flex flex-col items-center">
            <div className="text-center">
              <div className="flex items-center mb-4">
                <video src={bumpervideo} className="w-full h-auto" autoPlay loop muted />
              </div>
            </div>
            <div className="relative flex flex-col items-center w-full">
              <img
                src={rectangle1}
                alt="Rectangle 1"
                className="absolute left-1/2 transform -translate-x-1/2 top-10 w-2/3 md:w-1/2 lg:w-1/3 z-0"
              />
              <img
                src={ellipse1}
                alt="Ellipse 1"
                className="absolute z-0 bottom-0 right-0 w-1/3"
              />
              <div className="relative z-0 w-2/3 mt-7">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                >
                  {doctors.map((doctor, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={doctor.image}
                        alt={`Doctor ${index}`}
                        className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 px-4 bg-white-100">
          <div className="container mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center mt-8 justify-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img src={dokvector1} alt="Doctor Vector" className="mx-auto w-full max-w-xs"/>
              </div>
              <div className="md:w-2/3 md:ml-10 rounded-lg bg-white shadow-xl p-6 md:p-8">
                <h1 className="text-xl font-semibold mb-6">
                  Pelayanan kesehatan gigi dan mulut oleh dokter gigi yang ramah, profesional, dan berpengalaman
                </h1>
                <ul className="mt-6 space-y-4">
                  <li className="flex flex-col items-start">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h2 className="text-gray-800 font-bold text-lg">
                        Profesional
                      </h2>
                      <p className="text-gray-600 text-sm">Yanda Dental Care memberikan layanan medis dengan keahlian dan standar tinggi untuk hasil yang optimal.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start mt-4">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h2 className="text-gray-800 font-bold text-lg">
                        Mengutamakan keluhan, kebutuhan, dan kepentingan pasien
                      </h2>
                      <p className="text-gray-600 text-sm">Yanda Dental Care memprioritaskan setiap aspek kebutuhan pasien untuk perawatan yang lebih personal dan efektif.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start mt-4">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h2 className="text-gray-800 font-bold text-lg">
                        Memberikan pengalaman perawatan gigi yang menyenangkan
                      </h2>
                      <p className="text-gray-600 text-sm">Yanda Dental Care menciptakan suasana yang nyaman dan menyenangkan untuk pengalaman perawatan yang lebih baik.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="clinic-photos" className="py-16 bg-white relative">
            <div className="container mx-auto text-center px-4 relative z-10">
              <h1 className="text-3xl font-bold text-gray-700 mb-12">Yanda Dental Care</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-6">
                {/* Card 1 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik1}
                    alt="Klinik 1"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Tampak Depan</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik2}
                    alt="Klinik 2"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Ruang Perawatan</span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik3}
                    alt="Klinik 3"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Fasilitas Modern</span>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik4}
                    alt="Klinik 4"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Ruang Tunggu</span>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik5}
                    alt="Klinik 5"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Resepsionis</span>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg mx-2 aspect-w-3 aspect-h-4">
                  <img
                    src={klinik6}
                    alt="Klinik 6"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white text-lg font-semibold">Fasilitas Lengkap</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={fluid1}
              alt="Decorative Background"
              className="absolute top-40 right-0 transform -translate-x-1/2 -translate-y-1/2 h-auto object-contain opacity-20"
            />
          </section>

        <section id="services" className="bg-white-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-3xl font-bold text-gray-700">Layanan di Yanda Dental Care</h1>
                <div className="overflow-x-auto">
                    <div className="flex space-x-6 overflow-x-auto py-8 px-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={pem_gigi_dewasa} alt="Konsultasi Gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Konsultasi Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Dapatkan penilaian profesional dan solusi terbaik untuk kesehatan gigi dan mulut Anda di klinik kami. Ahli gigi berpengalaman siap membantu dengan pendekatan yang ramah dan mendetail, memastikan senyum Anda selalu terjaga dengan baik</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.50k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={pem_gigi_anak} alt="Penambalan gigi anak di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Penambalan Gigi Anak</h3>
                            <p className="text-gray-600 mb-4 break-words">Lindungi kesehatan gigi si kecil dengan layanan penambalan gigi yang nyaman dan aman di klinik kami. Ahli gigi kami siap memastikan pengalaman yang menyenangkan dan senyum sehat yang terjaga.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.285k*</a>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={cabut_gigi_anak} alt="Cabut gigi anak di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pecabutan Gigi Anak</h3>
                            <p className="text-gray-600 mb-4 break-words">Pastikan proses pencabutan gigi anak Anda berjalan aman dan nyaman di klinik kami. Dengan pendekatan yang lembut dan ramah, ahli gigi kami akan membantu menjaga kesehatan mulut si kecil dengan pengalaman yang tidak menakutkan.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.190k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={ortodonti} alt="Ortodonti di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ortodonti</h3>
                            <p className="text-gray-600 mb-4 break-words">Perawatan ortodonti untuk merapikan gigi dan rahang Anda, menggunakan alat seperti kawat gigi untuk hasil yang lebih baik dan senyum yang lebih proporsional.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.800k*</a>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={cabut_gigi} alt="Cabut gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pencabutan Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Cabut gigi adalah proses pengangkatan gigi dari soket gigi pada tulang rahang. Pasien yang mengalami nyeri dan tidak nyaman dengan pertumbuhan gigi menyimpang atau masalah gigi lainnya dapat mengambil tindakan ini.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.400k*</a>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={gigi_palsu} alt="Pembuatan Gigi Palsu di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pembuatan Gigi Palsu</h3>
                            <p className="text-gray-600 mb-4 break-words">Gigi palsu yang dibuat dengan presisi untuk memberikan kenyamanan dan fungsi seperti gigi asli, membantu Anda tersenyum dengan percaya diri.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.2.000k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={implan_gigi} alt="Implan Gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Implan Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Implan adalah akar gigi yang ditanamkan ke dalam rahang untuk menggantikan gigi yang copot. Terbuat dari titanium yang ringan, kuat, dan biokompatibel, implan gigi dapat diterima oleh tubuh.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.19.000k*</a>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={bleaching} alt="Bleaching di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Bleaching</h3>
                            <p className="text-gray-600 mb-4 break-words">Prosedur pemutihan gigi untuk mencerahkan senyum Anda dengan aman, menghilangkan noda dan menjadikan gigi Anda lebih bersinar.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.999k*</a>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={akar_gigi} alt="Perawatan Saluran Akar di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Perawatan Saluran Akar</h3>
                            <p className="text-gray-600 mb-4 break-words">Perawatan untuk mengatasi infeksi dalam saluran akar gigi, memberikan solusi jangka panjang untuk masalah gigi yang parah dan mengurangi rasa sakit.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.400k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={karang_gigi} alt="Pembersihan Karang Gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pembersihan Karang Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Proses pembersihan yang mendalam untuk menghilangkan karang gigi yang menumpuk, mencegah penyakit gusi dan menjaga kesehatan mulut Anda.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.150k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={tambal_gigi} alt="Penambalan Gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Penambalan Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Tambal gigi adalah prosedur yang dilakukan untuk mengisi celah pada gigi berlubang.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.350k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={gingivektomi} alt="Gingivektomi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Gingivektomi</h3>
                            <p className="text-gray-600 mb-4 break-words">Gingivektomi adalah prosedur bedah untuk mengangkat gingiva atau jaringan gusi.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.475k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={retainer_gigi} alt="Pasang Retainer di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Retainer Permanen</h3>
                            <p className="text-gray-600 mb-4 break-words">Retainer adalah alat untuk mempertahankan posisi gigi agar tetap rapi dan tidak kembali berantakan setelah lepas behel. Retainer gigi permanen terbuat dari kawat tebal yang dibuat sesuai bentuk gigi yang sudah rapi.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.1.425k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={retainer_remove} alt="Pasang Retainer di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Retainer Removable</h3>
                            <p className="text-gray-600 mb-4 break-words">Retainer adalah alat untuk mempertahankan posisi gigi agar tetap rapi dan tidak kembali berantakan setelah lepas behel. Retainer Hawley terbuat dari kawat logam tipis dan akrilik yang dibentuk agar sesuai dengan langit-langit mulut pasien atau di sepanjang bagian dalam rahang bawah.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.2.375k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={splinting} alt="Splinting gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Splinting Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Splinting gigi adalah prosedur untuk mengencangkan gigi-gigi yang goyang akibat trauma atau penyakit.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.380k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={crown} alt="Pasang crown gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pemasangan Crown Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Dental crown atau crown gigi adalah sebuah proses pemasangan selubung gigi di atas gigi yang rusak.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.2.375k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={bridge} alt="Pasang dental bridge di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pemasangan Bridge Gigi</h3>
                            <p className="text-gray-600 mb-4 break-words">Dental bridge adalah salah satu perawatan yang digunakan untuk mengisi kekosongan pada gigi yang hilang dengan konsep 'jembatan'.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.2.375k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={direct_veneer} alt="Veneer gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Direct Veneer</h3>
                            <p className="text-gray-600 mb-4 break-words">Direct veneer adalah jenis veneer yang dipasang secara langsung pada pasien menggunakan bahan resin komposit.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.4.700k*</a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                            <img src={indirect_veneer} alt="Veneer gigi di Yanda Dental Care" className="h-40 w-full object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Indirect Veneer</h3>
                            <p className="text-gray-600 mb-4 break-words">
                            Indirect veneer adalah jenis veneer yang umumnya terbuat dari bahan porcelain. Bahan yang satu ini cenderung lebih kuat dan hasilnya pun halus.</p>
                            <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.15.000k*</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="dentist" className="bg-white-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-5">Dokter Gigi Yanda Dental Care</h1>
            <h2 className="text-gray-700 mb-12">Klik jadwal dokter untuk reservasi</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 overflow-x-auto py-8 px-8">
                {doctors.map((doctor, index) => {
                  const encodedMessage = encodeURIComponent(doctor.message);
                  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.phoneNumber}&text=${encodedMessage}`;

                  return (
                    <div
                      key={index}
                      className="cursor-pointer bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 flex justify-center items-center">
                        <img
                          src={doctor.image}
                          alt={`Doctor ${index}`}
                          className="w-32 h-auto opacity-30"
                        />
                      </div>
                      <div className="relative z-10 mt-10">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{doctor.name}</h3>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 mb-4 break-words inline-block"
                        >
                          {doctor.description}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="activity-header" className="container mx-auto px-4 mt-8 mb-8 text-left bg-white">
          <h2 className="text-3xl font-bold text-gray-700 text-center">Aktivitas Kami</h2>
        </section>

        <section
          id="activity"
          className="cursor-pointer container mx-auto px-4 py-4 text-center overflow-y-auto max-h-screen"
        >
          <div className="space-y-8">
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-103 hover:shadow-2xl">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                className="w-full mb-4"
              >
                <SwiperSlide>
                  <div className="w-full h-auto">
                    <img
                      src={fieldtrip1}
                      width="300"
                      height="100"
                      className="rounded-lg mx-auto mt-4"
                      alt="Field Trip 1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={fieldtrip2}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Field Trip 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={fieldtrip3}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Field Trip 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={fieldtrip4}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Field Trip 4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={fieldtrip5}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Field Trip 5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={fieldtrip6}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Field Trip 6"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Yanda Dental Care Mengadakan Kunjungan dan Edukasi ke Sekolah Murid Merdeka
                </h3>
                <p className="text-gray-600 mt-2">
                  Pada Bulan September ini Yanda Dental Care berkesempatan mengunjungi adik - adik di Sekolah Murid Merdeka, Cakung, Jakarta Garden City untuk melakukan edukasi seputar kesehatan gigi dan mulut disertai kunjungan ke klinik kami untuk memperkenalkan tim, ruang kerja, beserta prosedur tindakan yang biasa di lakukan di Yanda Dental Care. Kegiatan ini bertujuan untuk memberikan upaya promotif dan preventif agar meningkatkan ketertarikan serta kesadaran anak usia sekolah atas kesehatan gigi dan mulutnya, dimana usia gigi bercampur adalah usia paling krusial dan riskan sehingga sangat penting untuk di awasi tumbuh dan kembang gigi geligi tersebut. Sesuai dengan motto Yanda Dental Care yaitu Provide a Healthy Smile, kami berharap kegiatan ini dapat menjadi kegiatan yang sustainable sehingga dapat meingkatkan kesehatan gigi mulut anak - anak di Sekolah Murid Merdeka.
                </p>
              </div>
            </div>
            
            {/* Kegiatan Istana Yatim */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-103 hover:shadow-2xl">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                className="w-full mb-4"
              >
                <SwiperSlide>
                  <img
                    src={istanayatim}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Image 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={istanayatim2}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Image 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={istanayatim3}
                    width="300"
                    height="100"
                    className="rounded-lg mx-auto mt-4"
                    alt="Image 3"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Yanda Dental Care Mengadakan Program Perawatan Gigi dan Mulut Gratis di Panti Asuhan Istana Yatim
                </h3>
                <p className="text-gray-600 mt-2">
                  Yanda Dental Care mengadakan program perawatan gigi dan mulut gratis untuk anak-anak di Panti Asuhan Istana Yatim, sebagai bagian dari komitmen kami untuk memberikan kontribusi positif kepada masyarakat. Program ini mencakup pemeriksaan gigi rutin, pembersihan gigi, penambalan gigi, serta edukasi tentang pentingnya menjaga kesehatan gigi dan mulut, yang semuanya dilakukan oleh tim profesional kami. Dengan dukungan donatur dan relawan, kami berharap dapat meningkatkan kesehatan gigi anak-anak yatim piatu, menghindarkan mereka dari masalah gigi, dan memberikan mereka senyum yang sehat dan indah.
                </p>
              </div>
            </div>

            {/* Kegiatan Donor Darah */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-103 hover:shadow-2xl">
              <img
                src={donor_darah}
                width="250"
                height="100"
                className="rounded-lg mx-auto mt-4 mb-4"
                alt="Image Donor Darah"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Yanda Dental Care Menjadi Sponsor Seminar dan Pemeriksaan Kesehatan serta Donor Darah
                </h3>
                <p className="text-gray-600 mt-2">
                  Yanda Dental Care turut serta dalam upaya meningkatkan kesadaran kesehatan masyarakat melalui dukungan pada acara seminar kesehatan, yang juga mencakup pemeriksaan kesehatan gratis dan kegiatan donor darah. Seminar ini memberikan informasi penting tentang kesehatan, khususnya kesehatan gigi dan mulut, yang sering kali terabaikan. Selain edukasi, acara ini juga memberikan kesempatan bagi peserta untuk berkontribusi dalam kegiatan donor darah, sebuah aksi nyata yang sangat membantu mereka yang membutuhkan. Dengan dukungan ini, Yanda Dental Care menunjukkan komitmen dalam mendorong gaya hidup sehat di kalangan masyarakat.
                </p>
              </div>
            </div>

            {/* Kegiatan Nobar Timnas */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-103 hover:shadow-2xl">
              <img
                src={nobar_timnas}
                width="250"
                height="100"
                className="rounded-lg mx-auto mt-4 mb-4"
                alt="Image Nobar Timnas"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Yanda Dental Care Menjadi Sponsor Kegiatan Nonton Bareng Timnas Indonesia di Piala AFF U-19 Boys
                </h3>
                <p className="text-gray-600 mt-2">
                  Yanda Dental Care ikut ambil bagian dalam mendukung semangat sepak bola tanah air dengan menjadi sponsor kegiatan nonton bareng (nobar) Timnas Indonesia di Piala AFF U-19 Boys. Acara nobar ini tidak hanya menjadi kesempatan bagi para penggemar sepak bola untuk merayakan dan mendukung tim kesayangan, tetapi juga sebagai ajang kebersamaan yang menyatukan berbagai kalangan. Dalam kesempatan ini, Yanda Dental Care juga memanfaatkan momen untuk mengedukasi masyarakat mengenai pentingnya menjaga kesehatan gigi dan mulut, sambil menikmati pertandingan yang penuh semangat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="blogs">
          <Home/>
        </section>

        <section id="google-reviews" className="bg-white-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-5">Review Pasien</h2>
              <a href="https://www.google.com/search?q=yanda+dental+care+review&oq=yanda+dental+care+review&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM3MjZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x2e698b2c8598149b:0x3c043ac2e3faa3ce,1,,,," target="_blank" className="text-white py-2 px-4 rounded inline-block bg-yellow-500 mb-5">Lihat Review Selengkapnya di Google!</a>
            <div className="overflow-x-auto">
              <div id="reviews-container" className="flex space-x-6 overflow-x-auto py-8 px-8"></div>
            </div>
          </div>
        </section>

        <section id="location" className="bg-white-100 py-16 text-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center">Lokasi Klinik Kami</h2>
          </div>
          <div className="container mx-auto mt-8">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)}&q=place_id:ChIJmxSYhSyLaS4RzqP648I6BDw`}
              width="300"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="mx-auto rounded-lg"
            ></iframe>
          </div>
        </section>

        <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white p-2 rounded-lg shadow-lg z-30">
          <img src={wa} alt="WhatsApp Logo" className="w-4 h-4" />
          <a 
            href="https://api.whatsapp.com/send?phone=+6285935000090&text=Halo Admin Yanda Dental Care 😊 Saya ingin booking jadwal di klinik pada hari ... tanggal ... di jam ... Saya butuh layanan ..." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-500 font-bold"
          >
            Hubungi Kami di WhatsApp
          </a>
        </div>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto flex justify-between items-center py-4 px-2">
            <div className="text-xs">
              <span className="block mb-1">📍Ruko New East No. 65B Jalan Jakarta Garden City Boulevard</span>
              <span className="block mb-1">✉ yandadentalcare@yahoo.com</span>
              <span className="block mb-1">☎ 085935000090</span>
            </div>
          </div>
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com/yandadentalcare?igsh=MWcwcnljbTB4eG52OA==" className="text-white hover:text-yellow-500"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="https://twitter.com/Yandadentalcare" className="text-white hover:text-yellow-500"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="https://www.facebook.com/media/set/?set=a.122112214286268306" className="text-white hover:text-yellow-500"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="https://www.tiktok.com/@yandadentalcarejakarta" className="text-white hover:text-yellow-500"><i className="fab fa-tiktok fa-lg"></i></a>
            </div>
            <p>&copy; 2024 Yanda Dental Care. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPageMobile;
