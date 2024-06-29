import React, { Component } from "react";
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
                <header className="cabecalho">
                    <a className="logo" href="/">
                        <img height={60} src="/Acauã - Icon.svg" alt="Logo" />
                    </a>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a className={page === "Home" ? "active" : ""} href="/">Home</a></li>
                            <li><a className={page === "Curriculum" ? "active" : ""} href="/curriculum">Curriculum</a></li>
                            <li><a className={page === "Contact" ? "active" : ""} href="/contact">Contact</a></li>
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
