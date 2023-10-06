#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Provide a URL as an argument');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error('Error: Received code', response.statusCode);
    process.exit(1);
  }

  const tasks = JSON.parse(body);

  const tasksCompleted = {};

  tasks.forEach((task) => {
    if (task.completed) {
      if (tasksCompleted[task.userId]) {
        tasksCompleted[task.userId]++;
      } else {
        tasksCompleted[task.userId] = 1;
      }
    }
  });
  console.log(tasksCompleted);
});
