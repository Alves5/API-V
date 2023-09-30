import * as crypto from "crypto";
class CryptoUtil{
    constructor() {
        this.algorithm = 'aes-256-cbc';
        this.key = process.env.CRYPTO_KEY;
        this.iv = Buffer.from(process.env.CRYPTO_IV , 'hex');
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