import { Request, Response } from "express";
import { AddItemsService } from "../../services/order/AddItemsService";




class AddItemsController {
    async handle(req: Request, res: Response) {
        const { amount, order_id, product_id } = req.body

        const addItemsController = new AddItemsService()
        const order = await addItemsController.execute({
            amount,
            order_id,
            product_id
        })

        return res.json(order)

    }
}

export { AddItemsController }