import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import register from "../assets/users.png";
import discord from "../assets/cloud.png";
import hack from "../assets/hack.png";
import pitch from "../assets/pitch.png";
import { get_blogs, get_faqs } from "../apis/blogs_api";
import Loader from "react-loader-spinner";
import schedule from "../assets/shed.svg";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Schedule } from "./Home/Schedule";
import { Tshirt } from "./Home/Tshirt3d";
import notepad from "../assets/notepad.png"
import stickers from "../assets/stickers.png"
// import swags from "../assets/stickers.png"
import swags from '../assets/sghwags.png';

function About(props) {



    return (
        <div className="w-full bg-purpleC    text-white lg:px-20 px-4 py-10">
            <div className="flex w-full flex-col lg:flex-row  justify-around h-full  bg-gradient-to-r from-purpleC to-purpleC2 shadow-lg">
                <div

                    className=" text-left flex flex-col items-start h-full  w-full lg:w-1/2 p-10 rounded-xl"
                >
                    <h7 className="font-bold text-5xl mb-2">About Us</h7>
                    <p className="text-justify">
                        Latency aims at providing a platform for technical enthusiastic
                        students to hone their problem solving abilities. The event tries to
                        underline and emphasize on the importance of cultivating skills that
                        would help students come up with creative solutions to tackle real
                        world problems. It also presents a stage for coding and cyber
                        security frenetics to test themselves against students from all over
                        the country.
                    </p>
                </div>
                <div

                    id={"3d"}
                    className="relative bg-gradient-to-r text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full lg:w-1/2 min-h-full rounded-xl"
                >
                    <Tshirt />

                </div>
            </div>








        </div>
    );
}

export default About;
