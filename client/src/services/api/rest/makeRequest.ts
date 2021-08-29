import axios from "axios";
import { BASE_URL } from "../../../common/constants";
import { IMakeRequest } from "../../../common/types";

const makeRequest = ({
    url = '/',
    method = 'GET' ,
    params = {},
    data = {},
    headers = {},
}: IMakeRequest) => {
    return axios({
        baseURL: BASE_URL,
        url,
        method,
        params,
        data,
        headers,
        withCredentials: true
    })
};

export default makeRequest