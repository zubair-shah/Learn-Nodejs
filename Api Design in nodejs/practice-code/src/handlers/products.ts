import prisma from "../db";

//get all products

export const getAllProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,

        },
        include: {
            Product: true
        }
    })

    res.status(201).json({ data: user.Product })
}


// get One Product

export const getOneProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await prisma.product.findFirst({
        where: {
            id: productId,
            belongsToId: req.user.id
        }
    })

    res.status(200).json({ data: product })

}


//create product

export const createProduct = async (req, res, next) => {
    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id
            }
        })

        res.status(200).json({ data: product })
    }
    catch (e) {
        e.type = 'input'
        next(e)
    }
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await prisma.product.update({
        where: {
            id: req.params.id,
        },
        data: {
            name: req.body.name
        }
    })

    res.status(200).json({ data: updatedProduct })
}

export const deleteProduct = async (req, res) => {
    const deletedProduct = await prisma.product.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "deleted success", data: deletedProduct })
}