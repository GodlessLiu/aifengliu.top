const client = require("scp2");
require("dotenv").config();

function main() {
    console.log("开始部署");
    client.scp('./.output', {
        host: process.env.IP,
        port: '22',
        username: process.env.USER,
        password: process.env.PASSWORLD,
        path: process.env.REMOTE
    }, function (err) {
        if (err) {
            console.log('部署失败', err);
        } else {
            console.log('部署成功');
        }
    })
}


main();