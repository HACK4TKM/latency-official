import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get_sponsors } from '../apis/blogs_api';
import HomeSvg from '../Svgs/HomeSvg';
import About from './About';
import Footer from './Footer';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function Home(props) {
	const [ sponsors, setsponsors ] = useState([]);
	useEffect(() => {
		let isSubscribed = true;
		async function get_spnrsrs_() {
			let spnsr = await get_sponsors();
			setsponsors(spnsr.data?.results);

		}
		if (isSubscribed) get_spnrsrs_();
		return () => (isSubscribed = false);
	}, []);
	return (
		<div className="backgroundsv">
			{/* <HomeSvg className="z-0 fixed top-0  h-full" /> */}
			<div
				data-aos="fade-up"
				aos-delay="4000"
				className="z-1 C h-screen absolute top-20 w-screen flex flex-col items-center  "
			>
				<div className="w-4/5 mb-10 flex flex-col items-center ">
					{/*<h1 className="text-6xl mb-5 text-white opacity-50">☵ ☵ ☰</h1>*/}
					<p className="text-center text-white hidden lg:block">
						<i>"If you haven't found it, keep looking." - Steve Jobs.</i> <br />This is it TKM, we're your
						ride to tech town. Here's where the right brained meet their long lost lefties. Join us at
						Hestia & let's hack it out!
					</p>
				</div>
				<div className="flex mb-10 bg-black bg-opacity-20 shadow-lg rounded-xl w-2/3 px-8 py-4 flex-col items-center">
					<h2 className="text-2xl lg:text-6xl text-center text-white font-bold">HESTIA</h2>
					<h3 className="lg:text-9xl md:text-6xl  text-6xl text-transparent bg-clip-text bg-gradient-to-br font-semibold from-blueC via-red-500 to-pinkC p-2">
						Latency
					</h3>
				</div>

				<a
					href={"https://www.hestiatkmce.live/events/T/latency"}
					className="hover:bg-gradient-to-br hover:from-blueC hover:via-pinkC3 hover:to-pinkC2 bg-gradient-to-br from-blueC via-red-500 to-pinkC border-blue-900 border-2 p-0.5 rounded-3xl"
				>
					<div className="bg-purpleC p-1 rounded-3xl px-10">
						<p className="text-white text-2xl font-semibold">Register Now</p>
					</div>
				</a>

				<div className="mt-10 w-2/3 flex flex-col items-center my-16">
					<h4 className="text-white">Event Partners</h4>
					<div className=" mt-1  rounded-lg w-full lg:w-3/4 p-4 flex justify-center items-center bg-transparent">
						<div className="grid grid-cols-3 lg:grid-cols-3">
							{sponsors && sponsors.length ? (
								sponsors.map((item) => {
									return (
										<div>
											<div className=" bg-gray-200  hover:bg-purpleC rounded-full p-1 m-4">
												<a target="_blank" href={item.link} rel="noreferrer">
													<img
														src={item.logo}
														alt="logo"
														className="w-16 rounded-full"
													/>
												</a>
											</div>
											<p className="text-center text-white text-xs">{item.name}</p>
										</div>
									);
								})
							) : (
								<div className="flex  justify-center w0 items-center">
									<div className={""}>
										<Loader type="BarLoader" color="#fff" height={100} width={100} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<About />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
