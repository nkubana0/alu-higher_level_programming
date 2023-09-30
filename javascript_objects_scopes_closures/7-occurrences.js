#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const occurrences = list.filter(element => element === searchElement);
  return occurrences.length;
};
