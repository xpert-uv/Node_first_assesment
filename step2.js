const process = require('process');
const fs = require('fs');
const axios = require('axios');


function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Error reading ${path}:${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    })

}




async function webCat(url) {
    let resp = await axios.get(`${url}`);
    if (resp.status == 200) {
        console.log(resp.data);
    } else {
        console.log("Error....");
    }

}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
