#!/bin/bash
# Send the request using curl, and display the body of the response for 200 status code
curl -s -L -I "$1" -w "%{http_code}" | grep "200" -q && curl -sL "$1"
