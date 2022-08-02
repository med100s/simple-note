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

                    <Equalized src="https://assets.mixkit.co/sfx/preview/mixkit-intense-rain-loop-1246.mp3" title="rain" />
                    <Equalized src="sounds/170247__matucha__campfire-01.wav" title="fire" />
                    <Equalized src="sounds/405561__inspectorj__wind-realistic-a.wav" title="wind" />
                    <Equalized src="sounds/584595__tosha73__mountain-river.wav" title="river" />
                    <Equalized src="sounds/133901__audionautics__lava-loop.wav" title="lava" />
                    <Equalized src="sounds/164191__bmoreno__0384-flags.wav" title="flags" />
                    <Equalized src="sounds/173013__ninebilly__market.wav" title="market" />
                    <Equalized src="sounds/178648__zabuhailo__churchbells.flac" title="churchbells" />
                    <Equalized src="sounds/412843__inspectorj__boiling-water-large-a.wav" title="boiling-water" />
                    <Equalized src="sounds/641762__sonotomia__fiumei-graveyard-nature-and-mall-aircon-sonotomia-jozsef-iszlai.wav" title="graveyard" />
                    <Equalized src="sounds/173096__stormpetrel__whistling-antarctic-blizzard.flac" title="blizzard" />
                    <Equalized src="sounds/496305__zaziesound__water-drops-2.wav"title="water-drops" />
                    <Equalized src="sounds/211945__qubodup__the-office.flac" title="office" />
                    <Equalized src="sounds/" />


                </div>

            </div>
        );
    }
}

export default App;
