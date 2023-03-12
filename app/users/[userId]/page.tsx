import UserPosts from "@/app/components/UserPosts";
import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

// TODO: generate the dynamic metadata
// both the functions will get same props but return type will be promise of metadata for meta func
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // userdata to get user name
  const user: User = await getUser(userId);
  return {
    title: user.name,
    description: ` this is page of ${user.name}`,
  };
}

// TODO: UserPosts comp shows an error which is due to typescript and nextJS 13 is yet resolving it,
//  we can disable ts for this comp by addding this {/* @ts-expect-error Async Server Component */}
// according to docs reference here https://beta.nextjs.org/docs/data-fetching/fetching

async function page({ params: { userId } }: Params) {

  const user: User = await getUser(userId);
  const userPostData: Post = await getUserPost(userId);
  return (
    <div>
      {/* when suspense is in working user name still shows  */}
      <h2>{user.name}</h2>
      <Suspense fallback={<h1>...loading user posts</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts userPostData={userPostData} />
      </Suspense>
    </div>
  );
}

export default page;
