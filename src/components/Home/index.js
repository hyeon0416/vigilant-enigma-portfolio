import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import TextBox from '../TextBox'
import ReactAnimate from '../ReactAnimate'
import './index.css'

function Home(){
    const [ textClass , setTextClass ] = useState('text-animate-start')
    const greetings = ['안','녕','하','세','요','.']
    const name = ['개','발','자',' ','현','승','환',' ','입','니','다','.']
    const job = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(()=>{
        setTimeout(()=>{
            setTextClass('text-animate-hover')
        },4500)
    })

    return (
        <>
            <div className="container home-page">
                <div className="text-box">
                    <h1>
                        <TextBox classNames={textClass} strArr={greetings} index={1} />
                    </h1>
                    <h1>
                        <TextBox classNames={textClass} strArr={name} index={7} />
                    </h1>
                    <h1>
                        <TextBox classNames={textClass} strArr={job} index={19} />
                    </h1>
                    <Link to='/contact' className='button'>
                        CONTACT ME
                    </Link>
                </div>
                <ReactAnimate />
            </div>
        </>
    )
}

export default Home