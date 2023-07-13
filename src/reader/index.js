const Jimp = require("jimp");
const prompt = require("prompt-sync")();

const fs = require('fs');

const qrCodeReader = require('qrcode-reader');

const fileName = prompt("Nome do arquivo para ler: ");
const fileExtension = prompt("Extensão do arquivo: ");

const buffer = fs.readFileSync(`../img/${fileName}.${fileExtension}`);

Jimp.read(buffer, function(err, image) {
    if(err) {
        console.error(err);
    }

    const qrCodeInstance = new qrCodeReader();

    qrCodeInstance.callback = function(err, value) {
        if(err) {
            console.error(err);
        }

        console.log(value.result);
    };

    qrCodeInstance.decode(image.bitmap);
});
