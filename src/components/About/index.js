import './index.css'
import { useState , useEffect } from 'react'
import TextBox from '../TextBox'

function About(){
    const [ textClass , setTextClass ] = useState('text-animate-start')
    const about = ['A','b','o','u','t',' ','m','e']

    useEffect(()=>{
        setTimeout(()=>{
            setTextClass('text-animate-hover')
        },1800)
    })

    return (
        <>
            <div className="container about">
                <div className="text-box">
                    <h1>
                        <TextBox classNames={textClass} strArr={about} index={1} />
                    </h1>
                    <p className="comment">

                    </p>
                    <p className="comment">

                    </p>
                    <p className="comment">

                    </p>
                </div>
                <div className="skill-box">
                    <div className="skill-js">
                        <h3>JavaScript</h3>
                        <div className="skill-bar">
                            <div className="js-skill"></div>
                        </div>
                    </div>
                    <div className="skill-css">
                        <h3>CSS</h3>
                        <div className="skill-bar">
                            <div className="css-skill"></div>
                        </div>
                    </div>
                    <div className="skill-html">
                        <h3>html</h3>
                        <div className="skill-bar">
                            <div className="html-skill"></div>
                        </div>
                    </div>
                    <div className="skill-nodejs">
                        <h3>Node.js</h3>
                        <div className="skill-bar">
                            <div className="node-skill"></div>
                        </div>
                    </div>
                    <div className="skill-react">
                        <h3>React</h3>
                        <div className="skill-bar">
                            <div className="react-skill"></div>
                        </div>
                    </div>
                    <div className="skill-express">
                        <h3>Express</h3>
                        <div className="skill-bar">
                            <div className="express-skill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About