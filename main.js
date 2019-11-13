
const returnSuccess = function(v){
  console.log("in returnSuccess", v);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        return resolve(++v);
      },
      500
    );
  });
};

const returnError = function(v){
  console.log("in returnError", v);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        return reject(++v);
      },
      500
    );
  });
};

const returnRandom = function(v){
  console.log("in returnRandom", v);
  return new Promise(function(resolve, reject){
    setTimeout(
      function(){
        const r = Math.random();
        if(r > 0.5){
          return resolve(++v);
        }else{
          return reject(++v);
        }
      },
      500
    )
  });
}

const run = function(){

  returnRandom(0)
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