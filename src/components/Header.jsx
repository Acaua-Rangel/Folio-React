import { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
                <header className="cabecalho">
                    <Link className="logo" to="/">
                        <img height={60} src="/Acauã - Icon.svg" alt="Logo" />
                    </Link>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><Link className={page === "Home" ? "active" : ""} to="/">Home</Link></li>
                            <li><Link className={page === "Curriculum" ? "active" : ""} to="/curriculum">Curriculum</Link></li>
                            <li><Link className={page === "Contact" ? "active" : ""} to="/contact">Contact</Link></li>
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
