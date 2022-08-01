import React, { Component } from 'react';
import './App.css';

import Equalized from './soundWIthEqualizer';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="soundbar">

                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" />
                    <Equalized src="sounds/170247__matucha__campfire-01.wav" />
                    <Equalized src="sounds/405561__inspectorj__wind-realistic-a.wav" />

                    <Equalized src="sounds/584595__tosha73__mountain-river.wav" />

                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" />

                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" />


                </div>

            </div>
        );
    }
}

export default App;
