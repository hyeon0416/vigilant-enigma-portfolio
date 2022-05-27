import './index.css'
import TextBox from '../TextBox'
import { useState , useEffect ,useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'


function Contact(){
    const [ textClass , setTextClass ] = useState('text-animate-start')
    const form = useRef(null)
    const contactMe = ['C','o','n','t','a','c','t',' ','M','e']
    const position = [35.855404,127.154831]

    useEffect(()=>{
        setTimeout(()=>{
            setTextClass('text-animate-hover')
        },1800)
    })
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_JS_USER_ID
        ).then(
            ()=>{
                alert('메일 전송 성공!')
            },
            ()=>{
                alert('메일 전송 실패')
            }
        )

    }

    return (
        <>
            <div className="container contact">
                <div className="text-box">
                    <h1>
                        <TextBox classNames={textClass} strArr={contactMe} index={1} />
                    </h1>
                    <p>
                        저는 일자리를 찾고 있습니다. 저에게 관심이 있다면 언제든지 연락 주세요.
                    </p>
                    <div className="contact-box">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="이름" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input placeholder="이메일" type="text" name="email" required />
                                </li>
                                <li>
                                    <input placeholder="제목" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="메세지..." name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className="form-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="infoMap">
                    대한민국,<br/>
                    전주시,<br/>
                    덕진구 우아동 3가 우성아파트<br/>
                    <span>guspooh1@gmail.com</span>
                </div>
                <div className="map">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact