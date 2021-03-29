const process = require('process');
const fs = require('fs');
const axios = require('axios');



function writeFile(content, filename) {
    fs.writeFile(filename, content, 'utf8', err => {
        if (err) {
            console.log("Erorrrr......" + err);
        } else {
            console.log(content);

        }
    })


};

function cats(path, output) {
    fs.read(path, 'utf8', err => {
        if (err) {
            console.log("Errorr......." + err);
            process.exit(1);
        } else {
            writeFile(data, output);
        }
    })
}

async function webCats(url, output) {
    let response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
        writeFile(response.data, output);
    } else { }
    console.log("Error....")
}


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
console.log(path);

if (path === '--out') {
    path = process.argv[4];
    console.log(path);
    let filename = process.argv[3];
    console.log(filename);
    if (path.slice(0, 4) === 'http') {
        webCats(path, filename);
    } else {
        cats(path, filename);
    }


} else {
    if (path.slice(0, 4) === 'http') {
        webCat(path);
    } else {
        cat(path);
    }

}

