import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyBCk6jR4lQIEshZCWix7rjk9OutEGzh2Is",
    },

})

export default request;