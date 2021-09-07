#!/bin/sh

yarn build
cd compiles

rm package.json
rm -rf tests

cd src
cp -r * ..

cd ..
rm -rf src
if [ ! -d "Interfaces" ]
then
    cp -r ../src/Interfaces ./Interfaces
fi

echo "Complete"