

import api from "../app/axiosApi/axiosInstance"

async function getUser(userId:string) {
    const res =await api.get(`users/${userId}`)
    if (!res) {
        throw new Error("failed to fetch");
      }
      return res.data

}

export default getUser