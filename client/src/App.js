import "./App.scss";
import Navbar from "./shared/layout/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import DashboardPages from "./pages/DashboardPages/DashboardPages";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="app-container">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/dashboard">
							<DashboardPages />
						</Route>
						<Route path="/">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
