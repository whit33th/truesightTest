import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className=''>
      <SignedIn>  <h1>Sign OUT to True Sight</h1> <SignOutButton /></SignedIn>
      <SignedOut>
        <h1>Sign IN to True Sight</h1>
         <SignInButton />
      </SignedOut>
      <Link href={'/profile'}>Profile</Link>
    
    
    </div>
  );
}
