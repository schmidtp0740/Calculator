import React, { Component } from 'react';

import NumButton from './NumButton';

export default class Numpad extends Component {


    render() {
        return (
            <div>
                <NumButton value={1} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={2} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={3} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={4} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={5} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={6} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={7} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={8} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={9} onClickFunction={this.props.onClickFunction}/>
                <NumButton value={0} onClickFunction={this.props.onClickFunction}/>

            </div>
            
        );
    }
}