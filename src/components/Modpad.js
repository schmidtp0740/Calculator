import React, { Component } from 'react';

import ModButton from './ModButton';
class Modpad extends Component {
    state = {  }
    render() {
        return (
            <div>
                <ModButton mod={'+'} onClickFunction={this.props.onClickFunction}/>
                <ModButton mod={'-'} onClickFunction={this.props.onClickFunction}/>
                <ModButton mod={'*'} onClickFunction={this.props.onClickFunction}/>
                <ModButton mod={'/'} onClickFunction={this.props.onClickFunction}/>
            </div>
            
        );
    }
}

export default Modpad;