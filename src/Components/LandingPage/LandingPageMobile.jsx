import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bumpervideo from '../Assets/bumpervideo.mp4';
import logo1 from '../Assets/logo_1.svg';
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
import istanayatim from '../Assets/istanayatim.MOV';
import wa from '../Assets/WhatsApp_icon.png';
import mitos_fakta from '../Assets/mitos_fakta.jpg';

const doctors = [
  {
    image: dokyanda,
    name: 'drg. Yanda',
    description: 'Spesialis gigi dan mulut dengan pengalaman lebih dari 10 tahun.'
  },
  {
    image: doktasya,
    name: 'drg. Tasya',
    description: 'Mengkhususkan diri dalam ortodonti dan perawatan gigi anak.'
  },
  {
    image: dokdannyar,
    name: 'drg. Dannyar',
    description: 'Ahli dalam perawatan gigi estetika dan bedah mulut.'
  },
  {
    image: dokdewi,
    name: 'drg. Dewi',
    description: 'Berpengalaman dalam perawatan saluran akar dan konservasi gigi.'
  },
  {
    image: dokdimas,
    name: 'drg. Dimas',
    description: 'Fokus pada penanganan kasus gigi berlubang dan restorasi.'
  },
  {
    image: dokprima,
    name: 'drg. Prima',
    description: 'Spesialis prostodonsia, menciptakan senyum indah dengan gigi palsu.'
  },
  {
    image: dokstephanie,
    name: 'drg. Stephanie',
    description: 'Mengutamakan pendekatan ramah anak dalam perawatan gigi.'
  },
  {
    image: dokyonna,
    name: 'drg. Yonna',
    description: 'Pakar dalam pemutihan gigi dan perawatan estetika lainnya.'
  }
];
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDXiinNcPuEv1S1T4rtpeF-mwVp-HOk9yY&libraries=places`;
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
      {/* Sidebar */}
      <div
        className={`rounded-lg p-10 fixed top-0 right-0 bg-gray-900 text-white transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
        style={{ width: '75vw', maxHeight: '100vh' }} 
      >
        <div className="flex justify-end">
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

      <header className="bg-gray-900 text-white flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10">
        <img src={logo1} className='w-20' alt="Logo"/>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl lg:hidden"
        >
          &#9776;
        </button>
      </header>

      {/* Main Content */}
      <div className="pt-16"> {/* Adjust padding-top to account for fixed header */}
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
              <motion.img src={doctors[currentDoctor].image} alt="doctor" className="top-8 relative w-2/3" animate={controls} initial={{ opacity: 0 }}/>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center mt-8 justify-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img src={dokvector1} alt="Doctor Vector" className="mx-auto w-full max-w-xs"/>
              </div>
              <div className="md:w-2/3 md:ml-10 rounded-lg bg-white shadow-xl p-6 md:p-8">
                <h1 className="text-xl font-semibold mb-6">
                  Pelayanan Kesehatan Gigi dan Mulut oleh Dokter gigi yang ramah, profesional, dan berpengalaman
                </h1>
                <ul className="mt-6 space-y-4">
                  <li className="flex flex-col items-start">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h4 className="text-gray-800 font-bold text-lg">
                        Profesional
                      </h4>
                      <p className="text-gray-600 text-sm">Memberikan layanan medis dengan keahlian dan standar tinggi untuk hasil yang optimal.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start mt-4">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h4 className="text-gray-800 font-bold text-lg">
                        Mengutamakan Keluhan, kebutuhan, dan kepentingan pasien
                      </h4>
                      <p className="text-gray-600 text-sm">Memprioritaskan setiap aspek kebutuhan pasien untuk perawatan yang lebih personal dan efektif.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start mt-4">
                    <div className="bg-gray-100 border-b-4 border-yellow-500 shadow-md rounded-lg p-4 flex-1 w-full">
                      <h4 className="text-gray-800 font-bold text-lg">
                        Memberikan pengalaman perawatan gigi yang menyenangkan
                      </h4>
                      <p className="text-gray-600 text-sm">Menciptakan suasana yang nyaman dan menyenangkan untuk pengalaman perawatan yang lebih baik.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-12">Layanan Kami</h2>
              <div className="overflow-x-auto">
                  <div className="flex space-x-6 overflow-x-auto py-4">
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service1.png" alt="Perawatan Gigi" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Pembersihan Gigi Dewasa</h3>
                          <p className="text-gray-600 mb-4 break-words">Nikmati pembersihan menyeluruh yang dirancang khusus untuk dewasa. Perawatan ini membantu menghilangkan plak, tartar, dan mencegah masalah gigi serta gusi.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.50k*</a>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="" alt="Perawatan Gigi" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Perawatan Gigi Anak</h3>
                          <p className="text-gray-600 mb-4 break-words">Perawatan khusus untuk anak-anak yang menjaga kesehatan gigi mereka dengan metode yang lembut dan menyenangkan, memastikan gigi mereka tumbuh sehat.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.250k*</a>
                      </div>
                      
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service2.png" alt="Ortodonti" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Ortodonti</h3>
                          <p className="text-gray-600 mb-4 break-words">Perawatan ortodonti untuk merapikan gigi dan rahang Anda, menggunakan alat seperti kawat gigi untuk hasil yang lebih baik dan senyum yang lebih proporsional.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.800k*</a>
                      </div>
                      
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service3.png" alt="Pencabutan Gigi" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Pencabutan Gigi</h3>
                          <p className="text-gray-600 mb-4 break-words">Pencabutan gigi dilakukan dengan teknik canggih dan aman, menjamin kenyamanan Anda selama dan setelah prosedur untuk mengatasi gigi yang rusak atau bermasalah.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.400k*</a>
                      </div>
                      
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service4.png" alt="Pembuatan Gigi Palsu" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Pembuatan Gigi Palsu</h3>
                          <p className="text-gray-600 mb-4 break-words">Gigi palsu yang dibuat dengan presisi untuk memberikan kenyamanan dan fungsi seperti gigi asli, membantu Anda tersenyum dengan percaya diri.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.2.000k*</a>
                      </div>
                      
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service5.png" alt="Bleaching" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Bleaching</h3>
                          <p className="text-gray-600 mb-4 break-words">Prosedur pemutihan gigi untuk mencerahkan senyum Anda dengan aman, menghilangkan noda dan menjadikan gigi Anda lebih bersinar.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.50k*</a>
                      </div>
                      
                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service6.png" alt="Perawatan Saluran Akar" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Perawatan Saluran Akar</h3>
                          <p className="text-gray-600 mb-4 break-words">Perawatan untuk mengatasi infeksi dalam saluran akar gigi, memberikan solusi jangka panjang untuk masalah gigi yang parah dan mengurangi rasa sakit.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.400k*</a>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service6.png" alt="Pembersihan Karang Gigi" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Pembersihan Karang Gigi</h3>
                          <p className="text-gray-600 mb-4 break-words">Proses pembersihan yang mendalam untuk menghilangkan karang gigi yang menumpuk, mencegah penyakit gusi dan menjaga kesehatan mulut Anda.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.150k*</a>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl hover:transform-origin-center">
                          <img src="/path/to/service6.png" alt="Penambalan Gigi" className="h-40 w-full object-cover rounded-md mb-4"/>
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">Penambalan Gigi</h3>
                          <p className="text-gray-600 mb-4 break-words">Perawatan untuk mengisi lubang pada gigi yang rusak akibat kerusakan atau pembusukan, menggunakan bahan berkualitas untuk hasil yang tahan lama.</p>
                          <a href="#" className="text-yellow-500 font-semibold inline-block">Mulai dari Rp.350k*</a>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section id="dentist" className="bg-gray-100">    
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-12">Perkenalkan Dokter Kami</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 overflow-x-auto py-4">
                {doctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
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
                      <p className="text-gray-600 mb-4 break-words">{doctor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="activity-header" className="container mx-auto px-4 mt-12 text-left bg-white">
          <h2 className="text-3xl font-bold text-gray-700 text-center">Aktivitas Kami</h2>
        </section>

        <section id="activity" className="container mx-auto py-16 px-4 text-left overflow-y-auto max-h-screen">
          <div className="space-y-8">
            <div className="items-start bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-103 hover:shadow-2xl">
                <video src={istanayatim} width="300" height="100" autoPlay loop muted className='rounded-lg' />
              <div className='mt-5'>
                <h3 className="text-xl font-semibold text-gray-700">Yanda Dental Care Mengadakan Program Perawatan Gigi dan Mulut Gratis di Istana Yatim Panti Asuhan</h3>
                <p className="text-gray-600 mt-2">Yanda Dental Care dengan bangga mengadakan program perawatan gigi dan mulut gratis untuk anak-anak di Istana Yatim Panti Asuhan, sebagai bagian dari komitmen kami untuk memberikan kontribusi positif kepada masyarakat. Program ini mencakup pemeriksaan gigi rutin, pembersihan gigi, penambalan gigi, serta edukasi tentang pentingnya menjaga kesehatan gigi dan mulut, yang semuanya dilakukan oleh tim profesional kami. Dengan dukungan donatur dan relawan, kami berharap dapat meningkatkan kesehatan gigi anak-anak yatim piatu, menghindarkan mereka dari masalah gigi, dan memberikan mereka senyum yang sehat dan indah.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="blogs" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-12">Blogs</h2>
            <div className="overflow-x-auto">
              <div className="flex justify-center space-x-6 overflow-x-auto py-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl">
                  <img src={mitos_fakta} alt="Mitos Fakta" className="h-40 w-full object-cover rounded-md mb-4"/>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Gula Penyebab Gigi Karies?Mitos atau Fakta?</h3>
                  <p className="text-gray-600 mb-4 break-words">"Bukan gula loh sebabnya. Tapi, bakteri di gigi yang memakan gula adalah penyebabnya. Makanan lengket, seperti pati, menarik bakteri untuk berkembang biak di dalam dan sekitar gigi.</p>
                  <a href="#" className="text-yellow-500 font-semibold inline-block">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="google-reviews" className="bg-white-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-5">Review Pasien</h2>
              <a href="https://www.google.com/search?q=yanda+dental+care+review&oq=yanda+dental+care+review&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM3MjZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x2e698b2c8598149b:0x3c043ac2e3faa3ce,1,,,," target="_blank" className="text-white py-2 px-4 rounded inline-block bg-yellow-500 mb-5">Lihat Review Selengkapnya di Google!</a>
            <div className="overflow-x-auto">
              <div id="reviews-container" className="flex space-x-6 overflow-x-auto py-4"></div>
            </div>
          </div>
        </section>


        <section id="location" className="bg-gray-100 py-16 text-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center">Lokasi Klinik Kami</h2>
          </div>
          <div className="container mx-auto mt-8">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDXiinNcPuEv1S1T4rtpeF-mwVp-HOk9yY&q=place_id:ChIJmxSYhSyLaS4RzqP648I6BDw"
              width="300"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="mx-auto rounded-lg"
            ></iframe>
          </div>
        </section>

        <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg">
          <img src={wa} alt="WhatsApp Logo" className="w-8 h-8" />
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
              <span className="block mb-1">Ruko New East No. 65B Jalan Jakarta Garden City Boulevard</span>
              <span className="block mb-1">yandadentalcare@yahoo.com</span>
              <span className="block mb-1">085935000090</span>
            </div>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded text-sm">Book Now</button>
          </div>
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com" className="text-white hover:text-yellow-500"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="https://www.twitter.com" className="text-white hover:text-yellow-500"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="https://www.facebook.com" className="text-white hover:text-yellow-500"><i className="fab fa-facebook-f fa-lg"></i></a>
            </div>
            <p>&copy; 2024 Yanda Dental Care. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPageMobile;
