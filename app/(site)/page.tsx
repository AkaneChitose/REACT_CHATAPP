import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-red-200 via-lime-200 to-fuchsia-200">
        <div className="bg-blur backdrop-filter backdrop-blur-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
              <Image alt="Logo" height="100" width="100" className="mx-auto w-auto rounded-full" src="/images/Chat LOGO.png"/>
              <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
              </h2>
          </div>
        </div>
        <AuthForm/>
      </div>
    )
  }
  