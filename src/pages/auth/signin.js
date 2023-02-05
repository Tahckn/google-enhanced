import { getProviders, signIn } from 'next-auth/react'
import Header from '@/components/Header'

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="flex flex-col justify-center items-center mt-5"
          >
            <img
              src="https://lh3.googleusercontent.com/1ZMBgQgmeH40hQZpMATpOJI3pbpixiRmSbUWWiqGuNYcLFDXTsPNJ8dBYFSWGjbf6Gs"
              alt="g-logo"
            />
            <p>This website created by Tahackn for learning purposes</p>
            <button
              className="mt-10 bg-primary text-gray-800 p-2 rounded-xl hover:bg-primary/80 shadow-primary shadow-md hover:shadow-primary/80"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
