const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/6834548cb7764966d3dacbea_client-logo-01.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/6834548ccbe2a49dc01f95fc_client-logo-02.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/6834548c10cd9029401f1a10_client-logo-03.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/6834548caeb3859507f68e92_client-logo-04.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ad9f3dce2a6657a63e1399_help-icon-01.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ad9f3d38869487e26ce991_help-icon-02.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ad9f3d785b8a3b03b5647e_help-icon-03.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ad8e2650fe0f24c404c734_home-banner-samll-img.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68fb6c52b13077fb94383886_home-banner-img.jpg',
    'https://cdn.prod.website-files.com/685d13974c7a915a869cb442/68c2afcb8560c740b7747d9b_case-study-thumbnail-img-02.jpg',
    'https://cdn.prod.website-files.com/685d13974c7a915a869cb442/68c2afed0664ee3e4b81cbc4_case-study-thumbnail-img-03.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ff372421076a29d94f142b_read-icon.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ff18b4df50a48861643c5a_industry-img-02.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ada90d99f975ca4c5a0cc3_industry-icon-02.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ff18b42062217b81cf81fb_industry-img-03.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ada90d0ab0126bc7d774d2_industry-icon-01.svg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ff18b425ab7595b5eb9e8a_industry-img-01.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/690d9be89b3c95b03117763c_industry-mobile-img-03.jpg',
    'https://cdn.prod.website-files.com/68300806a8e68ef819fa1e68/68ada90ded0a3f5e663d37d7_industry-icon-03.svg'
];

const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

urls.forEach(url => {
    let filename = url.split('/').pop();
    // Clean hash
    if (/^[0-9a-f]+_/.test(filename)) {
        filename = filename.replace(/^[0-9a-f]+_/, '');
    }

    const outputPath = path.join(targetDir, filename);

    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(outputPath, () => { });
        console.error(`Error downloading ${url}: ${err.message}`);
    });
});
