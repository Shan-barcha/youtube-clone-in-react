import axiox from 'axios';
const KEY ="AIzaSyDfs3x44MkmvnZ9D88d9Anak9dPNfee5GE";

export default axiox.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part :'snippet',
        maxResult: 10,
        key : KEY
    }
});