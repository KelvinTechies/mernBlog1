const PostReducers = (state = { postData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "POST_START":
            return {...state, loading:true, error:false}
        case "SUUCCESSFUL_POST":
            return {...state, postData:action.data, loading:false, error:false}

        case "POST_FAILED":
            return {...state, loading:false, error:true}

            
        case "GETTING_ALL_BLOGS_FOR_ADMIN":
                return {...state, loading:true, error:false}
        case "SUCCESS_FOR_GETTING_ALL_BLOGS_FOR_ADMIN":
                return {...state, postData:action.data, loading:false, error:false}
    
        case "FAILED_GETTING_BLOG_FOR_ADMIN":
                return {...state, loading:false, error:true}

        // case "GETTING_A_BLOG":
        //     return {...state, loading:true, error:false}
        // case:"SUCCESS_FOR_GETTING_A_BLOG_FOR_ADMIN":
        //     return {...state, }
        default:
            return state;
    }
}


export default PostReducers