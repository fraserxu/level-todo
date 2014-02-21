#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdrip')
var minimist = require('minimist')
var level = require('level')
var strftime = require('strftime')
var sprintf = require('sprintf')
var through = require('through')

var argv = minimist(process.argv.slice(2))
var HOME = process.env.HOME || process.env.USERPROFILE
var datadir = argv.d || path.join(HOME, '.todo')
mkdirp.sync(datadir)

var db = level(path.join(datadir, 'db'), { encoding: 'json' })

if (argv.h) usage(0)
else if (argv._[0] === 'add') {

}
else if (argv._[0] === 'rm') {

}
else if (argv._[0] === 'done') {

}
else if (argv._[0] === 'list') {

}
else if (argv._[0] === 'destroy') {

}
else usage(1)