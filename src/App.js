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

                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" title="rain" volume={0.15} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" volume={1} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-sanctuary-or-cathedral-big-bells-602.mp3" title="bell" volume={0.1} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-blizzard-cold-winds-1153.mp3" title="blizzard" volume={0.3} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" />


                </div>

            </div>
        );
    }
}

export default App;
