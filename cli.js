#!/bin/env node

const { check } = require('.')

const args = process.argv.slice(2)

if (args.length === 0) {
    console.error('Usage: is-it-taken <package-name>')
    process.exit(1)
}

const packageName = args[0]

const result = check(packageName)

if (!result) {
    console.log(`😭, ${packageName} is taken`)
} else {
    console.log(`🥳, ${packageName} is not taken`)
}