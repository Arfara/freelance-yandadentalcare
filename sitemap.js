const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://yandadentalcare.id' });

// Manually add URLs
sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemapStream.write({ url: '/blog/gula-penyebab-gigi-karies-mitos-atau-fakta', changefreq: 'monthly', priority: 0.8 });
sitemapStream.write({ url: '/blog/memakai-behel-gigi-apa-yang-harus-diketahui', changefreq: 'monthly', priority: 0.8 });
sitemapStream.end();

// Convert sitemap to XML and save it
streamToPromise(sitemapStream).then((sitemap) => {
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap has been generated and saved to public/sitemap.xml');
});
