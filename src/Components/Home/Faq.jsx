import Loader from "react-loader-spinner";
const faqs=[
    {
        ques: "Is the registration for Latency 2.0 free?",
        ans: "Yes. We believe hackers should not be paid for implementing their skills.",
    },
    {
        ques: "What is the maximum and minimum team size?",
        ans: "Minimum of 2 members and maximum of 4 members for each team.",
    },
    {
        ques: "What is the theme of the hackathon?",
        ans: "It’s an open hackathon where you can bring your ideas into reality.",
    },
    {
        ques: "Do we receive any freebies?",
        ans: "Of course. There are amazing swags and goodies awaiting for you.",
    },
    {
        ques: "What if we stuck with the project while doing?",
        ans: "Don’t worry. We have an amazing team of mentors for you to help you out with your ideas as well as a zestful volunteers to help you in all kinds of requirements. ",
    },
    {
        ques: "Is it necessary that everyone in the team require coding skills?",
        ans: "Hackathon is a great platform to learn and network. There is a lot more importance in framing an idea and working on it.",
    },
]

export function Faq() {
    return(
        <div

            className="text-white bg-purpleC4 py-5 w-full mt-10 rounded-xl flex md:p-8 p-4 flex-col items-start"
        >
            <h7 className="font-bold text-5xl mb-5 ">Have Questions?</h7>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:gap-4">
                {faqs && faqs.length ? (
                    faqs.map((item, key) => {
                        return (
                            <div key={key} className="flex flex-col lg:px-5 my-4">
                                <h7 className="font-semibold text-2xl  mb-2">
                                    # {item.ques}
                                </h7>
                                <p className="">{item.ans}</p>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex justify-center w-full items-center">
                        <Loader type="BarLoader" color="#fff" height={100} width={100}/>
                    </div>
                )}

            </div>
        </div>
    )
}