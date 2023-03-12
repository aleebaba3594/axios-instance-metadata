type userPost = {
  userPostData: Post;
};

async function UserPosts({ userPostData }: userPost) {
  
  return (
    <>
      {userPostData.map((posts) => {
        return (
          <div key={posts.id}>
            <h2>{posts.tile}</h2>
            <br />
            <h3>{posts.body}</h3>
          </div>
        );
      })}
    </>
  );
}

export default UserPosts;
