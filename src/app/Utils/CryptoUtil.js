import * as crypto from "crypto";
class CryptoUtil{
    constructor() {
        this.algorithm = 'aes-256-cbc';
        this.key = 'dT56nL@My00K5U50i@lOz09iB1&o70@S';
        this.iv = Buffer.from('0123456789ABCDEF0123456789ABCDEF', 'hex');
    }

    criptografar(texto) {
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        let encryptedData = cipher.update(texto, 'utf8', 'hex');
        encryptedData += cipher.final('hex');
        return encryptedData;
    }

    descriptografar(encryptedData) {
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        return decryptedData;
    }
}
export default new CryptoUtil();