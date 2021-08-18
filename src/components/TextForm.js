import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        // let newText = text.toLowerCase();
        setText('');
    }

    return (
        <>

            <div className="container my-3">
                <h1>{props.message}</h1>
                <div class="mb-3">

                    <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-5">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words  {text.length} Characters</p>

                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 className="my-2">Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
