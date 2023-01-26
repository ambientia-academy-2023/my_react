import React, { useState } from 'react';

function MyHook(props) {
  const [fname, setFname] = useState(props.fname);

    return (
        <div>
            <h2>MyHook</h2>
            <label>Anna etunimi</label>
            <input  onChange={element=>setFname(element.target.value)}/>
            <p>Hello {fname}</p>
            <button onClick={()=>setFname("No name")}>Set to NoName</button>
        </div>
    );
}

export default MyHook;