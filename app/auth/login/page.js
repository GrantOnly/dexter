import { TextField } from "@mui/material";

export default function Login () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-10 lg:px-16 lg:py-12">
        <div className="w-full md:w-[350px] max-h-[400px] flex flex-col gap-8 rounded md:shadow-md md:px-3 md:py-4">
        <div>
            <h1 className="text-3xl font-semibold text-center">Log In</h1>
            <p className="text-blue-300 text-center">Create an Account or sign in</p>
        </div>
        <form className="justify-items-center">
            <div className="w-full mb-2">
                <TextField
                fullWidth
                placeholder="emmanuel@gmail.com"
                label="Enter Email"
                type="email"
                id="email"
                size="small"/>
                <button type="submit" className="w-full text-white rounded-md h-10 bg-blue-500 hover:opacity-40 p-3 mt-2">Continue</button>
            </div>

        </form>

        </div>


        </main>
    
    )
}