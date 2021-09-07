#!/bin/sh

yarn build
cd compiles

rm package.json
rm -rf tests

cd src
cp -r * ..

cd ..
rm -rf src

cd .. 
echo "Complete"