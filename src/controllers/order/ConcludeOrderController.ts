import { Request, Response } from "express";
import { ConcludeOrderService } from "../../services/order/ConcludeOrderService";

class ConcludeOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        const concludeOrderController = new ConcludeOrderService()
        const order = await concludeOrderController.execute({
            id
        })

        return res.json(order)
    }
}

export { ConcludeOrderController }