import React, { Component } from "react";
class Left extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={this.props.className}>
                <p>Left</p>
            </div>
        )
    }
}
export default Left