

export function Sponsors({ sponsors }) {
    return (
        <div className={`my-4 grid grid-cols-1 justify-center  lg:grid-cols-${sponsors.length >= 3 ? '3' : `${sponsors.length}`} `}>
            {sponsors && sponsors.length &&
                sponsors.map((item) =>
                (

                    <div className="m-4 flex items-center justify-center">
                        <a target="_blank" href={item.link} rel="noreferrer">
                            <img
                                src={item.logo}
                                alt="logo"
                                className=" hover:opacity-80"
                            />
                        </a>
                    </div>

                ))
            }
        </div>
    )
}