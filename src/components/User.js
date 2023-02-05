import { useSession, signIn } from 'next-auth/react'
import { MdPersonOutline } from 'react-icons/md'

export default function User() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <img
          src={session.user.image}
          alt="user image"
          className="rounded-full object-cover h-11 w-11 p-2  transition-all duration-100  group-hover:-translate-y-2 relative cursor-pointer hover:drop-shadow-lg active:brightness-75"
        />
      </>
    )
  }
  return (
    <>
      <button onClick={signIn}>
        <div className="group">
          <MdPersonOutline
            size={20}
            className="group-hover:-translate-y-1 text-primary drop-shadow-lg"
          />
        </div>
      </button>
    </>
  )
}
