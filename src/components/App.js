import React, { Component } from 'react';

import Numpad from './Numpad';
import Modpad from './Modpad';
export default class App extends Component {
    state = { counter: 0, num: 0 };

    Num(val){
        this.setState(
            {num:  val}
        );
    }

    Calc(mod){
        if(mod === '+'){
            this.setState( (prevState) => (
                {counter: prevState.counter + this.state.num}
            ))
        }
        if(mod === '-'){
            this.setState( (prevState) => (
                {counter: prevState.counter - this.state.num}
            ))
        }
        if(mod === '*'){
            this.setState( (prevState) => (
                {counter: prevState.counter * this.state.num}
            ))
        }
        if(mod === '/'){
            this.setState( (prevState) => (
                {counter: prevState.counter / this.state.num}
            ))
        }
    }
    render() {
        return (
            <div>
                <h1 >Calculator React App</h1>
                <Numpad onClickFunction={this.Num.bind(this)} />
                <Modpad onClickFunction={this.Calc.bind(this)} />
                <h1>{this.state.counter}</h1>
            </div>
        );
    }
}

