const authReducer = (state = { authdata: null, loading: false, error: false }, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {...state, loading:true, error:false}
        case "LOGIN_SUCCESSFULL":
            localStorage.setItem('user', JSON.stringify({...action?.data}))
            return {...state, authdata:action.data, loading:false, error:false}
        case "LOGIN_FAIL":
            return {...state, loading:false, error:true}

            case "LOGOUT_START":
                return {...state, loading:true, error:false}
            case "LOGOUT_SUCCESSFULL":
                localStorage.clear()
                return {...state, authData: null, loading: false, error: false}
            case "LOGOUT_FAIL":
                return {...state, loading:false, error:true}
        default:
            return state;
    }
}


export default authReducer