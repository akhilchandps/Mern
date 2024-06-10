import axios from 'axios';

export const commonApi = async(httRequest,url,reqbody,reqHeader)=>{

    const reqConfif={

        method:httRequest,
        url,
        data:reqbody,
        header:reqHeader? reqHeader : {
            "Content-Type":"application/json"
        }
    }
    
    return await axios(reqConfif).then((response)=>{
        return response
    }) .catch((error)=>{
  
        return error
    });
}