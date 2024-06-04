import { useEffect, useRef, useState } from "react"



export const DomRef = () => {

    const [input, setInput] = useState('you text goes here');
    const [count, setCount] = useState(0);

    const countRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputRef2 = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // setCount((count) => count + 1);
        countRef.current = countRef.current + 1;
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = 'red';
        }
    })

    const handleChange = (e: any) => {
        if (e.target.value.length == 0) {
            setInput('you text goes here')
        } else {
            setInput(e.target.value);
        }
    }

    const handleClick = () => {
        if (inputRef2.current && inputRef2?.current.value == "") {
            inputRef2.current.focus()
        }
        else if (inputRef2.current && (parseInt(inputRef2.current.value) > 50)) {
            alert('Success')
        } else {
            alert('failed')
        }
    }


    return <div>
        <input type="text" onChange={handleChange} />
        <p>You have input : {input}</p>
        <p>Rendered: {countRef.current}</p>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <br />
        <input type="text" ref={inputRef2} />
        <button onClick={handleClick}>Click me</button>

    </div>

}
