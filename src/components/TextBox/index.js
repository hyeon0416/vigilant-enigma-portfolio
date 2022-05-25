import './index.css'

function TextBox({ classNames , strArr , index }){
    return (
        <span>
            {strArr.map((char,i) =>(
                <span key={char + i} className={`${classNames} _${i + index}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default TextBox