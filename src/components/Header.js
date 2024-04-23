import Search from "./Search";
import { BrowserRouter as Router } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <img width="150px" src="/images/logo.png" />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Router>
                    <Search />
                </Router>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <span id="cart" className="ml-3">
                    Cart
                </span>
                <span className="ml-1" id="cart_count">
                    2
                </span>
            </div>
        </nav>
    );
}
