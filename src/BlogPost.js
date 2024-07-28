import React from 'react';
import { useParams } from 'react-router-dom';
import wa from './Components/Assets/WhatsApp_icon.png';
import logo1 from './Components/Assets/logo_1.svg';
import mitos_fakta from './Components/Assets/mitos_fakta.jpg';
import behel from './Components/Assets/behel.jpg';

const blogs = [
  {
    title: 'Gula Penyebab Gigi Karies? Mitos atau Fakta?',
    description: 'Bukan gula loh sebabnya. Tapi, bakteri di gigi yang memakan gula adalah penyebabnya. Makanan lengket, seperti pati, menarik bakteri untuk berkembang biak di dalam dan sekitar gigi.',
    content: `Bukan gula loh sebabnya. Tapi, bakteri di gigi yang memakan gula adalah penyebabnya. Makanan lengket, seperti pati, menarik bakteri untuk berkembang biak di dalam dan sekitar gigi.<br>
    Bakteri ini menghasilkan senyawa asam yang menyebabkan kerusakan gigi. Bilas dan sikat setelah makan untuk mengurangi penumpukan asam dan plak.<br>
    <br>
    #YandaDentalCare Provide a healthy smile<br>
    Show off your smile with #YDC<br>
    <br>
    Yuk reservasi disini :<br>
    ☎ 085935000090<br>
    📍Ruko New East No.65B, JGC<br>
    Search google : Yanda Dental Care<br>
    Atau klik logo WhatsApp di bawah!<br>
    Free konsultasi via DM/WA ya 😊<br>
    <br>
    #doktergigi #doktergigijakarta #doktergigijakartatimur #klinikgigijakarta #klinikgigimurah #klinikgigijakartatimur #doktergigijgc #jakartagardencity #jgc #cakung #doktergigicakung #klinikgigijgc #doktergigimurah #doktergigimurahjakarta #doktergigimurahjakartatimur #doktergigimurah #scallingmurah #tambalgigimurah #pembersihankaranggigimurah`,
    image: mitos_fakta,
    slug: 'gula-penyebab-gigi-karies-mitos-atau-fakta'
  },
  {
    title: 'Kenapa Pasang Behel?',
    description: 'Behel gigi bisa membantu merapikan gigi yang tidak rata, tapi juga membutuhkan perawatan yang tepat untuk mencegah masalah',
    content: 'Selain gigimu rapih dan bikin YDCares Pede saat tersenyum, ternyata ada banyak manfaatnya loh!<br><br>1. Mengatasi Maloklusi <br>kondisi gigi atas dan gigi bawah tidak bertemu dengan benar saat mengunyah. Hal ini dapat menyebabkan masalah seperti kesulitan mengunyah, bicara tidak jelas, dan bahkan nyeri rahang<br><br>2. Mencegah Kerusakan Gigi <br> Gigi yang tidak sejajar atau terlalu berjejal dapat sulit dibersihkan dengan sikat gigi biasa, sehingga meningkatkan risiko kerusakan gigi, pembusukan gigi, dan penyakit gusi<br><br>3. Meningkatkan Fungsi Mulut<br>Perawatan ortodontik dapat membantu meningkatkan fungsi mulut, seperti mengunyah dan bicara, yang dapat terganggu oleh masalah gigi yang tidak teratur<br><br>4. Mencegah Masalah Kesehatan<br>Masalah gigi dan rahang yang tidak diobati dapat menyebabkan masalah kesehatan lainnya, seperti sakit kepala, nyeri leher, dan masalah persendian rahang<br><br>Perawatan ortodontik dapat dilakukan dengan berbagai metode, seperti kawat gigi konvensional, kawat gigi transparan, atau bahkan perangkat ortodontik yang dapat dilepas. Penting untuk berkonsultasi dengan dokter gigi atau ortodontis untuk mengetahui perawatan ortodontik mana yang sesuai untuk kondisi gigi dan rahang YDCares <br><br> #YandaTrivia <br>#YandaDentalCare <br> Provide a healthy smile<br>Show off your smile with #YDC<br><br>Yuk reservasi disini :☎ 085935000090<br>📍Ruko New East No.65B, JGC<br>Search google : Yanda Dental Care<br>Atau klik link di bio!<br>Free konsultasi via DM/WA ya 😊 <br><br>#doktergigijakartatimur #klinikgigijakartatimur #doktergigijgc #jgc #cakung #doktergigicakung #klinikgigijgc #doktergigimurah #doktergigimurahjakarta #doktergigimurahjakartatimur #doktergigimurah #scallingmurah #tambalgigimurah #pembersihankaranggigimurah #dentist #dentistry #orthodontics #oralhealth #perawatangigi #klinikgigijakarta #klinikgigimurah #jakartagardencity',
    image: behel,
    slug: 'memakai-behel-gigi-apa-yang-harus-diketahui'
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return (
      <div>
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">[404]Blog post not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
       <header className="bg-gray-900 text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <a href="/"><img src={logo1} className='w-20' alt="Logo" /></a>
            <div className="text-2xl font-bold text-gray-800"></div>
            <div className="space-x-4">
              <a href="/" className="text-white hover:text-yellow-500">Home</a>
              <a href="/" className="text-white hover:text-yellow-500">Tentang Kami</a>
            </div>
          </div>
      </header>

      <div className="container mx-auto px-6 py-16 min-h-screen">
        <h2 className="text-3xl font-bold text-ray-700 mb-6">{blog.title}</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover rounded-md"/>
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 md:pl-6">
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
          </div>
        </div>
      </div>

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
  );
};

export default BlogPost;
