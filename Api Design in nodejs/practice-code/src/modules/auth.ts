import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'


export const comparePassword = (password, hash) => {
    return bcrypt.compare(password , hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password , 5)    // 5 is behave like a salt and make more secure to brute force for password
}
 
export const createJWT = (user) => {
    const token = jwt.sign({ id: user.id, username:user.username}, process.env.JWT_SECRET)
    return token
}

export const protect = (req, res , next) => {
    const bearer = req.headers.authorization;
    console.log(`${bearer}  `)
    if (!bearer) {
        res.status(401)
        res.json({ message: "Not Authorized" })
        return;
    }

    const [, token] = bearer.split(' ');
    console.log(token)

    if (!token) {
        res.status(401)
        res.json({ message: "Not valid token" })
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user;
        next();
    }
    catch (err) { 
        console.log(err)
        res.status(401)
        res.json({ message: "Not valid token" })
        return;
    }

}