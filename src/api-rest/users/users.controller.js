import { UsersService } from './users.service';

export class UsersController {
    /**
     * @type {UsersController}
     */
    static #instance;

    static getSingleton() {
        if (!UsersController.#instance) {
            UsersController.#instance = new UsersController(UsersService.getSingleton());
        }
        return UsersController.#instance;
    }

    /**
     * @type {UsersService}
     */
    #userService;

    constructor(userService) {
        this.#userService = userService;
    }
}
