const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  let minutes=chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds= chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  console.log(minutes);

  minDecElement.innerHTML=minutes[0];
  minUniElement.innerHTML=minutes[1];
  secDecElement.innerHTML=seconds[0];
  secUniElement.innerHTML=seconds[1];
  //printMinutes();
  //printSeconds();
}
  // ... your code goes here


function printMinutes() {
  
  //minDec.innerHTML=minutes[0];
  //minUni.innerHTML=minutes[1];
  // ... your code goes here
}

function printSeconds() {
  
  //secDec.innerHTML=seconds[0];
  //secDec.innerHTML=seconds[1];  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  //milDec.innerHTML=milliseconds[0];
  //milUni.innertHTML=milliseconds[1];
  // ... your code goes here
}

function printSplit() {//let split = minutes + ':' + seconds;
//let li = document.createElement('li');
//li.innerHTML = split;
//document.getElementById('splits').appendChild(li);

  // ... your code goes here
}

function clearSplits() { //document.getElementById('splits').innerHTML = '';
 
  // ... your code goes here
}

function setStopBtn() { //btnLeft.innerHTML = 'STOP';
//btnLeft.className = 'btn stop';
  // ... your code goes here
 
}

function setSplitBtn() {//btnRight.innerHTML = 'SPLIT';
//btnRight.className = 'btn split';

  // ... your code goes here
}

function setStartBtn() {//btnLeft.innerHTML = 'START';
//btLeft.className = 'btn start'

  // ... your code goes here
}

function setResetBtn() {//btnRight.innerHTML = 'RESET';
//btnRight.className = 'btn reset';

  // ... your code goes here
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    btnLeftElement.className='btn stop';
    btnLeftElement.innerHTML='STOP';
    chronometer.start(printTime);
  }
    else if(btnLeftElement.classList.contains('stop')){
      btnLeftElement.className='btn start';
      btnLeftElement.innerHTML='START'
      chronometer.stop();
    }
    });
  // ... your code goes here

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    btnRightElement.className='btn split';
    btnRightElement.innerHTML='SPLIT';
  }else if(btnRightElement.classList.contains('split')){
    btnRightElement.className='btn reset';
    btnRightElement.innerHTML='RESET';
  }
  // ... your code goes here
});
