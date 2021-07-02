import axios from 'axios';

const KEY ="AIzaSyBFulTxy5XwBgrx6xV4ZAv71C4WgWFekg0";  

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        type:'video',
        key:KEY   
    }
}); 