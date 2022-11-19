import tshirt from "../../assets/thsirt.png";
import notepad from "../../assets/notepad.png"
import stickers from "../../assets/stickers.png"
import music from "../../assets/music.png"
export function Tshirt() {

    return(
       <div className={"relative w-full h-full"}>


           <div className="container absolute z-20">
               <h2 className="title font-neon md:text-3xl text-2xl">
                   <span className="title-word title-word-1">#</span>
                   <span className="title-word title-word-2">Latency</span>
                   <span className="title-word title-word-3">Swags</span>
                   <span className="title-word title-word-4">!</span>
               </h2>
           </div>

            <div className={"absolute h-full top-0 right-0 lg:w-48 w-16"}>
                <img src={notepad} alt={"notepad"} className={"  w-48 z-10"}  />
            </div>
           <div className={"absolute  bottom-0 left-0 lg:w-64 w-48"}>
               <img src={stickers} alt={"stickers"} className={" z-10"}  />
           </div>
           <div className={"absolute  bottom-0 right-0 lg:w-64 w-48 filter invert transform "}>
               <img src={music} alt={"music"} className={" z-10"}  />
           </div>
           <img src={tshirt} alt={"thsirt"}  />
       </div>
    )
}