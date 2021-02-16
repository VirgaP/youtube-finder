import axios from "axios";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
})