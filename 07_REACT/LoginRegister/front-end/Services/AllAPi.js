import { CommonApi } from "./CommonAPI";
import { serverUrl } from "./ServerUrl";

export const registerAPI =async(data)=>{
 
    return CommonApi('post',`${serverUrl}/register`,data,"")
}

export const loginAPI =async(data)=>{
 
    return CommonApi('post',`${serverUrl}/login`,data,"")
}


