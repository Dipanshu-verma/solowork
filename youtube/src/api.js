import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyCAolXijmNy7jwx2SyBBoXf9cmizebO_mw",
    },

})

export default request;