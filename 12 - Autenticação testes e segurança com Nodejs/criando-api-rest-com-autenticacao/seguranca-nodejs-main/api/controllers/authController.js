const AuthService = require('../services/authService');
const authService = new AuthService();

class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body;

        try {
            const { accessToken } = await authService.login({ email, senha });

            res.status(200).json(accessToken);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = AuthController;
