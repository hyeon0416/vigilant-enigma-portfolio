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
                        안녕하세요. 저는 웹 개발자 현승환 이라고 합니다.
                    </p>
                    <p className="comment">
                        저는 혼자 개발을 하고 비전공자 이기에 개발 용어나 CS 지식쪽은 많이 부족합니다.<br/>
                        하지만 누구보다도 문제해결능력에 있어서 뒤떨어지지 않는다고 자부합니다.<br/>
                        혼자 개발을 할수는 있지만 이제부터는 협업을 통해서 개발을 배우고 싶습니다.<br/>
                    </p>
                    <p className="comment">
                        오른쪽에 있는 그래프는 제가 생각하고 있는 저의 스킬에 대해서 수치로 표현해보았습니다.<br/>
                        가장 잘한다고 생각하는건 CSS입니다.<br/>
                        간단한 애니메이션 효과나 기본적인 레이아웃 세팅은 어느정도 할수있습니다.<br/>
                        가장 부족하다고 생각하는것은 html 입니다.<br/>
                        왜냐하면 모든 html 태그를 알지 못하고 몇몇 태그들은 사용해본적 없는것도 있기 때문입니다.<br/>
                        저는 웹서버를 구축하고 배포 할수있고 제가 원하는 사이트를 제작 할수있습니다.<br/>
                        해본적 없는 웹 사이트들도 시간만 충분 하다면 제작 할수있다고 생각 합니다.<br/>
                        저와 같이 일하시고 싶으시다면 이메일을 남겨주세요.<br/>
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