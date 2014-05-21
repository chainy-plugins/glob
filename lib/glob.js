module.exports = function(opts, next){
	"use strict";
	var chain = this;

	// Default opts to an object if it doesn't exist
	if ( !opts )  opts = {}

	// Scan the path
	require('glob')(this.data, opts, function(err, result){
		if (err)  return next(err)
		chain.data = result
		return next()
	})
}