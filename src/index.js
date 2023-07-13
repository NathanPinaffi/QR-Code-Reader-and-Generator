const QRCode = require('qrcode');

const prompt = require("prompt-sync")();

const fileName = prompt("Digite o nome do arquivo: ");
const content = prompt("Digite a mensagem: ");

QRCode.toFile(`./img/${fileName}.png`, `${content}`, {
    errorCorrectionLevel: 'H'
}, function(err) {
    if(err) throw err;
    console.log('QR Code saved!');
});
