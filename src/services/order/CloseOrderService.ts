import prismaClient from "../../prisma";

interface OrderRequest {

    id : string
}



class CloseORderService {
    async execute({ id  }: OrderRequest) {
        const closeOrder = await prismaClient.order.delete({
            where: {
                id: id 
            }
        })
        return closeOrder
    }
}

export { CloseORderService }