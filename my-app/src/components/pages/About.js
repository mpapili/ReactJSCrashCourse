import React from  'react'


// you can export up here just fine rather than underneath
function About() {

    // return a react fragment
    console.log("DEBUG, RUNNING ABOUT FUNCTION")
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a ReactJS Crash Course.</p>
        </React.Fragment>
    )

}

export default About;