import { getInfo } from '../api';

export const GET_INFO_REQUEST = "GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_ERROR = "GET_INFO_ERROR"

export const fetchInfo = () => async dispatch => {
      await dispatch({ type: GET_INFO_REQUEST, isLoadingInfo: false })
    try {
        const response = await getInfo()
        return dispatch({
            type: GET_INFO_SUCCESS,
            info: response.data
        });
    } catch (err) {
        return dispatch({ type: GET_INFO_ERROR, err });
    }
}