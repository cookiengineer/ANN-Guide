#!/bin/bash

NODE_BIN=`which node`;
PYTHON3_BIN=`which python3`;
PYTHON2_BIN=`which python2`;
PYTHON_BIN=`which python`;
SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);

if [ "$NODE_BIN" != "" ]; then

	echo -e "\e[42m\e[97m (I) Using node.js ... \e[0m";

	cd $SLIDES_ROOT;
	$NODE_BIN ./bin/server/index.js 1337;

elif [ "$PYTHON3_BIN" != "" ]; then

	echo -e "\e[43m\e[97m (I) No node.js, using python3 ... \e[0m";

	cd $SLIDES_ROOT;
	$PYTHON3_BIN -m http.server 1337;

elif [ "$PYTHON2_BIN" != "" || "$PYTHON_BIN" != "" ]; then

	echo -e "\e[43m\e[97m (I) No node.js, no python3, using python2 ... \e[0m";
	echo -e "\e[43m\e[97m (I) What is this? Windows XP? Update your OS, maybe? \e[0m";

	cd $SLIDES_ROOT;

	if [ "$PYTHON2_BIN" != "" ]; then
		$PYTHON2_BIN -m SimpleHTTPServer 1337;
	elif [ "$PYTHON_BIN" != "" ]; then
		$PYTHON_BIN -m SimpleHTTPServer 1337;
	fi;

else

	echo -e "\e[41m\e[97m (E) No node.js? No python3? No python2? \e[0m";
	echo -e "\e[41m\e[97m (E) What you want me to do? Write a webserver using Excel? \e[0m";

fi;

