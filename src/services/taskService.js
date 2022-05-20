exports.CallbackHell = function() {
  let setintindex = 1;
  const interval = setInterval(() => {
    //#1: setInterval 1 is scheduled, first macrotask in the stack
    //its a macrotask so should be executed in the end of the cicle
    console.log('macrotask: setInterval ' + setintindex);
    setintindex++;
    //Its a setinterval so, when executed, a new one should be scheduled
  }, 0);

  setTimeout(() => {
    //#2: setTimeout 1 is scheduled, second macrotask in the stack,
    //should be executed after setInterval 1 and fire a bunch of new microtasks
    console.log('macrotask: setTimeout 1');
    Promise.resolve().then(() => {
      //#5: First microtask scheduled for this cicle, must be the first
      console.log('microtask: promise 3');
    }).then(() => {
      //#6: Second microtask scheduled for this cicle, must be the executed after promise 3
      console.log('microtask: promise 4');
    }).then(() => {
      setTimeout(() => {
        //#7: setTimeout 2 is scheduled, second macrotask in the stack,
        //should be executed after setInterval 2 and fire a bunch of new microtasks too
        console.log('macrotask: setTimeout 2');
        Promise.resolve().then(() => {
          //#8: First microtask scheduled for this cicle, must be the first
          console.log('microtask: promise 5');
        }).then(() => {
          //#9: Second microtask scheduled for this cicle, must be the executed after promise 5
          console.log('microtask: promise 6');
        }).then(() => {
          //#10: Last action, no more intervals and timeouts
          clearInterval(interval);
        })
      }, 0);
    })
  }, 0);

  Promise.resolve().then(() => {
    //#3: First microtask scheduled, must be the first
    console.log('microtask: promise 1');
  }).then(() => {
    //#4: Second microtask scheduled, must be the executed after promise 1
    console.log('microtask: promise 2');
  });
}

// Processing order according to the loop
// microtask: promise 1
// microtask: promise 2
// MACROTASK: setInterval 1
// MACROTASK: setTimeout 1
// microtask: promise 3
// microtask: promise 4
// MACROTASK: setInterval 2
// MACROTASK: setTimeout 2
// microtask: promise 5
// microtask: promise 6
