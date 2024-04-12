import { Response, Request } from "express";
import { CloseORderService } from "../../services/order/CloseOrderService";

class CloseORderController {
    async handle(req: Request, res: Response) {

        const  id  = req.query.id as string;

        const closeOrderController = new CloseORderService()
        const orderClose = await closeOrderController.execute({
            id 
        })

        return res.json(orderClose)



    }
}

export { CloseORderController }