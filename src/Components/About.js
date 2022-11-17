import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import register from "../assets/users.png";
import discord from "../assets/cloud.png";
import hack from "../assets/hack.png";
import pitch from "../assets/pitch.png";
import {get_blogs, get_faqs} from "../apis/blogs_api";
import Loader from "react-loader-spinner";
import schedule from "../assets/shed.svg";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About(props) {
    //
    const [faqs, setfaqs] = useState([
        {
            ques: "Is the registration for Latency 2.0 free?",
            ans: "Yes. We believe hackers should not be paid for implementing their skills.",
        },
        {
            ques: "What is the maximum and minimum team size?",
            ans: "Minimum of 2 members and maximum of 4 members for each team.",
        },
        {
            ques: "What is the theme of the hacakthon?",
            ans: "It’s an open hackathon where you can bring your ideas into reality.",
        },
        {
            ques: "Do we receive any freebies?",
            ans: "Ofcourse. There are amazing swags and goodies awaiting for you.",
        },
        {
            ques: "What if we stuck with the project while doing?",
            ans: "OfDon’t worry. We have an amazing team of mentors for you to help you out with your ideas as well as a zestful volunteers to help you in all kinds of requirements. ",
        },
        {
            ques: "Is it necessary that everyone in the team require coding skills?",
            ans: "Hackathon is a great platform to learn and network. There is a lot more importance in framing an idea and working on it.",
        },
    ]);
    useEffect(() => {
        let isSubscribed = true;

        async function get_blogs_() {
            let data = {status: 0, data: []};

            let faq = await get_faqs();

            setfaqs(faq.data?.results);

            if (data.status === 200) {
                // let rand = Math.floor(Math.random() * data.data.length);
                // setBlog1(data.data[rand]);
                // setBlog2(data.data[(rand + 1) % data.data.length]);
            }
        }

        if (isSubscribed) get_blogs_();
        return () => (isSubscribed = false);
    }, []);
    const schedule = [{
        date: "20th Nov 2022",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clipRule="evenodd"/>
            <path
                d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
        </svg>,
        title: "Abstract Submission",
        desc: "Submit your Abstract through Devfolio portal"
    },
        {
            date: "30th Nov 2022",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clipRule="evenodd" />
            </svg>
            ,
            title: "Abstract Submission End Date",
            desc: "Final day for abstract submission"
        },
        {
            date: "9th Dec 2022",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>

            ,
            title: "Check-in for Participants",
            desc: "Selected students can participate in the offline hackathon at TKM College of Engineering"
        },

        {
            date: "11th Dec 2022",
            icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
            </svg>


            ,
            title: "Hackathon Ends",
            desc: "Final day of the hackathon."
        },
    ]
    const days = [
        {title: "Abstract Submission", image: register},
        {title: "Join us at TKM", image: discord},
        {title: "Hacking!!", image: hack},
        {title: "Pitching", image: pitch},
    ];
    return (
        <div className="w-full bg-purpleC    text-white lg:px-20 px-4 py-10">
            <div className="flex w-full flex-col lg:flex-row items-center justify-around">
                <div
                    data-aos="fade-up"
                    aos-delay="4000"
                    className="bg-gradient-to-r my-8 text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full lg:w-5/12 p-10 rounded-xl"
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
                    data-aos="fade-up"
                    aos-delay="4000"
                    className="bg-gradient-to-r text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full lg:w-5/12 p-10 rounded-xl"
                >
                    <h7 className="font-bold text-5xl mb-2">Our Vision</h7>
                    <p className="text-justify">
                        The goal of Latency is to give technically-inclined students a place to practise and perfect
                        their problem-solving skills.
                        This event is an effort to highlight and underscore the significance of developing abilities
                        that will enable students to generate original answers to real-world challenges.
                    </p>
                </div>
            </div>

            <div
                className="my-10 bg-gradient-to-r  text-left  sm:flex-row grid grid-cols-2 lg:grid-cols-4 from-purpleC3 to-purpleC4    shadow-lg w-full  py-6 rounded-xl ">
                {days.map((day, ind) => {
                    return (
                        <div
                            data-aos={`fade-up" aos-delay= ${ind}000`}
                            key={ind}
                            className="flex    my-10 sm:mb-0 flex-col items-center "
                        >
                            <div className="h-28  w-28 hover:bg-black rounded-full mb-2 border-white border-2 text-xs">
                                <img src={day.image} alt="pic" className="  p-8   h-full"/>
                            </div>
                            <h7 className=" text-lg py-2 text-center">{` ${day.title}`}</h7>
                        </div>
                    );
                })}
            </div>

            {/* blog */}

            <div
                data-aos="fade-up"
                className="relative backgroundtt flex justify-center items-center  w-full mt-10 rounded-xl flex flex-col items-start"
            >
                <div className="absolute w-full h-full rounded-xl opacity-70 pyro "/>
                <h1 className="text-white  text-center text-3xl z-50 p-8">
                    <b className=" font-bolder ">Stay Tuned for the Pre-Event!!!</b>{" "}
                    {/* <a
            className="bg-gray-50 text-black hover:bg-black hover:text-white text-xl p-1 m-1 rounded-md"
            href="https://www.hestiatkmce.live/"
            target={"_blank"}
          >
            LIVE
          </a> */}
                </h1>
            </div>

            <div
                data-aos="fade-up"
                className="relative  flex justify-center items-center  w-full mt-10 rounded-xl flex flex-col items-start"
            >
                <h7 className="font-bold text-5xl my-2 py-2">Schedule</h7>
                <VerticalTimeline>
                    {schedule.map((e) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work "
                            contentStyle={{
                                backgroundColor: '#2B2B2B',
                                backgroundImage: `url("./assets/tt.png")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                boxShadow: "box-shadow: 10px 5px 5px black;",

                            }}
                            contentArrowStyle={{borderRight: '7px solid  yellow'}}
                            date={e.date}
                            iconStyle={{background: '#2B2B2B', color: '#fff'}}
                            icon={e.icon

                            }
                        >
                            <h3 className="font-sans font-bold">{e.title}</h3>
                            <p> {e.desc}</p>

                        </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>

            </div>

            <div
                data-aos="fade-up"
                className="bg-purpleC4 py-5 w-full mt-10 rounded-xl flex p-8 flex-col items-start"
            >
                <h7 className="font-bold text-5xl mb-5 ">Have Questions?</h7>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {faqs && faqs.length ? (
                        faqs.map((item, key) => {
                            return (
                                <div key={key} className="flex flex-col lg:px-5 my-4">
                                    <h7 className="font-semibold text-2xl  mb-2">
                                        # {item.ques}
                                    </h7>
                                    <p className="">{item.ans}</p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex justify-center w-full items-center">
                            <Loader type="BarLoader" color="#fff" height={100} width={100}/>
                        </div>
                    )}
                    {/* Card */}

                    {/* /Card */}
                </div>
            </div>
        </div>
    );
}

export default About;
