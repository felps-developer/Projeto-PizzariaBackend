import prismaClient from "../../prisma";

interface ItemsRequest {
    id: string
    
}

class RemoveItemsService {
    async execute({ id }: ItemsRequest) {

        const removeItems = await prismaClient.item.delete({
            where: {
                
               id: id
            }
        })

        return removeItems

    }
}

export { RemoveItemsService }