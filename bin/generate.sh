#!/bin/bash

SLIDES_BOOK="";
SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);


cd $SLIDES_ROOT;

for filename in ./book/*.md; do
	SLIDES_BOOK="$SLIDES_BOOK:$filename";
done;


node ./source/generator/index.js "$SLIDES_BOOK";

