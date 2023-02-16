import prisma from "../db"

export const getOneUpdate = async (req, res) => {

    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.json({ message: "Success", data: update })
}
export const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])

    res.json({ message: "Success", data: updates })
}
export const createUpdate = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId,
        }
    })
    if (!product) {
        return res.json({ message: "Not Found" });
    }
    const update = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            product: { connect: { id: product.id } }
        }
    })

    res.json({ message: "Success", data: update })
}
export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if (!match) {
        res.json({ message: "Not Found" })
    }

    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body
    })

    res.json({ message: "success", data: updatedUpdate })
}
export const deleteUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if (!match) {
        res.json({ message: "Not Found" })
    }
    const deleteUpdate = await prisma.update.delete({
        where: {
            id: req.params.id
        }
    })

    res.json({ message: "success", data: deleteUpdate })
}