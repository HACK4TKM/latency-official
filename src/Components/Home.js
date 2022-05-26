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
		<div className="backgroundsv  bg-opacity-50">

			<div
				className="absolute right-4 top-4 flex  max-w-sm mx-auto overflow-hidden bg-purpleC rounded-lg shadow-md ">
				<div className="flex items-center justify-center w-8 bg-black ">
					<svg className="w-4 h-4 text-white fill-current" viewBox="0 0 40 40"
						 xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
					</svg>
				</div>

				<div className="px-2 py-1 -mx-3 ">
					<a href={"https://ieeesbtkmce-assets.s3.amazonaws.com/media/events/guidelines/tech.pdf"} target={"_blank"}>
					<div className="mx-2">
						<span className="font-semibold text-blue-600 text-sm px-2">Rules & guidelines</span>
					</div>
					</a>
				</div>
			</div>
			{/* <HomeSvg className="z-0 fixed top-0  h-full" /> */}
			<div
				data-aos="fade-up"
				aos-delay="4000"
				className="z-1 C h-screen absolute top-20 flex flex-col items-center  "
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
					<div className=" bg-gray-200  hover:bg-purpleC rounded-full  m-2">
						<a target="_blank" href={'https://micro.company/'} rel="noreferrer">
							<img
								src={"https://micro.company/assets/images/m.png"}
								alt="logo"
								className="w-12 rounded-full"
							/>
						</a>
					</div>
					<p className="text-center text-white text-sm">{"micro.company Presents"}</p>

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
						<div className="grid grid-cols-2 lg:grid-cols-2">
							{sponsors && sponsors.length ? (
								sponsors.map((item) => {
									return (
										<div>
											<div className=" bg-gray-200  hover:bg-purpleC rounded-full p-1 m-4">
												<a target="_blank" href={item.link} rel="noreferrer">
													<img
														src={item.logo}
														alt="logo"
														className="w-12 rounded-full"
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
