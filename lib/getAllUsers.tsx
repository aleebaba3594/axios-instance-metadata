import api from "../app/axiosApi/axiosInstance"

async function getAllUsers() {
  const res = await api.get("users");

  if (!res) {
    throw new Error("failed to fetch all users");
  }
  return res.data;
}

export default getAllUsers;
