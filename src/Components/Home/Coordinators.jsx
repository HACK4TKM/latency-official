import logo from "../../assets/logo.png";

export function Coordinators({link,logo}) {
    return (
        <a
            target="_blank"
            href={link}
            rel="noreferrer"
        >
            <img
                src={logo}
                alt="logo"
                className="w-32 mx-auto rounded-full"
            />
        </a>)
}