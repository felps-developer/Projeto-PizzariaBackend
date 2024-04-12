import prismaClient from "../../prisma";

interface OrderRequest {
    id: string
}



class ConcludeOrderService {
    async execute({ id }: OrderRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: id
            },
            data: {
                status: true,
            }
        })
        return order
    }
}

export { ConcludeOrderService }