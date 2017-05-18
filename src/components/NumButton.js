import React, { Component } from 'react';

export default class NumButton extends Component{
    handleClick(){
        this.props.onClickFunction(this.props.value);
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>{this.props.value}</button>        );
    }
}