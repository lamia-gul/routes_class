
import Link from "next/link";
import { Reference } from "react";
export default function Home() {
  return (
    <div>
      <br/><br/><br/><br/>
      <h1 className="text-center font-bold">COUNTRIES DATA </h1>
      <div className="flex items-center justify-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/country">country</Link>
        </button>
      </div>
    </div>
  )
}