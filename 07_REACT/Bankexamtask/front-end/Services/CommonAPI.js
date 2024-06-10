
import axios from 'axios'
export const CommonApi = async(htttpRequest,url,reqBody,reqHeader)=>{

    const config={
       
        method:htttpRequest,
        url,
        data:reqBody,
        header: reqHeader? reqHeader:{
            "Content-Type":"application/json"
        }

    }


    return await axios(config).then((response)=>{
     return response

    }) .catch((error)=>{
  
        return error
    });
}

 