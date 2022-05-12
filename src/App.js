import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Registration from './Components/Registration';
import RegistrationForm from './Components/RegistrationForm';
import RegistrationPayment from './Components/RegistrationPayment';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrivacyPolicy from './Components/pp';
import PrivacyPolicy2 from './Components/terms';
function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="App max-w-screen flex flex-col  w-screen min-h-screen">
			<div className="back_ground_image">
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/*<Route path="/Support" element={<Support />} />*/}
						{/*<Route path="/About" element={<About />} />*/}
						{/*<Route path="/registration" element={<Registration />} />*/}
						{/*<Route path="/registration/:registrationStatus" element={<RegistrationForm />} />*/}
						{/*<Route path="/registration/registration_payment" element={<RegistrationPayment />} />*/}
						{/*<Route path="/privacy-policy" element={<PrivacyPolicy />} />*/}
						{/*<Route path="/terms-conditions" element={<PrivacyPolicy2 />} />*/}
						{/* <Route index element={<Home />} /> */}
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
