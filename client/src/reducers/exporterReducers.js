import {
    EXPORTER_YEAR_GET_REQUEST,
    EXPORTER_YEAR_GET_SUCCESS,
    EXPORTER_YEAR_GET_FAIL,
} from '../constants/exporterConstants';

export const exporterYearReducers = (state = {}, action) => {
    switch (action.type) {
        case EXPORTER_YEAR_GET_REQUEST:
            return { loading: true };
        case  EXPORTER_YEAR_GET_SUCCESS:
            return { loading: false, success: true, exporterYearFOB: action.payload };
        case EXPORTER_YEAR_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};