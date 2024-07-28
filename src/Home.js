import React from 'react';
import { Link } from 'react-router-dom';
import mitos_fakta from './Components/Assets/mitos_fakta.jpg';
import behel from './Components/Assets/behel.jpg';

const blogs = [
  {
    title: 'Gula Penyebab Gigi Karies? Mitos atau Fakta?',
    description: 'Bukan gula loh sebabnya. Tapi, bakteri di gigi yang memakan gula adalah penyebabnya. Makanan lengket, seperti pati, menarik bakteri untuk berkembang biak di dalam dan sekitar gigi...',
    image: mitos_fakta,
    slug: 'gula-penyebab-gigi-karies-mitos-atau-fakta'
  },
  {
    title: 'Memakai Behel Gigi: Apa yang Harus Diketahui?',
    description: 'Behel gigi bisa membantu merapikan gigi yang tidak rata, tapi juga membutuhkan perawatan yang tepat untuk mencegah masalah...',
    image: behel,
    slug: 'memakai-behel-gigi-apa-yang-harus-diketahui'
  }
];

const Home = () => {
  return (
    <section id="blogs" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-12">Blogs</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 py-4 w-max mx-auto lg:w-full lg:justify-center">
            {blogs.map((blog, index) => (
              <div key={index} className="cursor-pointer bg-white shadow-lg rounded-lg p-6 w-80 flex-none transition-transform transform hover:scale-105 hover:shadow-xl">
                <img src={blog.image} alt={blog.title} className="h-40 w-full object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 break-words">{blog.description}</p>
                <Link to={`/blog/${blog.slug}`} className="text-yellow-500 font-semibold inline-block">Baca Selengkapnya</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
