import axios from "axios";
import { BASE_URL } from "../../../constants";
import { IMakeRequest } from "../../../types";

const makeRequest = ({
    url = '/',
    method = 'GET' ,
    params = {},
    data = {},
    headers = {},
    responseType = 'json'
}: IMakeRequest) => {
    return axios({
        baseURL: `${BASE_URL}/api`,
        url,
        method,
        params,
        data,
        headers,
        responseType,
        withCredentials: true
    })
};

export default makeRequest