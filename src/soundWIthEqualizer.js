/*eslint-disable*/

import React, { Component, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Range } from 'react-range';


class Equalized extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.myRef = React.createRef();
        this.src = props.src
        this.title = props.title
    }


    state = {
        values1: [50],
        values2: [50],
        values3: [50],
        values4: [50],
        values5: [50],
        values6: [50],
        values7: [50],
        values8: [50],
    };
    componentDidMount() {
        setTimeout(()=>{
            this.audio = this.audioRef.current
            this.audio.crossOrigin = "anonymous";
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            this.context.resume()
            this.source = this.context.createMediaElementSource(this.audio);
             
            this.analyser = this.context.createAnalyser();
            this.source.connect(this.analyser);
            this.analyser.connect(this.context.destination);
             
            this.handleChange()
        },2000)
        
    }
    // handleClick =()=>{
 
    //     this.audio = this.audioRef.current
    //     this.audio.crossOrigin = "anonymous";
    //     this.context = new (window.AudioContext || window.webkitAudioContext)();
    //     this.context.resume()
    //     this.source = this.context.createMediaElementSource(this.audio);
    //     this.audio.crossOrigin = "anonymous";
    //     this.analyser = this.context.createAnalyser();
    //     this.source.connect(this.analyser);
    //     this.analyser.connect(this.context.destination);
    //     this.audio.crossOrigin = "anonymous";
    //     this.handleChange()
    // }

    handleChange = () => { 
  
        // console.log(this.source)
        if(this.highShelf == undefined){

            this. highShelf = this.context.createBiquadFilter();
            this. lowShelf = this.context.createBiquadFilter();
            this. highPass = this.context.createBiquadFilter();
            this. lowPass = this.context.createBiquadFilter();
    
            console.log('success')
            this.source.connect(this.highShelf)
        }


        // console.log(this.source)

        this.highShelf.connect(this.lowShelf);
        this.lowShelf.connect(this.highPass);
        this.highPass.connect(this.lowPass);
        try{

            this.lowPass.connect(this.context.destination);
            console.log('success')
        }catch(err){console.log('err')}

        this.highShelf.type = "highshelf";
        this.lowShelf.type = "lowshelf";
        this.highPass.type = "highpass";
        this.lowPass.type = "lowpass";


        this.highShelf.frequency.value = Math.ceil(this.state.values1[0] * 94);
        this.highShelf.gain.value = Math.ceil(this.state.values2[0]);

        this.lowShelf.frequency.value = Math.ceil(this.state.values3[0] * 0.7);
        this.lowShelf.gain.value = Math.ceil(this.state.values4[0]);

        this.highPass.frequency.value = Math.ceil(this.state.values5[0] * 16);
        this.highPass.Q.value = this.state.values6[0] * 0.014;

        this.lowPass.frequency.value = Math.ceil(this.state.values7[0] * 17,6);
        this.lowPass.Q.value = this.state.values6[0] * 0.014;
    }
    render() {
        return (
            <div className="wrap_audio">
                {/* <button onClick={()=>this.handleClick()}></button> */}
                <h3>{this.title}</h3>
                <audio
                    crossorigin="anonymous"
                    controls
                    ref={this.audioRef}
                    id={'some_audio'}
                    src={this.src}
                    loop
                >
                </audio>
 
                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values1}
                    onChange={(values1) => { this.setState({ values1 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />

                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values2}
                    onChange={(values2) => { this.setState({ values2 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />
                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values3}
                    onChange={(values3) => { this.setState({ values3 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />
                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values4}
                    onChange={(values4) => { this.setState({ values4 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />
                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values5}
                    onChange={(values5) => { this.setState({ values5 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />
                {/* <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values6}
                    onChange={(values6) => { this.setState({ values6 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                /> */}
                <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values7}
                    onChange={(values7) => { this.setState({ values7 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                />
                {/* <Range
                    className="range_filter"
                    step={0.1}
                    min={0}
                    max={100}
                    values={this.state.values8}
                    onChange={(values8) => { this.setState({ values8 }); this.handleChange() }}


                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                margin: '10px auto',
                                height: '6px',
                                width: '300px',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '12px',
                                width: '12px',
                                backgroundColor: '#900'
                            }}
                        />
                    )}
                /> */}

            </div>
        );
    }

}


export default Equalized;
