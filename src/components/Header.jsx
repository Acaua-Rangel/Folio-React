import { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const { page } = this.props;

        return (
            <>
                <header className="flex flex-row items-center justify-between w-full px-5 pt-5 bg-white z-1000">
                    <Link to="/">
                        <img className="h-15" src="/Acauã - Icon.svg" alt="Logo" />
                    </Link>
                    <div>
                        <ul id="navbar" className={this.state.clicked && "active"}>
                            <li className="relative px-7.5 list-none">
                                <Link className={page === "Home" && "active"} to="/">Home</Link></li>
                            <li className="relative px-7.5 list-none">
                                <Link className={page === "Curriculum" && "active"} to="/curriculum">Curriculum</Link></li>
                            <li className="relative px-7.5 list-none">
                                <Link className={page === "Contact" && "active"} to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
