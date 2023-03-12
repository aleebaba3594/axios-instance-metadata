import api from "../app/axiosApi/axiosInstance"


async function getUserPost(userId: string) {
  const res = await api.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res) {
    throw new Error("failed to fetch the user posts");
  }
  return res.data;
}

export default getUserPost;
