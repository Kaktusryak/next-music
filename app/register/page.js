import Link from "next/link";

export default function Register() {
    return (
     <div className="flex">
        <form className="flex m-auto mt-72 border-white p-3 flex-col border rounded-lg w-96">
            <div className="flex-col flex ">
                <div className="my-2">
                    Enter your register data:
                </div>
                <input type="text" className="text-black   h-8 border rounded-xl px-5 my-2" placeholder="Email"/>
                <input type="text" className="text-black   h-8 border rounded-xl px-5 my-2" placeholder="Password"/>
                <input type="text" className="text-black   h-8 border rounded-xl px-5 my-2" placeholder="Repeat password"/>
                <Link href="/" className="bg-cyan-300 rounded my-2 h-8 text-black  text-center">Register</Link>
                
                <div className="my-2">
                    Have an account? Log-in here:
                </div>
                <Link href="/login" className="bg-black rounded my-2 h-8 text-white border-white border text-center">Log-in</Link>
            </div>
            
        </form>
     </div>
      
      
    )
  }