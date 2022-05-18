## Setup

1. Copy `config.default.js` to `config.js`
2. Edit `config.js` as necessary
   - If you don't specify the certificate or key paths, the server will run in
     HTTP only. This may not work on a web server due to
     [secure contexts](https://w3c.github.io/webappsec-secure-contexts/).
3. Run `node start-web.js`

## Prior Instructions

setup for https://github.com/simondevyoutube/Quick_3D_MMORPG

npm run start = web version npm run start:electron = regular electron version
npm run start:electron-forge = electron forge cli managed version (good to use
for publishing, thanks slack)

todo: tests with floss (thanks pixi team / netflix)

notes:

[20160:0414/095438.668:ERROR:interface_endpoint_client.cc(659)] Message 3
rejected by interface blink.mojom.Widget electron throwing this error recently.
(mojo is the rendering ipc layer kind of between web content and the main chrome
process (not main electron process) )
