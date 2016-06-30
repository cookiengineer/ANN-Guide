#!/bin/bash

./bin/generate.sh;

SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);

PYTHON3=`which python3`;
PYTHON2=`which python`;

if [ "$PYTHON3" != "" ]; then

	cd $SLIDES_ROOT;

	$(cd $SLIDES_ROOT && $PYTHON3 -m http.server 1337) &
	$(cd $SLIDES_ROOT/demo/flappy-plane && $PYTHON3 -m http.server 1338) &
	wait;

elif [ "$PYTHON2" != "" ]; then

	cd $SLIDES_ROOT;

	$(cd $SLIDES_ROOT && $PYTHON2 -m SimpleHTTPServer 1337) &
	$(cd $SLIDES_ROOT/demo/flappy-plane && $PYTHON2 -m SimpleHTTPServer 1338) &
	wait;

fi;

