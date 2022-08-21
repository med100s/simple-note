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

        
        
        ctx.canvas.width = window.innerWidth+300;
        ctx.canvas.height = window.innerHeight +300;

        function drawCircle() {
            ctx.beginPath();
            ctx.arc(window.mouseX, window.mouseY, 30, 0, 2 * Math.PI);
            ctx.fillStyle = "#c7c7c7";
            ctx.fill();
        }
        function getCursorPosition(event) {
            window.mouseX = event.clientX
            window.mouseY = event.clientY
        }
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function drawParticle(frame) {

            let color = getRandomColor()

            // var grad = ctx.createRadialGradient(105, 55, 50, 105, 55, 0);
            // grad.addColorStop(0, "transparent");
            // grad.addColorStop(0.33, color);	// extra point to control "fall-off"
            // grad.addColorStop(1, "black");

            // ctx.fillStyle = grad;
            // ctx.filter = "blur(10px)";
            // ctx.fillRect(0, 0, 300, 150);

            ctx.shadowBlur = 40;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            let size = 15
            let start = 0
            let x = window.mouseX
            let y = window.mouseY
            let x1 = 0
            let y1 = 0

            let x2 = 1
            let y2 = 1
            return function () {
                ctx.beginPath();
                try {
                    ctx.arc(x + x1, y + y1, size, 0, 2 * Math.PI);
                } catch (err) { }
                ctx.fill();
                x1 += x2
                y1 += y2
                frame += 3
                size -= 0.1
                if (frame % 300 == 0) {
                    frame = 0
                    size = 15
                    x = window.mouseX
                    y = window.mouseY
                    x1 = 0
                    y1 = 0
                    x2 = (Math.floor(Math.random() * 7) - 3) / 2
                    y2 = (Math.floor(Math.random() * 7) - 3) / 2
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
            // drawCircle();
            frame++;
        }, 5);

    }, [])

    return (
        <div>
            <canvas id="canvas"
                ref={canvasRef}>
            </canvas> 
        </div>
    );
}
