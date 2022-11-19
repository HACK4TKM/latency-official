

export function Sponsors({sponsors}) {
    return (
        <div className={`my-4 grid grid-cols-1  lg:grid-cols-${sponsors.length>=3?'3':`${sponsors.length}`} `}>
            {sponsors && sponsors.length &&
                sponsors.map((item) =>
                    (
                        <div className="">
                            <div className="     bg-[#191919] m-4">
                                <a target="_blank" href={item.link} rel="noreferrer">
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className=" hover:opacity-80"
                                    />
                                </a>
                            </div>

                        </div>
                    ))
            }
        </div>
    )
}