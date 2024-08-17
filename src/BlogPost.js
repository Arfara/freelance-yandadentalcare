import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import wa from './Components/Assets/WhatsApp_icon.png';
import logo1 from './Components/Assets/logo_1.svg';
import mitos_fakta from './Components/Assets/mitos_fakta.jpg';
import behel from './Components/Assets/behel.jpg';
import loading from './Components/Assets/loading.svg';

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
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = () => {
      const foundBlog = blogs.find(blog => blog.slug === slug);
      if (foundBlog) {
        setBlog(foundBlog);
        setIsLoading(false);
      } else {
        setBlog(null);
        setIsLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug, location]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img src={loading} alt="Loading..." className="w-24 h-24" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div>
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">[404] Blog post not found</h2>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Helmet>
        <title>Yanda Dental Care - Klinik Gigi Berkualitas dengan Fasilitas Modern</title>
        <meta name="description" content="Yanda Dental Care berlokasi di Jakarta Garden City, Cakung, Jakarta Timur, menyediakan layanan perawatan gigi yang murah dan berkualitas dengan fasilitas modern. Kunjungi kami untuk pengalaman perawatan gigi terbaik." />
        <meta name="keywords" content="pembersihan karang gigi, pencabutan gigi, dental jakarta garden city, klinik gigi cakung, klinik gigi jakarta timur, dokter gigi jakarta timur, perawatan gigi berlubang, cabut gigi terdekat, dokter gigi terdekat, pasang gigi palsu terdekat, klinik gigi terdekat, dental clinic terdekat, klinik cabut gigi terdekat, ahli gigi terdekat, dental terdekat, dokter gigi sekitar sini, dokter gigi orthodontist terdekat, pasang behel terdekat, tambal gigi terdekat, dental klinik terdekat." />
        <meta property="og:title" content="Home - Yanda Dental Care" />
        <meta property="og:description" content="Selamat datang di Yanda Dental Care, Klinik Gigi Berkualitas dengan Dokter Profesional" />
        <meta property="og:image" content="https://yandadentalcare.id/static/media/mitos_fakta.fe369423081ae4b89415.jpg" />
        <meta property="og:image" content="https://yandadentalcare.id/static/media/behel.c4a8b85ea186ce393def.jpg" />
        <meta property="og:url" content="https://yandadentalcare.id/" />
      </Helmet>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-6 px-4">
          <img src={logo1} className="w-20 transform scale-150 ml-4 cursor-pointer" alt="Logo" onClick={() => navigate('/')} />
          <div className="text-2xl font-bold text-gray-800"></div>
          <div className="space-x-4">
            <a href="/" className="text-white hover:text-gray-400">Home</a>
            <a href="/" className="text-white hover:text-gray-400">Hubungi Kami</a>
          </div>
        </div>
      </header>
      <main className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-contain mt-8" />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </article>
        </div>
      </main>
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg z-10">
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
  );
};

export default BlogPost;
