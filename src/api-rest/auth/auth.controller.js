export class AuthController {
    /**
     * @type {AuthController}
     */
    static #instance;

    static getSingleton() {
        if (!AuthController.#instance) {
            AuthController.#instance = new AuthController();
        }
        return AuthController.#instance;
    }

    register = (req, res) => {
        const data = {
            accessToken: 'asc',
            id: '123',
            firstName: '',
            fullName: ''
        };
        return res.status(200).json(data);
    }
}
