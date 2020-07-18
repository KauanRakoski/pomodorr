import React from 'react';

function BreakInterval(props){
    function decreaseBreak(){
        if(props.breakInt <= 1) return;
        props.decreaseBreak()
    }
    function increaseBreak(){
        if(props.breakInt >= 60) return;
        props.increaseBreak()
    }

    return (
        <section className="mother">
            <h4>Break Lenght</h4>
        
            <section className="break-interval">
                <button onClick={decreaseBreak}>DOWN</button>
                <p>{props.breakInt}</p>
                <button onClick={increaseBreak}>UP</button>
            </section>
        </section>
    )
}

export default BreakInterval;