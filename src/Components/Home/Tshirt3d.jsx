import tshirt from "../../assets/tshirt.png";
import notepad from "../../assets/notepad.png"
import stickers from "../../assets/stickers.png"
import music from "../../assets/music.png"

// import swags from "../assets/stickers.png"
import swags from '../../assets/sghwags.png';
export function Tshirt() {

    return (
        <div className={"w-full h-full"}>


            <div className="container absolute z-20 p-2">
                <h2 className="title font-neon md:text-3xl text-2xl">
                    <span className="title-word title-word-1">#</span>
                    <span className="title-word title-word-2">Latency</span>
                    <span className="title-word title-word-3">Swags</span>
                    <span className="title-word title-word-4">!</span>
                </h2>
            </div>

            {/* <div className={"absolute h-full top-0 right-0 lg:w-48 w-16"}>
                <img src={notepad} alt={"notepad"} className={"  w-48 z-10"} />
            </div> */}
            {/* <div className={"absolute  bottom-0 left-0 lg:w-64 w-48"}>
                <img src={stickers} alt={"stickers"} className={" z-10"} />
            </div> */}
            {/* <div className={"absolute  bottom-0 right-0 lg:w-64 w-48 z-[0]  opacity-[0]"}>
                <img src={music} alt={"music"} className={"opacity-40"} />
            </div> */}
            <div className="absolute flex justify-around  hover:opacity-100 opacity-80 right-0 bottom-0">
                <div
                    className=" swags  w-32 h-32 flex item-end justify-end"
                >
                    <img className=" opacity-0 w-64" src={notepad} alt="shawgs" />

                    <img className="opacity-0" src={stickers} alt="shawgs" />
                    <img className="" src={swags} alt="shawgs" />

                </div>
            </div>
            <img src={tshirt} alt={"thsirt"} className="z-10 h-full object-cover w-full py-10" />
        </div>
    )
}