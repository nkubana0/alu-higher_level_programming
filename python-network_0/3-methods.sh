#!/bin/bash
# Send an OPTIONS request using curl to display the allowed HTTP methods
curl -sI -X OPTIONS "$1" | grep -i allow | cut -d ' ' -f 2-
