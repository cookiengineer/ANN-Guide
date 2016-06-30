#!/usr/bin/env node

(function(global) {

	const _create_directory = function(path, mode) {

		if (mode === undefined) {
			mode = 0777 & (~process.umask());
		}


		let is_directory = false;

		try {

			is_directory = _fs.lstatSync(path).isDirectory();

		} catch(err) {

			if (err.code === 'ENOENT') {

				if (_create_directory(_path.dirname(path), mode) === true) {
					_fs.mkdirSync(path, mode);
				}

				try {
					is_directory = _fs.lstatSync(path).isDirectory();
				} catch(err) {
				}

			}

		} finally {

			return is_directory;

		}

	};



	var _BOOK  = require('fs').readFileSync(__dirname + '/book.html').toString('utf8');
	var _INDEX = require('fs').readFileSync(__dirname + '/index.html').toString('utf8');


	var _fs       = require('fs');
	var _lexer    = require('./html.js');
	var _parser   = require('./markdown.js');
	var _path     = require('path');


	var FILES = process.argv[2].split(':').filter(function(tmp) {
		return tmp !== '';
	});


	if (FILES.length > 0) {

		var book_index = [];


		FILES.forEach(function(file) {

			var book_in  = _path.resolve(__dirname + '/../../', file);
			var book_out = _path.resolve(__dirname + '/../../book/html/' + file.split('/').pop().replace('.md', '.html'));


			var blob = _parser.decode(_fs.readFileSync(book_in, 'utf8').toString('utf8'));
			if (blob !== null) {

				var book_data = _lexer.encode(blob);
				var book_html = './book/html/' + file.split('/').pop().replace('.md', '.html');
				var book_pdf  = './book/pdf/'  + file.split('/').pop().replace('.md', '.pdf');
				var book_name = file.split('/').pop().substr(3).replace('.md', '');

				if (book_data !== null && book_data.length > 0) {

					var tmp = _BOOK;

					tmp = tmp.split('${data}').join(book_data);
					tmp = tmp.split('${name}').join(book_name);

					_create_directory(_path.dirname(book_out));
					_fs.writeFileSync(book_out, tmp, 'utf8');


					book_index.push('<li><h3>' + book_name + '</h3><a href="' + book_html + '">html</a>, <a href="' + book_pdf + '">pdf</a></li>');

				}

			}

		});


		if (book_index.length > 0) {
			var tmp = _INDEX.split('${index}').join(book_index.join('\n\t'));
			_fs.writeFileSync(__dirname + '/../../index.html', tmp, 'utf8');
		}

	}

})(typeof global !== 'undefined' ? global : this);

