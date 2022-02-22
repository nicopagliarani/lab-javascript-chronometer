class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    
    // ... your code goes here
  }

  start(callback){this.intervalId=setInterval(()=>{if(callback){callback()}this.currentTime++;
  },1000)}
    
  

  getMinutes() {return Math.floor(this.currentTime/60);
    
    // ... your code goes here
  }

  getSeconds() { return this.currentTime % 60;
    
    
    // ... your code goes here
  }
  

  computeTwoDigitNumber(value) {return String(value).padStart(2,'0');
    // ... your code goes here
  }

  stop() {clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {return this.currentTime=0;
    // ... your code goes here
  }


  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    //let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);
    return `${minutes}:${seconds}`
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
