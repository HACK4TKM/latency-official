import {TypeAnimation} from "react-type-animation";

export function AnimatedBanner({title}) {



    return(
        <div

            className="relative   flex justify-center items-center  w-full mt-10 rounded-xl flex flex-col items-start"
        >
            <div className="absolute w-full h-full rounded-xl opacity-70 pyro "/>
            <h1 className="text-white  text-center text-3xl z-50 p-8">
                <b className=" font-bolder text-xs  ">{title}</b>

                {/*<h1 className={"py-2 text-7xl cursor"} ><span className="typed-text"></span>Hi</h1>*/}
                <TypeAnimation
                    sequence={[
                        '#  I am become Death', // Types 'One'
                        2000, // Waits 1s
                        '#  The destroyer of worlds', // Deletes 'One' and types 'Two'
                        4000, // Waits 2s
                        '* There you go again, Mr. Quotable.', // Types 'Three' without deleting 'Two'
                        5000,
                        '# It\'s what Oppenheimer said after he made',
                        6000,
                        '*  THE ATOMIC BOMB?',
                        8000,
                        '* C\'mon buddy. After a long day of Turing tests you gotta unwind.',
                        8000
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em' }}
                />
            </h1>
        </div>

    )
}