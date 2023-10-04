import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Token de autenticação ausente" });
    }

    jwt.verify(token, process.env.KEY_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }

        req.user = user;
        next();
    });
};