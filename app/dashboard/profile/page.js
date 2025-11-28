import Image from  "next/image"

export default function profile () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
            <div className="w-full py-10 px-2 md:w-[350px] flex flex-col h-auto shadow-md rounded-md md:py-12 md:px-4">
               <div className="flex justify-center">
                <Image
                src="/car.png"
                alt="profile-image"
                width={100}
                height={100}
                className="rounded-2xl w-[100px] h-[100px] border border-gray-100"/>
                </div>
                <h1 className="text-lg font-semi-bold text-gray-800">Grant Ujam</h1>
                <p className="text-center text-sm">@ujams</p>
                <div className="flex justify-center mt-3">
                    <button className="w-[115px] h-10 border rounded-xl border-gray-700">Edit Profile</button>
                    </div>
                    <div className="mt-5 flex flex-col gap-4">
                        <p className="border-b border-gray-300 text-lg text-center">email:ujamgrant@gmail.com</p>
                        <p className="border-b border-gray-300 text-lg text-center">userId: 4567</p>
               </div>
            </div>
        </main>
    )
}