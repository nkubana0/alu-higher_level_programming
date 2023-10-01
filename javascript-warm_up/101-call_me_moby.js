function callMeMoby(x, theFunction) {
  if (x > 0) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
}

module.exports = callMeMoby;
