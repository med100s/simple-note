/*eslint-disable*/

import React, { useRef, useEffect, useState } from 'react';
import './canvas.css'

export default function BackgroundCanvas() {

    const canvasRef = useRef(null)



    useEffect(() => {
        window.addEventListener('mousemove', function (e) {
            getCursorPosition(e)
        })

        let canvas = canvasRef.current


        let ctx = canvas.getContext('2d');

        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.fillStyle = 'red';
        ctx.fillRect(50, 50, 10, 10);


        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 200);
        ctx.stroke();

        function drawCircle() {
            ctx.beginPath();
            console.log()
            ctx.arc(window.mouseX, window.mouseY, 10, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
        }
        function getCursorPosition(event) {
            window.mouseX = event.clientX
            window.mouseY = event.clientY
        }
        function drawParticle(x) {

        }
        var x = 0;
        setInterval(function () {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            drawCircle();
            // drawParticle() 
            x++;
        }, 5);

    }, [])

    return (
        <div>
            <canvas id="canvas"
                ref={canvasRef}>
            </canvas>
            <h6>asdasds</h6>
        </div>
    );
}
