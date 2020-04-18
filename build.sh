#!/bin/bash

config_file="src/config.js"

if [ ! -f config.js ]; then
    cp src/config.template.js src/config.js
fi

npx babel ./src/index.js | npx uglify-js -cm > script.js