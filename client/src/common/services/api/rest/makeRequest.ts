import axios from "axios";
import { BASE_URL } from "../../../constants";
import { IMakeRequest } from "../../../types";

const makeRequest = ({
    url = '/',
    method = 'GET' ,
    params = {},
    data = {},
    headers = {},
}: IMakeRequest) => {
    return axios({
        baseURL: `${BASE_URL}/api`,
        url,
        method,
        params,
        data,
        headers,
        withCredentials: true
    })
};

export default makeRequest