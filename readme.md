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

### Example Accounts

```bash
docker compose up --build
```

```json
{
  "0x1": {
    "private": "b8462aae154aeb08c18d2b537cf753d2154c1721974f4d3cb36f259d26e8d2f6",
    "public": "02916fc7dc319e56ce870a8f0c9b8ab51be018cbfa0436c05c0f01c140b284acd7",
    "addr": "0x1"
  },
  "0x2": {
    "private": "ec27b7cf567f36b8272d6679406dc58957fe98de0dc9b9017c8a12981f5ba62e",
    "public": "02ed2eaaa3ac61156584371a58c71932e8439af3aadf1aba769c0293a592620063",
    "addr": "0x2"
  },
  "0x3": {
    "private": "ca50f1b3efa32f6c4766b7eb926742ae9f0156f91f0ff39103e1f414d7860878",
    "public": "026ce1de68f287d6898c06dfc565ad546f4dc2c89ad20f5cd64922dd83a3154f87",
    "addr": "0x3"
  }
}
```

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
