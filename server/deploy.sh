#!/bin/bash

echo What should the version be?
read VERSION

docker build -t dorinr/lireddit:$VERSION .
docker push dorinr/lireddit:$VERSION

ssh root@198.199.86.14 "docker pull dorinr/lireddit:$VERSION && docker tag dorinr/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"
