#!/bin/bash

./bin/generate.sh;

NODE_BIN=`which node`;
SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);


if [ "$NODE_BIN" != "" ]; then

	cd $SLIDES_ROOT;

	echo "";

	$NODE_BIN ./source/server/index.js 1337;

fi;

