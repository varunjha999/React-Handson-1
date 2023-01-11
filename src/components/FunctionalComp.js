import React, { useState } from "react";
import ClassComp from "./ClassComp";
function FunctionalComp() {
    const [status, setStatus] = React.useState()
    const [cActive, classActive] = useState();
    return (
        <div className="App container">
            <div className="btn1">
                <button onClick={() => setStatus(!status)}>To see styling in Functional component</button>
                <button className='link ink1' onClick={() => classActive(!cActive)}>
                    To see styling in class component
                </button>
            </div>
            <div className="main ">
                {
                    status ? <><div className="functinalComp">
                        <h1>This is created using Functional Component</h1>
                        <p className="p1">This is done using external CSS</p>
                        <p style={{ color: "blue" }}>This is done using inline CSS</p>

                    </div></> : null
                }
                {cActive ? <ClassComp /> : null}
            </div>

        </div>
    )
}
export default FunctionalComp;