import { Response, Request } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const createCategoryService = new ListCategoryService();

        const category = await createCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }