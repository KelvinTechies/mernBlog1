import * as API from '../Api/postRequest'



export const createPost = (formdata) => async (dispatch)=>{
    dispatch({type:"POST_START"})

    try {
        const {data} = await API.createPost(formdata)
        dispatch({type:"SUUCCESSFUL_POST", data: data })
    } catch (error) {
        console.log(error);
        dispatch({type:"POST_FAILED"})
    }
}

export const getAllBlogsForAdmin =()=>async(dispatch)=>{
    dispatch ({type: "GETTING_ALL_BLOGS_FOR_ADMIN"})
    try {
        const {data} = await API.getAllBlogsForAdmin()
        dispatch({type:"SUCCESS_FOR_GETTING_ALL_BLOGS_FOR_ADMIN", data:data})
    } catch (error) {
        console.log(error);
        dispatch({type:"FAILED_GETTING_BLOG_FOR_ADMIN"})
    }
}


export const getAblog = (id)=>async(dispatch)=>{
    dispatch({type:"GETTING_A_BLOG"})
    try {
        const {data} = await API.getAblogForAdmin(id)
        dispatch({type:"SUCCESS_FOR_GETTING_A_BLOG_FOR_ADMIN", data:data})
        
    } catch (error) {
        console.log(error);
        dispatch({type:"GETTING_A_BLOG_FAILED_FOR_ADMIN"})
    }
}

export const updateAblogForAdmin = (id, formData)=>async(dispatch)=>{
    dispatch({type:"UPDATING_START"})
    try {
        const {data} = await API.updateAblogForAdmin(id, formData)
        dispatch({type: "UPDATING_SUCCESS"})
    } catch (error) {
    dispatch({type:"UPDATING_FAIL"})
        console.log(error);
        
    }
}