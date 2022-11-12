import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import register from "../assets/users.png";
import discord from "../assets/cloud.png";
import hack from "../assets/hack.png";
import pitch from "../assets/pitch.png";
import { get_blogs, get_faqs } from "../apis/blogs_api";
import Loader from "react-loader-spinner";
import schedule from "../assets/shed.svg";
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
      let data = { status: 0, data: [] };

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

  const days = [
    { title: "Abstract Submission", image: register },
    { title: "Join us at TKM", image: discord },
    { title: "Hacking!!", image: hack },
    { title: "Pitching", image: pitch },
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
          <h7 className="font-bold text-5xl mb-2">Our Sponsor</h7>
          <p className="text-justify">
            Micro.company is a venture started by Shyjal Raazi and Aslam Abbas.
            Both are TKM alumni of 2014. We empower businesses with tools to
            build strong customer relationships and drives growth. Our zero code
            SaaS products are tailor made for the SME market. We promote a
            remote working culture and continues to solve niche market problems
            with a narrow focus and no outside funding.
          </p>
        </div>
      </div>

      <div className="my-10 bg-gradient-to-r  text-left  sm:flex-row grid grid-cols-2 lg:grid-cols-4 from-purpleC3 to-purpleC4    shadow-lg w-full  py-6 rounded-xl ">
        {days.map((day, ind) => {
          return (
            <div
              data-aos={`fade-up" aos-delay= ${ind}000`}
              key={ind}
              className="flex    my-10 sm:mb-0 flex-col items-center "
            >
              <div className="h-28  w-28 hover:bg-black rounded-full mb-2 border-white border-2 text-xs">
                <img src={day.image} alt="pic" className="  p-8   h-full" />
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
        <div className="absolute w-full h-full rounded-xl opacity-70 pyro " />
        <h1 className="text-white  text-center text-3xl z-50 p-8">
          <b className="font-mono font-bolder ">Stay Tuned!!!</b>{" "}
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
        <img src={schedule} className={"rounded-xl"} />
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
              <Loader type="BarLoader" color="#fff" height={100} width={100} />
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
