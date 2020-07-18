import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.refresh = this.refresh.bind(this);
    }

    stop(){
        clearInterval(this.state.intervalId)
    }

    play(){
        let intervalId = setInterval(this.decreaseTimer, 1000)

        this.setState({
            intervalId: intervalId
        })
    }

    refresh(){
        this.stop();
        this.setState({
            timerSecond: 0,
        })
        this.props.resetMins()
    }

    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0:
                if(this.props.timerMinute === 0){
                    
                    if(this.state.isSession){
                        this.setState({
                            isSession: false
                        })
                        this.props.onToggleI(this.state.isSession)  
                    }else{
                        this.setState({
                            isSession: true
                        })
                        this.props.onToggleI(this.state.isSession)
                    }
                      
                }

                this.props.updateMin()
                this.setState({timerSecond:59})
                break;
            default:
                this.setState(prevState =>{
                    return {
                        timerSecond: prevState.timerSecond -1}
                    })
                break;
        }
    }
    
    render(){
        return(
            <section>
                <section className="timer-section">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>
                        {this.state.timerSecond === 0 ? "00": this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}
                    </span>
                </section>
                <button onClick={this.play}>Play</button>
                <button onClick={this.stop}>Pause</button>
                <button onClick={this.refresh}>Refresh</button>
            </section>
        )
    }
}

export default Timer;