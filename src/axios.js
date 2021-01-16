import axios from 'axios'

const instance = axios.create({
    baseURL: "https://whatsapp-mern-clone-app.herokuapp.com/"
})


export default instance