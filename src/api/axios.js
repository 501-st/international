import axios from "axios";

export default axios.create({
    baseURL: 'https://apisending.ipst-dev.com/api/'
})