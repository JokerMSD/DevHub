import axios from "axios";

const Api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5 * 1000,
})

export { Api }