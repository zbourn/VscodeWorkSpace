// install express,and nodemon at global level
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');
/*
Payload {iss = '5556e5d2-f2f3-41c3-a656-d571976bbc5d'
sub = '4d4319b3-dc21-4be8-b04d-1fbfb094fd78' iat = 1523900289
exp =1523903289 aud = 'account-d.docusign.com' scope = 'signature'}
*/
// const privateKey = fs.readFileSync('./private.key');
// const algorithm = 'RS256';
// const MILLESECONDS_PER_SECOND = 1000;
// const Jpayload = `{
//     iss: '5556e5d2-f2f3-41c3-a656-d571976bbc5d',
//     sub: '4d4319b3-dc21-4be8-b04d-1fbfb094fd78',
//     iat: 1523900289,
//     exp: 1523903289,
//     aud: 'account-d.docusign.com',
//     scope: 'signature'
// }`;
// --Production
// const Jpayload = `{
//     iss: '80a4212c-5628-4638-bcd9-2ffbdd7b3402',
//     sub: 'a46f243e-fdc0-4324-961a-5c5496e7e4fa',
//     iat: 1523900289,
//     exp: 1523903289,
//     aud: 'account.docusign.com',
//     scope: 'signature'
// }`;
// let payload = eval('(' + Jpayload + ')');
// payload.iat = Math.floor(Date.now() / MILLESECONDS_PER_SECOND);
// payload.exp = payload.iat + 600;
// console.log(JSON.stringify(object));
// let payload =JSON.parse(JSON.stringify(object));
// const token = jwt.sign(payload, privateKey, { algorithm: algorithm });
// console.log(token);
app.get('/api/gettoken/', (req, res) => {
    let algorithm = req.query.algorithm || 'RS256';
    const MILLESECONDS_PER_SECOND = 1000;
    const Jpayload = `{
    iss: '5556e5d2-f2f3-41c3-a656-d571976bbc5d',
    sub: '4d4319b3-dc21-4be8-b04d-1fbfb094fd78',
    iat: 1523900289,
    exp: 1523903289,
    aud: 'account-d.docusign.com',
    scope: 'signature'
}`;
    let payload = eval('(' + Jpayload + ')');
    let privateKey = fs.readFileSync('./private.key');
    payload.iat = Math.floor(Date.now() / MILLESECONDS_PER_SECOND);
    payload.exp = payload.iat + 600;
    let token = jwt.sign(payload, privateKey, { algorithm: algorithm });
    res.send({ jwtToken: token });
});
const port = process.env.PORT || '5001';
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});