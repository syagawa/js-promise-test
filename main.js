
const counter = {
  suc: 0,
  err: 0,
  ran: 0
}

const returnSuccess = function(){
  console.log("in returnSuccess", ++counter.suc);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        return resolve("returnSuccess success");
      },
      500
    );
  });
};

const returnError = function(){
  console.log("in returnError", ++counter.err);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        return reject("returnError error");
      },
      500
    );
  });
};

const returnRandom = function(){
  console.log("in returnRandom", ++counter.ran);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        const r = Math.random();
        if(r > 0.5){
          return resolve("returnRandom success");
        }else{
          return reject("returnRandom error");
        }
      },
      500
    )
  });
}

const run = function(){

  returnRandom()
    .then(returnSuccess)
    .then(returnSuccess)
    .then(returnError)
    .then(returnSuccess)
    .then(returnSuccess)
    .then(returnSuccess)
    .then(returnSuccess)
    .then(returnSuccess)
    .catch(function(err){
      console.log("err", err);
    });
};

run();