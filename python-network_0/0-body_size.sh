#!/bin/bash
# Send the request using curl, and output the size of the response body in bytes
curl -sI "$1" | grep -i Content-Length | awk '{print $2}'
