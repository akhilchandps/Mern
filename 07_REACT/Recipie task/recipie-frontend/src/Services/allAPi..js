import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const AddRecipie = async(user)=>{
    return await commonApi('post',`${serverUrl}/add-recipie`,user,"")
}

export const getRecipiesApi = async(searchKey)=>{
    return await commonApi('get',`${serverUrl}/get-all-recipie?search=${searchKey}`,"","")
}


export const viewuserRecipieApi = async(id)=>{
    return await commonApi('get',`${serverUrl}/get-user-recipie/${id}`,"","")
}