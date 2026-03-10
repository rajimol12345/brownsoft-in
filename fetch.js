const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'demo.casethemes.net',
    port: 443,
    path: '/itfirm/about/',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (d) => {
        data += d;
    });
    res.on('end', () => {
        // Basic text extraction
        const textData = data
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<[^>]+>/g, '\n')
            .replace(/\n\s*\n/g, '\n')
            .trim();
        fs.writeFileSync('about_extracted.txt', textData);
        fs.writeFileSync('about_raw.html', data);
        console.log("Successfully extracted to about_extracted.txt and about_raw.html");
    });
});

req.on('error', (error) => {
    console.error(error);
});
req.end();
