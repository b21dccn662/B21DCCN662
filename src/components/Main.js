import models from "../database/models";
import React, { useRef, useState } from "react";
import Details from "./Details";

const Main = () => {
    const stu = models;

    const inputRef = useRef();
    const [id, setId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setId(inputRef.current.value);
    }

    return (
        <main>
            <form className="search-container" onSubmit={handleSubmit}>
                <input type="text" className="search-input" placeholder="Nhập số báo danh" ref={inputRef}/>
                <button type="submit">tra cứu</button>
            </form>
            {stu.map((item) => {
                // console.log(item)
                console.log(id)
                if (item.id === id) {
                    return (
                        <Details 
                            id={item.id}
                            fullname={item.name}
                            dob={item.dob}
                            math={item.math}
                            liter={item.liter}
                            eng={item.eng}
                        />
                    )
                }
            })}
        </main>
    )
}
export default Main;