const port = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const getDownloadUrl = require('facebook-video-downloader');
const app = express();
app.use(cors());
app.listen(port, () => {
    console.log('Server Works !!! At port '+port);
});
// var path = __dirname;
// console.log(path);

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/page.html');
});
app.get('/download', async (req,res) => {
var URL = req.query.URL;
console.log(URL);
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);

// let info = await ytdl.getInfo(URL);
// let format = ytdl.chooseFormat(info.formats);
// console.log('Format found!', format);

// let info1 = await ytdl.getInfo(URL);
// let audioFormats = ytdl.filterFormats(info1.formats, 'audioonly');
// console.log('Formats with only audio: ' + audioFormats);


 


});