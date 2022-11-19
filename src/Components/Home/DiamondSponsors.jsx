import diamond from "../../assets/diamond.svg";


export function DiamondSponsors() {
    return (
        <div className=" flex justify-center  hover:bg-purpleC rounded-full  m-2 mx-4">
            <div>

                <div className={"text-center"}>
                    <img src={diamond} alt={"diamond sponsor"} className={"w-52"}/>
                </div>
            </div>
        </div>
    )
}