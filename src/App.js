import React, { Component } from 'react';
import './App.css';

import Equalized from './components/soundWIthEqualizer';
import BackgroundCanvas from './components/backgroundCanvas';
import Footer from './components/footer';

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

                <div className="description">
                    <h1>Simple Sound Space</h1>

                    <h4>
                        <p>On this website you can found different background sounds.</p>
                        <p>They are customazible so if some sound not actually
                            what you need you can change it how you like .</p>
                    </h4>
                    <h5>For sugesstions: simplesoundspace@gmail.com</h5>
                </div>

                <BackgroundCanvas />

                <div className="soundbar">
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" title="rain" volume={0.15} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-campfire-crackles-1330.mp3" title="fire" volume={1} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-sanctuary-or-cathedral-big-bells-602.mp3" title="bell" volume={0.1} />
                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-blizzard-cold-winds-1153.mp3" title="blizzard" volume={0.3} />
                </div>

                <h5>donation:</h5>
                <h5>BTC: 1N7CoaSyyHRazmYZVzxrs3gpcQnyT9uAZ8</h5>
                <h5>ETH ERC20: 0xd6b79229bdb79614746401f1e12c2a41db32f17d</h5>
                <h5>USDT ERC20: 0xd6b79229bdb79614746401f1e12c2a41db32f17d</h5>
                <h5>USDT TRC20: TVYXWqu4q79BTcMEmdyFSAFuVjfQzJ5Sa7</h5>
                <Footer />
            </div>
        );
    }
}

export default App;
