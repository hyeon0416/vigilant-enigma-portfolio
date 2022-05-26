import './index.css'
import { useState , useEffect } from 'react'

function ReactAnimate(){
    const [ ring , setRing ] = useState('ring')
    const [ atom , setAtom ] = useState('atom')

    useEffect(()=>{
        setTimeout(()=>{
            setRing('react-animate-ring')
        },4500)
        setTimeout(()=>{
            setAtom('react-animate-atom')
        },1000)
    })

    return (
        <div className="react-animate">
            <div className={ring}></div>
            <div className={ring}></div>
            <div className={ring}></div>
            <div className={atom}></div>
        </div>
    )
}

export default ReactAnimate