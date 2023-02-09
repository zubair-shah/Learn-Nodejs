import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })
    const token = createJWT(user)
    res.json({token})
}

export const signin = async (req, res) => { 
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        }
    })

    const isValidUser = await comparePassword(req.body.password, user.password)
    
    if (!isValidUser) {
        res.status(401)
        res.json({ message: "Wrong username or password" })
        return
    }


    const token = await createJWT(user);
    res.json({ token });
}
