import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyAMj9k2ZAucNhz_iGbh0z0rfscURXVGgoA",
    },

})

export default request;