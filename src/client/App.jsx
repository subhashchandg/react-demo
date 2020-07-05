import React, { Fragment } from 'react';

const App = props=>{

    const handleClick = ()=>{
        console.log("I work");
    }
    return (
        <Fragment>
            <h1>Hello World!!!!</h1>
            <button onClick={handleClick}> Hit Me !!!</button>
        </Fragment>
    )
}

export default App;