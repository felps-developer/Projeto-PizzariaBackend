import prismaClient from "../../prisma";

interface ItemsRequest {
    amount: number
    order_id: string
    product_id: string
}


class AddItemsService {
    async execute({ amount, order_id, product_id }: ItemsRequest) {
        const addItems = await prismaClient.item.create({
            data: {
                amount,
                order_id: order_id,
                product_id: product_id
            }
        })

        return addItems

    }
}

export { AddItemsService }