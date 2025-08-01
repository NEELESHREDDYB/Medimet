import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo-single.png"
            alt="medimeet logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div>
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
