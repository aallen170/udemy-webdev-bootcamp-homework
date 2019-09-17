#!/bin/bash

while true
do
  git add .
  git commit -m "auto-update"
  git push origin master
  sleep 5s
done