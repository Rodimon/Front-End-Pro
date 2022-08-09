import React, { Component } from "react";
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className={this.props.className}>
                <p>Header</p>
            </header>
        )
    }
}
export default Header