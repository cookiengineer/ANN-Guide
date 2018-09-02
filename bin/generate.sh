#!/bin/bash

NODE_BIN=`which node`;
SLIDES_BOOK="";
SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);


cd $SLIDES_ROOT;

for filename in ./book/*.md; do
	SLIDES_BOOK="$SLIDES_BOOK:$filename";
done;


if [ "$NODE_BIN" != "" ]; then
	$NODE_BIN ./source/generator/index.js "$SLIDES_BOOK";
else
	echo "Please install node.js.";
fi;

