import Countdown from "react-countdown";


const renderer = ({total, hours, minutes, seconds}) => {
    minutes = String(minutes).length === 1 ? `0${String(minutes)}` : String(minutes);
    seconds = String(seconds).length === 1 ? `0${String(seconds)}` : String(seconds);
    if (total) {
        return (
            <span>
                <b className={"bg-gray-900 p-2 rounded-lg"}>{hours}</b>:<b
                className={"bg-gray-900 p-2 rounded-lg"}>{minutes}</b>:<b
                className={"bg-green-400 p-2 rounded-lg"}>{seconds}</b>
      </span>
        );
    } else {
        // Render a finished state
        return <p>Register Now!</p>;
    }
}

export function FloatingBar() {
    return (
        <div className={"absolute z-40 m-2 w-screen  flex-col md:flex-row flex justify-between"}>
            <div className="   ">
                <div className="  bg-opacity-40  rounded-md p-2 w-full">
                    <p className=" md:text-xl text-xs text-white font-mono  text-center uppercase">
                        <Countdown renderer={renderer} date={new Date("2022-11-21")}/>
                    </p>

                    <br/>
                    <div className={"flex justify-center items-center w-full rounded-xl"}>
                    <div className={"my-2 bg-purpleC w-48 "}>
                        <div
                            className="apply-button "
                            data-hackathon-slug="latency-2.0"
                            data-button-theme="light"
                            style={{height: '44px'}}
                        >
                            <p></p></div>
                    </div>
                    </div>
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
                            <div className="mx-4">
              <span className="mx-4 font-semibold text-white  text-sm px-2">
                Rules & guidelines
              </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}