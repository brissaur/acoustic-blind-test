#!/usr/bin/env bash
# run the command from the api/ folder
npx tsc
cd dist/
zip -r lambda.zip ./