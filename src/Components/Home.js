import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {get_sponsors} from "../apis/blogs_api";
import HomeSvg from "../Svgs/HomeSvg";
import About from "./About";
import Footer from "./Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import logo from "../assets/logo.png";
import dev_logo from "../assets/dev_logo.png";
import iic_logo from "../assets/iic.png";
import polygon from "../assets/poly.png";
import filecoin from "../assets/file_coin.png";
import repl from "../assets/repl.png";
import dev_app from "../assets/dev_app.png";
import Countdown from "react-countdown";
import gold_ from "../assets/tt.jpg";
import solana from "../assets/solana.png";
import diamond from "../assets/diamond.svg";
const renderer = ({ total, hours, minutes, seconds }) => {
    minutes = String(minutes).length===1?`0${String(minutes)}`:String(minutes);
    seconds = String(seconds).length===1?`0${String(seconds)}`:String(seconds);
    if (total) {
        // Render a countdown
        return (
            <span>
                <b className={"bg-gray-900 p-2 rounded-lg"}>{hours}</b>:<b className={"bg-gray-900 p-2 rounded-lg"}>{minutes}</b>:<b className={"bg-yellow-400 p-2 rounded-lg"}>{seconds}</b>
      </span>
        );
    } else {
        // Render a finished state
        return <p>Register Now!</p>;
    }
}
function Home(props) {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    const gold = [{name: "", logo: filecoin, link: "https://filecoin.io/"},
        {name: "", logo: repl, link: "https://replit.com/"},
        {name: "", logo: solana, link: "https://solana.com/"},]
    const [sponsors, setsponsors] = useState([
        {
            name: "",
            logo: dev_logo,
            link: "https://devfolio.co/",
        },
        {
            name: "",
            logo: iic_logo,
            link: "https://mic.gov.in/innovation-council/iic",
        },
        {
            name: "",
            logo: polygon,
            link: "https://polygon.technology/",
        },
        // {
        //   name: "",
        //   logo: solana,
        //   link: "https://solana.com/",
        // },

    ]);

    useEffect(() => {
        let isSubscribed = true;

        async function get_spnrsrs_() {
            let spnsr = await get_sponsors();
            setsponsors(spnsr.data?.results);
        }

        if (isSubscribed) get_spnrsrs_();
        return () => (isSubscribed = false);
    }, []);
    return (
        <div className="backgroundsv  bg-opacity-50 ">

            <div className={"absolute z-40 m-2 w-screen  flex-col md:flex-row flex justify-between"}>


                <div className="   ">

                    <div className="  bg-opacity-40  rounded-md p-2 w-full">
                        <p className=" md:text-xl text-xs text-white font-mono  text-center uppercase">
                            <Countdown renderer={renderer} date={new Date("2022-11-20")}/>
                        </p>


                        <div
                            className="apply-button"
                            data-hackathon-slug="latency-2.0"
                            data-button-theme="light"
                            style={{height: '44px', width: '312px'}}
                        >
                            <p>Apply</p></div>
                    </div>


                </div>
                <div>
                    <div
                        className=" opacity-0 md:opacity-100 w-fit flex   mx-auto overflow-hidden bg-purpleC rounded-lg shadow-md ">
                        <div className="flex items-center justify-center w-8 bg-black  opacity-0 md:opacity-100">
                            <svg
                                className="w-4 h-4 text-white fill-current"
                                viewBox="0 0 40 40"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
                            </svg>
                        </div>

                        <div className="px-2 py-1 -mx-3 ">
                            <a
                                href={
                                    "https://tkmbucket.s3.amazonaws.com/media/college/uploads/tech.pdf"
                                }
                                target={"_blank"}
                            >
                                <div className="mx-2">
              <span className="font-semibold text-white  text-sm px-2">
                Rules & guidelines
              </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* <HomeSvg className="z-0 fixed top-0  h-full" /> */}
            <div
                data-aos="fade-up"
                aos-delay="4000"
                className="z-1 C min-h-screen absolute top-20 flex flex-col items-center  "
            >
                {/*<div className="w-4/5 mb-10 flex flex-col items-center ">*/}
                {/*    /!*<h1 className="text-6xl mb-5 text-white opacity-50">☵ ☵ ☰</h1>*!/*/}
                {/*    <p className="text-center text-white  ">*/}
                {/*        <i>Tkmce@2022 </i>*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="flex mb-10 just bg-opacity-20  rounded-xl md:w-2/3 px-8 py-4 flex-col items-center ">
                    <div className=" flex justify-center  hover:bg-purpleC rounded-full  m-2 mx-4">
                        <div>

                            <div className={"text-center"}>
                                <img src={diamond} alt={"diamond sponsor"} className={"w-96"}/>
                            </div>
                        </div>
                    </div>
                    {/*<p className="text-center text-white text-xs">{"Presents"}</p>*/}

                    <h3 className="font-neon lg:text-8xl md:text-5xl  uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-br font-semibold from-white via-yellow-500 to-white p-2 ">
                        Latency 2.0
                    </h3>
                    <a
                        target="_blank"
                        href={"https://www.iedctkmce.com/"}
                        rel="noreferrer"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="w-32 mx-auto rounded-full"
                        />
                    </a>
                    {/*<button style={{backgroundImage: `url('${gold_}')`, backgroundPosition: 'center'}}*/}
                    {/*        className={"mm p-2 font-semibold font-sans text-sm rounded my-2 border-yellow-400 border text-white"}>Coming*/}
                    {/*    Soon!*/}
                    {/*</button>*/}
                </div>

                <a href={"#"} className=" ">
                    {/*<div className="border-2 border-yellow-300 rounded-xl px-4 py-2">*/}
                    {/*  <p className="text-white text-2xl font-semibold">Coming soon!</p>*/}
                    {/*</div>*/}
                </a>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className="  flex flex-col items-center ">
                        <div className={"relative text-2xl my-2 font-bold"}>
                            <span className="text-white shine ">Platinum:Sponsors</span>
                        </div>

                        <div
                            className=" mt-1  rounded-lg w-full lg:w-3/4 p-4 flex justify-center items-center bg-transparent">
                            <div className="grid lg:grid-cols-3 grid-cols-3 ">
                                {sponsors && sponsors.length ? (
                                    sponsors.map((item) => {
                                        return (
                                            <div className="">
                                                <div className="   bg-[#191919] m-4">
                                                    <a target="_blank" href={item.link} rel="noreferrer">
                                                        <img
                                                            src={item.logo}
                                                            alt="logo"
                                                            className=" "
                                                        />
                                                    </a>
                                                </div>
                                                <p className="text-center text-white text-xs">
                                                    {item.name}
                                                </p>
                                            </div>
                                        );
                                    })) : (
                                    <div className="flex  justify-center w0 items-center">
                                        <div className={"h-full"}>
                                            <Loader
                                                type="BarLoader"
                                                color="#fff"
                                                height={100}
                                                width={100}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="  flex flex-col items-center ">
                        <div className={"relative text-2xl my-2 font-bold"}>
                            <span className="text-white shine_gold ">Gold:Sponsors</span>
                        </div>

                        <div
                            className=" mt-1  rounded-lg w-full lg:w-3/4 p-4 flex justify-center items-center bg-transparent">
                            <div className="grid grid-cols-3 ">
                                {gold && gold.length ? (
                                    gold.map((item) => {
                                        return (
                                            <div className="">
                                                <div className="   bg-[#191919] m-4">
                                                    <a target="_blank" href={item.link} rel="noreferrer">
                                                        <img
                                                            src={item.logo}
                                                            alt="logo"
                                                            className="w-48 "
                                                        />
                                                    </a>
                                                </div>
                                                <p className="text-center text-white text-xs">
                                                    {item.name}
                                                </p>
                                            </div>
                                        );
                                    })) : (
                                    <div className="flex  justify-center w0 items-center">
                                        <div className={"h-full"}>
                                            <Loader
                                                type="BarLoader"
                                                color="#fff"
                                                height={100}
                                                width={100}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
