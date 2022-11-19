export function Pricing() {
    return(

    <main  className="  max-w-6xl mx-auto pt-10 pb-36 px-8">

        <div className="max-w-md mx-auto mb-14 text-center">
            <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-white"><span
                className="text-green-500 "><p className={"text-xl"}>Prizes Worth</p></span> <b className={"font-bolder "}>₹200K+</b></h1>
            <p className=" text-white text-xs font-medium w-full">*Cash prizes, swags from IEDC TKMCE, TinkerHub TKMCE, FOSS CELL TKMCE, SPONSORS and more!</p>
        </div>

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start w-full">

            <div
                className="w-full flex-1  p-8 order-2 bg-gradient-to-r from-white to-gray-300 shadow-lg  shadow-xl rounded-xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <img src="https://i.imgur.com/YHnv3IN.png" alt=""
                         className="rounded-3xl w-20 h-20"/>
                    <div className="ml-5">
                        <span className="block text-2xl font-semibold">Second Prize</span>

                    </div>
                </div>
                <ul className="mb-7 font-medium text-gray-500">
                    <li className="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg"/>
                        <span className="ml-3">Goodies from <span className="text-black">sponsors</span></span>
                    </li>
                    <li className="flex text-lg mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg"/>
                        <span className="ml-3">Access to <span className="text-black">Music night</span></span>
                    </li>
                    <li className="flex text-lg">
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg"/>
                        <span className="ml-3"><span className="text-black">Cash prize</span>: </span>
                    </li>
                </ul>
                <div href="#/"
                   className="flex justify-center items-center bg-green-400 text-black rounded-xl py-5 px-4 text-center  text-3xl font-bold">
                    ₹15k

                </div>
            </div>

            <div
                className="w-full flex-1 p-8 order-1 shadow-xl rounded-xl md:rounded-r-xs my-8 md:my-0 md:rounded-r-3xl bg-gradient-to-r from-purpleC to-purpleC2 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                <div className="mb-4 pb-8 flex items-center border-b border-gray-600">
                    <img src="https://i.imgur.com/PINwokZ.png" alt=""
                         className="rounded-3xl w-20 h-20"/>
                    <div className="ml-5">
                        <span className="block text-3xl font-semibold text-white">First Prize </span>

                    </div>

                </div>
                <ul className="mb-10 font-medium text-lg">
                    <li className="flex mb-2">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg"/>
                        <span className="ml-3">Goodies from <span className="text-white">Sponsors</span></span>
                    </li>
                    <li className="flex mb-1">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg"/>
                        <span className="ml-3">Access to <span className="text-white">Music night</span></span>
                    </li>
                    <li className="flex">
                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg"/>
                        <span className="ml-3"><span className="text-white">Cash prize</span>:</span>
                    </li>
                </ul>
                <div href="#/"
                   className="flex justify-center items-center bg-green-400 rounded-xl py-5 px-4 text-center text-black font-bold text-3xl">
                    ₹30k

                </div>
            </div>



        </div>
        <p className={"text-white font-bold my-2 text-center     rounded-lg"}>All participants will have free access to cafeteria, music night, night stall and goodies from sponsors</p>

    </main>
    )
}