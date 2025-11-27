import {useState} from "react";

export function Section({title, children}){

    const [isOpen, setIsOpen] = useState(true);

    return <>
        <h2>{title}</h2>
        {/*div rond button om diens positie te behouden */}
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        </div>
        {isOpen && children}
    </>
}