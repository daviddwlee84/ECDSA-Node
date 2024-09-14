## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incorporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

[Code - readme.md — ecdsa-node-fresh - 22 November 2022](https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4)
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server (`nodemon index`)

The application should connect to the default server port (3042) automatically! 

_Hint_

- Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
- Use registry mirror `npm install --registry=https://registry.npmmirror.com` to prevent from network error (e.g. `MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit`) behind the GFW.
- Front-end bug logs should be checked in the browser developer tool

---

- [ethereum/js-ethereum-cryptography: Every cryptographic primitive needed to work on Ethereum, for the browser and Node.js](https://github.com/ethereum/js-ethereum-cryptography)
  - `npm install --registry=https://registry.npmmirror.com ethereum-cryptography`
- [paulmillr/noble-secp256k1: Fastest 4KB JS implementation of secp256k1 signatures and ECDH](https://github.com/paulmillr/noble-secp256k1)
  - [Paul Miller — Noble cryptography](https://paulmillr.com/noble/)

---

- Private Key
- Signature

---

- [Debug Node.js Apps using Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Node.js — Debugging Node.js](https://nodejs.org/en/learn/getting-started/debugging)
