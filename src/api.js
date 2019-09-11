import axios from "./axios";

export const getFonts = () => axios.get("fonts");

export const getImage = payload =>
  axios({
    method: "get",
    url: "images",
    responseType: "blob",
    params: payload
  });
