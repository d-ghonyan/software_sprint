import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch
} from "react-router-dom";
import Home from "./pages/Index";
import SigninPage from "./pages/SignInPage";
import EventsPage from "./pages/Event";
import FaqPage from "./pages/faqpage";
import RegisterPage from "./pages/RegiserPage./RegisterPage";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='signin' element={<SigninPage />}></Route>
				<Route path='events' element={< EventsPage />}></Route>
				<Route path="signup" element={<RegisterPage />}> </Route>
				<Route path="login" element={<SigninPage />} >    </Route>
				<Route path="faq" element={<FaqPage />} >    </Route>
				<Route  path="*" element={<Home />} />
      	</Routes>		
		</Router>
	);
}
