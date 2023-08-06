import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyDNM-cJZOvyzyzgza9Bt0mXly8upMbTVzo",
    },

})

export default request;