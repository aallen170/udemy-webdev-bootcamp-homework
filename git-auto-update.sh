#!/bin/bash

while true
do
  git add .
  git commit -m "auto-update"
  git push origin
  sleep 5m
done