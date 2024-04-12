import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string
}




class DetailsOrderService {
    async execute({ order_id }: OrderRequest) {

        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include:{
                product:true,
                order:true,
            }

        })

        console.log(orders)
        return orders
    }

}


export { DetailsOrderService }