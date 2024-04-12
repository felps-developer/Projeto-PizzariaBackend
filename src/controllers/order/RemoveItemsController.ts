import { Request, Response } from "express";
import { RemoveItemsService } from "../../services/order/RemoveItemsService";




class RemoveItemsController {
    async handle(req: Request, res: Response) {

        const id = req.query.id as string

        const removeItemsController = new RemoveItemsService()
        const item = await removeItemsController.execute({
            id
        })

        return res.json(item)



    }
}

export { RemoveItemsController }
