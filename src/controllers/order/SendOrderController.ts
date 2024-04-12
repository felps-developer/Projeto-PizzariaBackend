import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        const sendOrderController = new SendOrderService()
        const order = await sendOrderController.execute({
            id
        })

        return res.json(order)
    }
}

export { SendOrderController }