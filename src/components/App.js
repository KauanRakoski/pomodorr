import React from 'react';
import '../App.css';
import BreakInterval from './breakInt'
import SLen from './sessionLen'
import Timer from './timer.js'
import { render } from 'react-dom';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      breakInt: 5,
      sessionLen: 25,
      timerMinute: 25
    };

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);

    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);

    this.onUpdateTimerMin = this.onUpdateTimerMin.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);

    this.onResetTimer = this.onResetTimer.bind(this);
  }

  onIncreaseBreak(){
    this.setState((prevState) => {
      return{
        breakInt: prevState.breakInt + 1
      }  
    })
  }

  onDecreaseBreak(){
    this.setState((prevState) => {
      return{
        breakInt: prevState.breakInt - 1,
        
      }  
    })
  }



  onIncreaseSession(){
    this.setState((prevState) => {
      return{
        sessionLen: prevState.sessionLen + 1,
        timerMinute: prevState.sessionLen + 1,
      }  
    })
  }

  onDecreaseSession(){
    this.setState((prevState) => {
      return{
        sessionLen: prevState.sessionLen - 1,
        timerMinute: prevState.sessionLen - 1,
      };  
    });
  };



  onUpdateTimerMin(){
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        timerMinute: this.state.sessionLen
      })
    }else{
      this.setState({
        timerMinute: this.state.breakInt
      })
    } 
  }

  onResetTimer(){
    this.setState({
      timerMinute: 25
    })
  }

  render(){

    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="setters">

          < BreakInterval
          breakInt={this.state.breakInt} 
          increaseBreak={this.onIncreaseBreak}
          decreaseBreak={this.onDecreaseBreak}
          
          />

          < SLen 
          SessionLen={this.state.sessionLen}
          increaseSession = {this.onIncreaseSession}
          decreaseSession = {this.onDecreaseSession}
          />
        </section>

        < Timer 
        timerMinute = {this.state.timerMinute}
        breakInt = {this.state.breakInt}
        updateMin = {this.onUpdateTimerMin}
        onToggleI = {this.onToggleInterval}
        resetMins = {this.onResetTimer}
        />
      </main>
    );
  }

  
}

export default App;
