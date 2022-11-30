import polylogo from "../../assets/Polygon_logo.png";
import solanalogo from "../../assets/solana-logo.png";
import replitlogo from "../../assets/replit-logo.png";
import filecoinlogo from "../../assets/filecoin-logo.png";
export function Pricing() {
    return (

        <div className="  max-w-6xl mx-auto pt-10 pb-36 px-8 flex flex-col items-center">

            <div className="max-w-md mx-auto mb-14 text-center">
                <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-white"><span
                    className="text-green-500 "><p className={"text-xl"}>Prizes Worth</p></span> <b className={"font-bolder "}>₹200K+</b></h1>
                <p className=" text-white text-xs font-medium w-full">*Cash prizes, swags from IEDC TKMCE, TinkerHub TKMCE, FOSS CELL TKMCE, SPONSORS and more!</p>
            </div>

            <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start w-full">

                <div
                    className="w-full flex-1  p-8 order-2 bg-gradient-to-l from-purpleC to-purpleC2 shadow-lg  shadow-xl rounded-xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://i.imgur.com/PINwokZ.png" alt=""
                            className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-3xl font-semibold text-white">First Prize </span>

                        </div>

                    </div>
                    <ul className="mb-10 font-medium text-gray-500">
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Goodies from <span className="text-white">sponsors</span></span>
                        </li>
                        <li className="flex text-lg mb-1">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Access to <span className="text-white">Music night</span></span>
                        </li>
                        <li className="flex text-lg">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3"><span className="text-white">Cash prize</span>: </span>
                        </li>
                    </ul>
                    <div href="#/"
                        className="flex justify-center items-center bg-green-400 rounded-xl py-5 px-4 text-center text-black font-bold text-3xl">
                        ₹30k

                    </div>
                </div>

                <div
                    className="w-full flex-1 p-8 order-1 shadow-xl rounded-xl md:rounded-r-xs my-8 md:my-0 md:rounded-r-3xl bg-gradient-to-r from-purpleC to-purpleC2 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">

                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://i.imgur.com/YHnv3IN.png" alt=""
                            className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold text-white">Second Prize</span>

                        </div>
                    </div>
                    <ul className="mb-10 font-medium text-lg">
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Goodies from <span className="text-white">Sponsors</span></span>
                        </li>
                        <li className="flex mb-1">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Access to <span className="text-white">Music night</span></span>
                        </li>
                        <li className="flex">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3"><span className="text-white">Cash prize</span>:</span>
                        </li>
                    </ul>

                    <div href="#/"
                        className="flex justify-center items-center bg-green-400 text-black rounded-xl py-5 px-4 text-center  text-3xl font-bold">
                        ₹15k

                    </div>
                </div>



            </div>
            <div className="w-full md:w-3/5 flex justify-center mb-10">
                <div
                    className="w-full  flex-1 p-8 order-1 shadow-xl rounded-xl md:rounded-r-xs my-8 md:my-0 md:rounded-r-3xl bg-gradient-to-r from-purpleC to-purpleC2 text-gray-400 sm:w-96 lg:w-3/5 justify-center lg:order-2 lg:mt-5">

                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        {/* <img src="https://i.imgur.com/YHnv3IN.png" alt=""
                        className="rounded-3xl w-20 h-20" /> */}
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold text-white">Innovate for TKM</span>
                            <p className="text-sm">exclusive for TKM</p>

                        </div>
                    </div>
                    <ul className="mb-10 font-medium text-lg">
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Goodies from <span className="text-white">Sponsors</span></span>
                        </li>
                        <li className="flex mb-1">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3">Access to <span className="text-white">Music night</span></span>
                        </li>
                        <li className="flex">
                            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                            <span className="ml-3"><span className="text-white">Cash prize</span>:</span>
                        </li>
                    </ul>

                    <div href="#/"
                        className="flex justify-center items-center bg-green-400 text-black rounded-xl py-5 px-4 text-center  text-3xl font-bold">
                        ₹10k

                    </div>
                </div>
            </div>

            <p className={"text-white font-bold my-2 text-center rounded-lg mb-10"}>All participants will have free access to cafeteria, music night, night stall and goodies from sponsors</p>
            <div className="w-full  center flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row mb-3  ">
                    <label for="my-modal-1">

                        <div className="w-60 p-2 h-32 bg-gray-300 rounded-lg hover:bg-gray-200">
                            <img className="w-3/4" src={polylogo} />
                        </div>
                    </label>
                    <label for="my-modal-2" >

                        <div className="md:ml-3 w-60 p-2 h-32 bg-gray-300 mt-3 md:mt-0 rounded-lg hover:bg-gray-200">
                            <img className="w-3/4" src={solanalogo} />
                        </div>
                    </label>
                </div>
                <div className="flex flex-col md:flex-row">
                    <label for="my-modal-3" >
                        <div className="w-60 p-2 h-32 bg-gray-300 rounded-lg hover:bg-gray-200">
                            <img className="w-3/4" src={replitlogo} />
                        </div>
                    </label>
                    <label for="my-modal-4" >
                        <div className="w-60 p-2 h-32 bg-gray-300 rounded-lg mt-3 md:mt-0 md:ml-3 hover:bg-gray-200">
                            <img className="w-3/4" src={filecoinlogo} />

                        </div>
                    </label>
                </div>
            </div>



            <input type="checkbox" id="my-modal-1" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-purpleC">
                    <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4">Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.

                        Prizes up for grabs:</p>
                    <ol>
                        <li className="mb-5">-₹10,000 for the best hack built on Ethereum, or</li>
                        <li className="mb-5">-₹15,000 for the best hack built on Ethereum + Polygon,</li>
                        <li className="mb-5">-Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</li>
                    </ol>
                    <p>Read about the bounty details and find code templates for Polygon here: https://nsb.dev/polygon-bounty.</p>
                </div>
            </div>
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-purpleC">
                    <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4">Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.

                        Prizes up for grabs:</p>
                    <ol>
                        <li className="mb-5">-young gun - $USDC 100 for the best project beginners just starting out on Solana and/or</li>
                        <li className="mb-5">-rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or</li>
                        <li className="mb-5">-master glasseater - $USDC 500 for the best advanced project that is almost ready for full-time development.</li>
                    </ol>
                    <p>Read about the bounty details and find code templates for Solana here: https://nsb.dev/solana-bounty.</p>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-purpleC">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4">Replit is the best platform for quickly starting, sharing, and developing projects in any programming language, right from your browser.</p>
                    <ol>
                        <li className="mb-5">-5,000 INR to winning project of the hackathon (must be deployed on Replit)</li>
                        <li className="mb-5">-Replit schwags to 5 eligible submissions deployed on Replit.</li>
                        <li className="mb-5">-Eligibility to apply for internship/full-time roles at Replit</li>
                    </ol>
                    <p>Read more about the bounty details for Replit here: https://nsb.dev/replit-bounty.</p>
                </div>
            </div>


            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-purpleC">
                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4">Protocol Labs is an open-source R&D lab. They build protocols, tools, and services to radically improve the internet. Their products serve thousands of organizations and millions of people.</p>
                    <ol>
                        <li className="mb-5">-IPFS: IPFS powers the Distributed Web. It's a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.</li>
                        <li className="mb-5">-Filecoin: An open-source cloud storage marketplace, protocol, and cryptocurrency.</li>
                    </ol>
                    <p>Prizes up for grabs:</p>
                    <ol>
                        <li className="mb-5">-₹20000 for best use of IPFS and/or Filecoin</li>
                    </ol>
                    <p>Read about the bounty details and find code templates for Filecoin here: https://nsb.dev/filecoin-bounty.</p>
                </div>
            </div>
        </div >
    )
}