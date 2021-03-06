"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('glob plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('glob', require('../'))
	it("should work", function(next){
		var parent = require('path').resolve(__dirname+'/..')
		Chainy.create()
			.set(parent+'/*.md')
			.glob()
			.done(function(err, result){
				if (err)  return next(err)
				result = result.map(function(item){
					return item.replace(parent+'/', '')
				}).sort().join(' ')
				expect(result).to.deep.equal('CONTRIBUTING.md HISTORY.md LICENSE.md README.md')
				return next()
			})
	})
})