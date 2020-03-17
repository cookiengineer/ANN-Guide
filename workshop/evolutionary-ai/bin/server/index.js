#!/usr/bin/env node



(function(global) {

	const _fs     = require('fs');
	const _http   = require('http');
	const _Buffer = require('buffer').Buffer;
	const _ROOT   = __dirname.split('/').slice(0, -2).join('/');
	const _PORT   = parseInt(Array.from(process.argv).slice(1).find(v => /^([0-9]+)$/g.test(v)), 10) || 1337;



	/*
	 * HELPERS
	 */

	const _MIME = {
		'default': { binary: true,  type: 'application/octet-stream'      },
		'css':     { binary: false, type: 'text/css'                      },
		'eot':     { binary: false, type: 'application/vnd.ms-fontobject' },
		'gz':      { binary: true,  type: 'application/x-gzip'            },
		'fnt':     { binary: false, type: 'application/json'              },
		'html':    { binary: false, type: 'text/html'                     },
		'ico':     { binary: true,  type: 'image/x-icon'                  },
		'jpg':     { binary: true,  type: 'image/jpeg'                    },
		'js':      { binary: false, type: 'application/javascript'        },
		'json':    { binary: false, type: 'application/json'              },
		'md':      { binary: false, type: 'text/x-markdown'               },
		'mf':      { binary: false, type: 'text/cache-manifest'           },
		'mp3':     { binary: true,  type: 'audio/mp3'                     },
		'ogg':     { binary: true,  type: 'application/ogg'               },
		'pkg':     { binary: false, type: 'application/json'              },
		'tar':     { binary: true,  type: 'application/x-tar'             },
		'ttf':     { binary: false, type: 'application/x-font-truetype'   },
		'txt':     { binary: false, type: 'text/plain'                    },
		'png':     { binary: true,  type: 'image/png'                     },
		'svg':     { binary: true,  type: 'image/svg+xml'                 },
		'woff':    { binary: true,  type: 'application/font-woff'         },
		'woff2':   { binary: true,  type: 'application/font-woff'         },
		'xml':     { binary: false, type: 'text/xml'                      },
		'zip':     { binary: true,  type: 'application/zip'               }
	};

	const _serve_buffer = function(res, url, data) {

		let mime = _MIME['default'];

		let ext = url.split('.').pop();
		if (_MIME[ext] !== undefined) {
			mime = _MIME[ext];
		}

		if (mime.binary === true) {

			res.writeHead(200, {
				'Content-Type':   mime.type,
				'Content-Length': _Buffer.byteLength(data)
			});
			res.write(data);
			res.end();

		} else {

			let str = data.toString('utf8');
			let type = mime.type;
			if (type.startsWith('text/')) {
				type += '; charset=utf-8';
			}

			res.writeHead(200, {
				'Content-Type':   type,
				'Content-Length': str.length
			});
			res.write(str);
			res.end();

		}

	};

	const _serve_error = function(res, code) {
		res.writeHead(code, {});
		res.end();
	};

	const _serve_redirect = function(res, path) {
		res.writeHead(301, {
			'Location': path
		});
		res.end();
	};


	let server = _http.createServer((req, res) => {

		let url = req.url || '';
		if (url === '/') {

			_serve_redirect(res, '/index.html');

		} else if (url.startsWith('/')) {

			_fs.lstat(_ROOT + url, (err, stat) => {

				if (!err) {

					if (stat.isDirectory()) {

						_serve_redirect(res, url + '/index.html');

					} else if (stat.isFile()) {

						_fs.readFile(_ROOT + url, (err, data) => {

							if (!err) {
								_serve_buffer(res, url, data);
							} else {
								_serve_error(res, 500);
							}

						});

					} else {
						_serve_error(res, 404);
					}

				} else {
					_serve_error(res, 404);
				}

			});

		} else {
			_serve_error(res, 404);
		}

	});

	server.on('error', err => {

		console.log('');

		if (err.code === 'EACCES') {
			console.log('Current user has no right to listen on port ' + _PORT + '!');
			console.log('Shame on you, the sysadmin ain\'t gonna like this.');
		} else if (err.code === 'EADDRINUSE') {
			console.log('Another server is already listening on port ' + _PORT + '!');
			console.log('Maybe you executed this script already before?');
		} else {
			console.log('Something bad happened, I don\'t know what to do :(');
			console.log('You gotta edit the ./source/server/index.js, most likely.');
		}

	});

	console.log('Starting server on http://localhost:' + _PORT + ' ...');
	server.listen({
		host: 'localhost',
		port: _PORT
	});

})(typeof global !== 'undefined' ? global : this);

