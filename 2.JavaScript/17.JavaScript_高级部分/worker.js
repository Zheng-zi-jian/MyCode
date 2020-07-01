function num(loopLength) {
  var a=0;
  for (var i = 0; i < loopLength; i++) {
    for (var j = 0; j < loopLength; j++) {
      a+=(i+j)
    }
  }
  return a;
}
self.onmessage = function (event) {
  //event.data   就是通过postMessage 传递过来的数据
  var result = num(event.data);
  self.postMessage(result);
}