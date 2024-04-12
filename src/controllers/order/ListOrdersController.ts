import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrderService";

class ListOrdersController {
    async handle(req: Request, res: Response) {

        const listOrdersController = new ListOrdersService()
        const orders = await listOrdersController.execute()

        return res.json(orders)

    }
}

export { ListOrdersController }