

import api from "../app/axiosApi/axiosInstance"

async function PsotUserPost(forPostData:string) {

    // due to 500 axios error we make a property named innerdata, basically in the form of json
   const data= {
        innerData:forPostData
    }
    const res =await api.post("posts",data)
    if (!res) {
        throw new Error("failed to post data");
      }
      return res.data
      
}

export default PsotUserPost