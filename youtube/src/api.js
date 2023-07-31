import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyA5WrI7yNykv-duQpziqvfv2J6bityka0Y",
    },

})

export default request;