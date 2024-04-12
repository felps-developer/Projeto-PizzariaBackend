import prismaClient from "../../prisma";

interface OrderRequest{
    id: string
}


class SendOrderService {
    async execute({id}: OrderRequest) {

        const order = await prismaClient.order.update({
            where:{
                id: id
            },
            data:{
                draft: false
            }
        })
        return order
    }
}

export { SendOrderService }