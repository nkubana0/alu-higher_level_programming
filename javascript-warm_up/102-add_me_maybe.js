#!/usr/bin/node

exports.addMeMaybe = function (number, theFunction) {
  if (number > 0) {
    theFunction(number + 1);
  } else {
    theFunction(number + 1);
  }
};
