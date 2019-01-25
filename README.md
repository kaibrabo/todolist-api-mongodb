# Overview

JSON API for Todo List Node application built on Express and MongoDB.

## Install MongoDB on C9.io in root directory

1. `sudo apt-get install -y mongodb-org`
2. `mkdir data`
3. `echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod`
4. `chmod a+x mongod`

## Starts Server:
`./mongod`

## Install Mongoose:
`npm install mongoose --save`

