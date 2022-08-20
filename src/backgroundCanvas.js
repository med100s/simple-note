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

        function drawCircle() {
            ctx.beginPath();
            ctx.arc(window.mouseX, window.mouseY, 30, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
        }
        function getCursorPosition(event) {
            window.mouseX = event.clientX
            window.mouseY = event.clientY
        }

        function drawParticle(frame, direction = 0) {
            let start = 0
            let x = window.mouseX
            let y = window.mouseY
            let x1 = 0
            let y1 = 0
            return function () {
                ctx.beginPath();
                try {
                      ctx.arc(x + x1, y + y1, 30 - frame / 10, 0, 2 * Math.PI); 
                } catch (err) { }
                ctx.fillStyle = "white";
                ctx.fill();
                x1+=3
                y1+=3
                frame+=3
                if (frame % 300 == 0) {
                    frame = 0
                    direction = 3
                    x = window.mouseX
                    y = window.mouseY
                    x1 = 0
                    y1 = 0
                }
            }
        }
        var frame = 0;
        let particle0 = new drawParticle(0, 0)
        let particle1 = new drawParticle(30, 2)
        let particle2 = new drawParticle(60, 1)
        let particle3 = new drawParticle(90, 3)
        let particle4 = new drawParticle(120, 2)
        let particle5 = new drawParticle(150, 3)
        let particle6 = new drawParticle(180, 1)
        let particle7 = new drawParticle(210, 3)
        let particle8 = new drawParticle(240, 2)
        let particle9 = new drawParticle(270, 2)
        
        let particle00 = new drawParticle(15, 0)
        let particle11 = new drawParticle(45, 2)
        let particle22 = new drawParticle(75, 1)
        let particle33 = new drawParticle(105, 3)
        let particle44 = new drawParticle(135, 2)
        let particle55 = new drawParticle(165, 3)
        let particle66 = new drawParticle(195, 1)
        let particle77 = new drawParticle(225, 3)
        let particle88 = new drawParticle(255, 2)
        let particle99 = new drawParticle(285, 2)
        setInterval(function () {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            particle0()
            particle1()
            particle2()
            particle3()
            particle4()
            particle5()
            particle6()
            particle7()
            particle8()
            particle9()
            particle00()
            particle11()
            particle22()
            particle33()
            particle44()
            particle55()
            particle66()
            particle77()
            particle88()
            particle99()
            drawCircle();
            frame++;
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
