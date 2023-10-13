import axios from 'axios';

import { EXPORTER_YEAR_GET_REQUEST, EXPORTER_YEAR_GET_SUCCESS, EXPORTER_YEAR_GET_FAIL } from "../constants/exporterConstants";

export const getExporterFOBYear = (year) => async (dispatch) => {
    try{
        dispatch({
            type: EXPORTER_YEAR_GET_REQUEST
        })
        const {data} = await axios.get(`/api/exporter/${year}`);
        dispatch({
            type: EXPORTER_YEAR_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: EXPORTER_YEAR_GET_FAIL,
            payload: error.response?.data.message ? error.response.data.message : error.message
        })
    }
}