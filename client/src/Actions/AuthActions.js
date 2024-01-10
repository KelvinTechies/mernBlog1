import * as AuthApi from '../Api/authRequest'



export const login = (formdata) => async (dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const { data } = await AuthApi.login(formdata)
        dispatch({ type: "LOGIN_SUCCESSFULL", data: data })

    } catch (error) {
        console.log(error)
        dispatch({ type: "LOGIN_FAIL" })

    }
}

export const logout = (formdata) => async (dispatch) => {
    dispatch({ type: "LOGOUT_START" })
    try {
        const { data } = await AuthApi.logout(formdata)
        dispatch({ type: "LOGOUT_SUCCESSFULL", data: data })

    } catch (error) {
        console.log(error)
        dispatch({ type: "LOGOUT_FAIL" })

    }
}