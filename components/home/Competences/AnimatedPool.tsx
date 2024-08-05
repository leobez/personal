'use client'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const elements1 = [
    {
        icon: <FaHtml5 size={50}/>,
        x: 1,
        y: 1
    }
]

const elements = [
    <FaHtml5 size={50}/>,
/*     <FaCss3Alt size={50}/>,
    <IoLogoJavascript size={50}/>,
    <FaReact size={50}/>,
    <RiTailwindCssLine size={50}/>,
    <FaNodeJs size={50}/>,
    <RiNextjsLine size={50}/>,
    <SiExpress size={50}/>,
    <SiMysql size={50}/>,
    <TbBrandMongodb size={50}/>,
    <FaGithub size={50}/>, */
]

export default function AnimatedPool() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return;

        const canvas:HTMLCanvasElement|null = document.querySelector('canvas#canvas')
        if (!canvas) return;

        const ctx:CanvasRenderingContext2D|null = canvas.getContext('2d')
        if (!ctx) return;

        class Field {

            public width:number
            public height:number
            public ctx:CanvasRenderingContext2D
            public icons:Icon[] = []

            constructor(ctx:CanvasRenderingContext2D, width:number, height:number) {
                this.width = width
                this.height = height
                this.ctx = ctx
                this.icons.push(
                        new Icon(this, 50, 100, 'black', -1, 1), 
                        new Icon(this, 200, 10, 'red', 1, -1),
                        new Icon(this, 150, 150, 'blue', 1, 1),
                        new Icon(this, 200, 200, 'green', -1, -1),
                        new Icon(this, 250, 250, 'yellow', 1, 1),
                        new Icon(this, 300, 300, 'purple', -1, -1), 
                        new Icon(this, 350, 350, 'pink', 1, 1),
                        new Icon(this, 400, 400, 'brown', -1, -1),
                        new Icon(this, 450, 450, 'grey', -1, 1),
                        new Icon(this, 500, 500, 'orange', 1, -1),
                        new Icon(this, 450, 550, 'white', 1, 1), 
                    )
            }

            private resolveStuck(sq1:Icon, sq2:Icon) {
                let overlapX = (sq1.x < sq2.x) ? (sq1.x + sq1.width - sq2.x) : (sq2.x + sq2.width - sq1.x);
                let overlapY = (sq1.y < sq2.y) ? (sq1.y + sq1.width - sq2.y) : (sq2.y + sq2.width - sq1.y);
            
                // Mover os quadrados de volta pela metade do deslocamento
                if (overlapX < overlapY) {
                    sq1.x -= overlapX / 2;
                    sq2.x += overlapX / 2;
                } else {
                    sq1.y -= overlapY / 2;
                    sq2.y += overlapY / 2;
                }
            }

            private checkColision() {
                for (let a=0; a<this.icons.length; a++) {
                    for (let b=a+1; b<this.icons.length; b++) {
                        if (this.icons[a].x < this.icons[b].x + this.icons[b].width &&
                            this.icons[a].x + this.icons[a].width > this.icons[b].x &&
                            this.icons[a].y < this.icons[b].y + this.icons[b].width &&
                            this.icons[a].y + this.icons[a].width > this.icons[b].y
                        ) {
                            this.resolveStuck(this.icons[a], this.icons[b])
                            this.icons[a].dx*=-1
                            this.icons[b].dx*=-1
                            this.icons[a].dy*=-1
                            this.icons[b].dy*=-1
                        }
                    }
                }
            }

            private draw() {
                this.checkColision()
                this.icons.forEach(icon => icon.update())
            }

            public animate() {
                this.ctx.clearRect(0,0,this.width,this.height)
                this.draw()
                requestAnimationFrame(this.animate.bind(this))
            }
        }

        class Icon {

            private field:Field
            public width:number
            public height:number
            public x:number  
            public y:number
            public dx:number  
            public dy:number
            private v:number
            private color:string

            constructor(field:Field, x:number, y:number, color:string, dx:number, dy:number) {

                this.field = field
                this.width = 70
                this.height = 70
                this.x = x
                this.y = y
                this.dx = dx
                this.dy = dy
                this.v = 0.8
                this.color = color
            }

            private isHittingWalls() {

                if (this.x >= (this.field.width - this.width) || this.x <= 1) {
                    this.dx*=-1
                }

                if (this.y >= (this.field.height - this.height) || this.y <= 1) {
                    this.dy*=-1
                }

            }

            public update() {
                this.x += this.v * this.dx 
                this.y += this.v * this.dy
                this.isHittingWalls()
                this.draw(this.field.ctx)
            }

            public draw(ctx:CanvasRenderingContext2D) {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
                /* ctx.fillText(`${this.x},${this.y}`, this.x+15, this.y+20, this.width*2) */
            }

        }

        canvas.width = 600
        canvas.height = 700

        const field = new Field(ctx, 600, 700)

        field.animate()

    }, [mounted])

    if (!mounted) return;

    return (

        <div>
            <canvas className="relative overflow-hidden shadow-lg rounded-lg border-4 border-[#000]" id="canvas">
{/*                 {elements1.map((element:any, index:number) => (
                    <>
                        {element.icon}
                    </>
                ))} */}
            </canvas>
        </div>

    )


}