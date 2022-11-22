import React, { useEffect, useRef, useState } from "react";
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
import DBSchenker from "../assets/DBSchenker.png";
import solana from "../assets/solana.png";

import { FloatingBar } from "./Home/FloatingBar";
import { DiamondSponsors } from "./Home/DiamondSponsors";
import { MainTitle } from "./Home/MainTitle";
import { Coordinators } from "./Home/Coordinators";
import { Sponsors } from "./Home/Sponsors";
import { Schedule } from "./Home/Schedule";
import { ScheduleMini } from "./Home/ScheduleMini";
import { AnimatedBanner } from "./Home/AnimatedBanner";
import { Faq } from "./Home/Faq";
import worldtron from "../assets/worldtron.png";
import dhl from "../assets/dhl.png";
import { Pricing } from "./Home/Pricing";
import TRUNK from 'vanta/dist/vanta.dots.min'
import * as PropTypes from "prop-types";


function Sponsors_new(props) {
    const sponsors = [
        { image: "https://i.imgur.com/SnOvTWJ.jpg", link: "https://www.ieeesbtkmce.in/" },
        , { image: "https://tkmce.github.io/fosscell/assets/logos/tkmce_foss_icon.png", link: "https://tkmce.github.io/fosscell/" },
        { image: "https://worldtronlogistics.com/assets/images/a.png", link: "https://www.worldtronlogistics.com/" },
        { image: "https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg", link: "https://www.dhl.com/in-en/home.html?locale=true" }]
    return (
        <div className={"grid grid-cols-4 gap-3 my-2"}>
            {sponsors.map((e) => (
                <div className={""}>
                    <a href={e.link} className={""}>
                        <div
                            className={"filter saturate-0 rounded-xl flex justify-center items-center bg-white w-fit p-1   border border-green-500 hover:border-yellow-400  "}>
                            <img className={"h-5 "} src={e.image} />
                        </div>
                    </a>
                </div>
            ))}
        </div>);
}

Sponsors_new.propTypes = { sponsors: PropTypes.any };

function Home(props) {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TRUNK({
                el: myRef.current,
                color: '#259676',
                color2: '#2B2B2B',
                backgroundColor: '#2B2B2B'


            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    const diamond_sponsors = [
        {
            name: "", logo: worldtron, link: "https://www.worldtronlogistics.com/",
        },

        {
            name: "", logo: dhl, link: "https://www.dhl.com/in-en/home.html?locale=true",
        },

    ];
    const [sponsors, setsponsors] = useState([
        {
            name: "", logo: dev_logo, link: "https://devfolio.co/",
        },

        {
            name: "", logo: polygon, link: "https://polygon.technology/",
        },
        {
            name: "", logo: DBSchenker, link: "https://www.dbschenker.com/global",
        },
    ]);
    const gold = [{ name: "", logo: filecoin, link: "https://filecoin.io/" }, {
        name: "", logo: repl, link: "https://replit.com/"
    }, { name: "", logo: solana, link: "https://solana.com/" },]


    return (
        <div ref={myRef} className=" overflow-x-hidden min-h-screen  bg-opacity-50  ">
            <FloatingBar />


            <div

                aos-delay="4000"
                className="z-1 C min-h-screen absolute  flex flex-col items-center  "
            >

                <div

                    className="h-screen w-screen   flex  justify-center bg-opacity-20  rounded-xl md:w-2/3 px-8  flex-col items-center ">

                    <Coordinators link={"https://www.iedctkmce.com/"} logo={logo} />
                    <MainTitle title={"Latency"} version={"2.0"} />
                    <Sponsors_new sponsors={diamond_sponsors} />

                </div>

                <ScheduleMini />
                <About />
                <div className={"bg-purpleC w-full"}>
                    <Pricing />
                </div>
                <div

                    className="relative bg-purpleC flex justify-center items-center  w-full  rounded-xl flex flex-col items-start"
                >
                    <h7 className="font-bold text-5xl my-2 py-2 text-white ">Schedule</h7>
                    <Schedule />
                </div>


                <div className={"relative text-2xl mt-8 font-bold "}>
                    <span className="text-white  bg-purpleC_diamond text-4xl ">Diamond:Sponsors</span>
                </div>

                {/*<div className={"h-1 w-wit  w-32   bg-gradient-to-r from-blue-500"}></div>*/}
                <Sponsors sponsors={diamond_sponsors} />
                <div className={"grid grid-cols-1 my-12 gap-4"}>
                    <div className="  flex flex-col items-center w-10/12 m-auto py-4 ">
                        <div className={"relative text-2xl  font-bold"}>
                            <span className="text-white  bg-purpleC text-4xl ">Platinum:Sponsors</span>
                        </div>
                        {/*<div className={"h-1 w-wit  w-32 mt-4 bg-gradient-to-r from-white"}></div>*/}
                        <Sponsors sponsors={sponsors} />
                    </div>

                    <div className="  flex flex-col items-center w-10/12 m-auto py-4 ">
                        <div className={"relative text-2xl  font-bold"}>
                            <span className="text-white  bg-purpleC_gold text-4xl  ">Gold:Sponsors</span>

                        </div>
                        {/*<div className={"h-1 w-wit  w-32 mt-4 bg-gradient-to-r from-yellow-500"}></div>*/}

                        <Sponsors sponsors={gold} />

                    </div>

                </div>

                <div className={"h-96"}>
                    <AnimatedBanner title={"Enigma is almost here!"} />
                </div>
                <Faq />
                <Footer />
            </div>
        </div>);
}

export default Home;
