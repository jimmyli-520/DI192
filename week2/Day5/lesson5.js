let add = (function(){
  let counter = 0;
  function addOne (){
    counter += 1;
    return counter
  }
  return addOne
})