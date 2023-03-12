
import getAllUsers from "@/lib/getAllUsers"
import type { Metadata } from "next"
import Link from "next/link"


export const metadata :Metadata= {
    title: 'Users',
    description: 'data fetching users page',
  }

async function usersPage() {
  const users:User[] = await getAllUsers()
  return (
    <section>
      <h2>
        <Link href="/"> back to home</Link>
      </h2>
      <br />
      {users.map((user)=>{
        return(<div key={user.id}>
          <p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        </div>)
      })}
    </section>
  )
}

export default usersPage