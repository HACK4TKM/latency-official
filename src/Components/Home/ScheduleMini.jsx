import register from "../../assets/users.png";
import discord from "../../assets/cloud.png";
import hack from "../../assets/hack.png";
import pitch from "../../assets/pitch.png";

const days = [
    {title: "Abstract Submission", image: register},
    {title: "Join us at TKM", image: discord},
    {title: "Hacking!!", image: hack},
    {title: "Pitching", image: pitch},
];

export function ScheduleMini() {
    return (
        <div
            className="text-white my-10 bg-gradient-to-r  text-left  sm:flex-row grid grid-cols-2 lg:grid-cols-4 from-purpleC3 to-purpleC4    shadow-lg w-full  py-6 rounded-xl ">
            {days.map((day, ind) => {
                return (
                    <div

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
    )
}