# WEB3 SETUP ON REACT..

Follow this guide: https://github.com/ChainSafe/web3.js

To resolve the issue with packs.

Go to file and update e.g in `./node_modules/cipher-base/index.js` replace:

`var Transform = require('stream').Transform`

with

`var Transform = require('stream-browserify').Transform`

then run 


`npx patch-package cipher-base`

FIX REF: https://github.com/crypto-browserify/cipher-base/issues/10