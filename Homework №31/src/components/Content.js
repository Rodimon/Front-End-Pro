import React, { Component } from "react";
class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={this.props.className} >
                <p>Content</p>
            </div>
        )
    }
}
export default Content