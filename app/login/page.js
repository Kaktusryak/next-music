import Link from "next/link";

export default function Login() {
    return (
     <div className="flex">
        <form className="flex m-auto mt-72 border-white p-3 flex-col border rounded-lg w-96">
            <div className="flex-col flex ">
                <div className="my-2">
                    Enter your log-in data:
                </div>
                <input type="text" className="text-black   h-8 border rounded-xl px-5 my-2" placeholder="Email"/>
                <input type="text" className="text-black   h-8 border rounded-xl px-5 my-2" placeholder="Password"/>
                <Link href="/" className="bg-green-300 rounded my-2 h-8 text-black  text-center">Log-in</Link>
                <div className="my-2">
                    Don't have an account? Register here:
                </div>
                <Link href="/register" className="bg-black rounded my-2 h-8 text-white border-white border text-center">Register</Link>
            </div>
            
        </form>
     </div>
      
      
    )
  }