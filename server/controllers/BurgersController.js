import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor(){
        super('api/burgers')

        this.router
            .get('/menu', this.getMenu)
            .get('/menu/:menuId', this.getMenuById)
    }

    getMenu(req, res, next){
        try {
            let menu = burgersService.getMenu()
            res.send(menu)
        } catch (error) {
            next(error)
        }
    }

    getMenuById(req, res, next){
        try {
            let menuId = req.params.menuId
            const burger = burgersService.getMenuById(menuId)
            res.send(burger)

        } catch (error) {
            next(error)
        }
    }
}