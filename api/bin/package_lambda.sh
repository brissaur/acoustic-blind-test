#!/usr/bin/env bash
# run the command from the api/ folder
yarn build
cd dist/
zip -r lambda.zip ./