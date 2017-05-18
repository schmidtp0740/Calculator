import React, { Component } from 'react';

class ModButton extends Component {
    handleClick(){
        this.props.onClickFunction(this.props.mod);
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.props.mod}</button>
        );
    }
}

export default ModButton;