import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
        <Image 
          src="/login.avif" 
          alt="login" 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
