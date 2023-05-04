const QRCode = require('qrcode');

const prompt = require("prompt-sync")();

const nameArchive = prompt("Digite o nome do arquivo: ");
const message = prompt("Digite a mensagem: ");

QRCode.toFile(`./img/${nameArchive}.png`, `${message}`, {
    errorCorrectionLevel: 'H'
}, function(err) {
    if(err) throw err;
    console.log('QR Code saved!');
});