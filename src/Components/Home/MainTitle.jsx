export function MainTitle({ title, version }) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-neon lg:text-9xl   text-7xl text-transparent bg-clip-text bg-gradient-to-br font-semibold from-blue-500 via-green-500 to-white  ">
                {title}<b className={"text-xl my-16"}>{version}</b>
            </p>

        </div>
    )
}