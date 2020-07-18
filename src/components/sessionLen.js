import React from 'react';

function SLen(props){

    function decreaseSession(){
        if(props.SessionLen <= 1) return;
        props.decreaseSession()
    }
    function increaseSession(){
        if(props.SessionLen >= 60) return;
        props.increaseSession()
    }

    return(
        <section className="mother">
            <h4>Session Length</h4>
            <section className="slen">
                <button onClick={decreaseSession}>DOWN</button>
                <p>{props.SessionLen}</p>
                <button onClick={increaseSession}>UP</button>
            </section>
        </section>
    );
};

export default SLen;