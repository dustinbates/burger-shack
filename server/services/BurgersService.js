import { fakeDb } from "../db/fakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
    getMenuById(menuId) {
        const burger = fakeDb.menu.find(b => b.id == menuId)

        if (!burger) {
            throw new BadRequest("Bad Menu Id")
        }

        return burger
    }

    getMenu() {
        return fakeDb.menu
    }

}

export const burgersService = new BurgersService()