#!/bin/env node

const { check_if_npms_exists } = require('./index.node');

try {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
        throw new Error('Usage: it-is-taken <npm-package-name>');
    }
    const result = check_if_npms_exists(process.argv[2]);
    if(result) {
        console.log('😭 It\'s taken!');
    }
    else {
        console.log('🥳 It\'s available!');
    }
}
catch (e) {
    console.error(e);
    process.exit(1);
}