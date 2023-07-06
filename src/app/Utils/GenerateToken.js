class GenerateToken{
    generateToken(tamanho) {
        const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let token = '';

        for (let i = 0; i < tamanho; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            token += caracteres[indice];
        }

        return token;
    }
}
export default new GenerateToken();