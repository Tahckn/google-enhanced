import User from './User'
import { MdOutlineShop } from 'react-icons/md'
import { MdInfoOutline } from 'react-icons/md'
import { MdOutlineMail } from 'react-icons/md'
import { MdImageSearch } from 'react-icons/md'
import { useSession, signOut, signIn } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex justify-between p-5 text-sm text-text items-center">
      <div className="link-wrapper">
        <div className="link flex flex-col group relative">
          <MdInfoOutline size={20} className="group-hover:-translate-y-1" />
          <p className="link-text">ABOUT</p>
        </div>
        <div className="link flex flex-col group relative">
          <MdOutlineShop size={20} className="group-hover:-translate-y-1" />
          <p className="link-text">STORE</p>
        </div>
      </div>
      <div className="link-wrapper">
        <div className="link flex flex-col group relative">
          <MdOutlineMail size={20} className="group-hover:-translate-y-1" />
          <p className="link-text">MAIL</p>
        </div>
        <div className="link flex flex-col group relative">
          <MdImageSearch size={20} className="group-hover:-translate-y-1" />
          <p className="link-text">IMAGE</p>
        </div>
        <div
          className={session ? 'img-session group' : 'link group'}
          onClick={session ? signOut : signIn}
        >
          <User />

          {session ? (
            <p className="link-text">SIGN OUT</p>
          ) : (
            <p className="link-text">SIGN IN</p>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
