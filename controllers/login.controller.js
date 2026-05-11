import User from "../models/users.model.js"
import { hashPassword } from "../utils/hash.js"

export const login = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({username})
        const salt = user.password.substring(0,process.env.SALT_SIZE)
        const hashed = hashPassword(password, salt)
        if (user.password === hashed) {
            res.json({isLogin: true, msg: "Login successful", user: user})
        } else {
            res.status(401).json({isLogin: false, msg: "Credenciales incorrectas", user: {}})
        }
    } catch (error) {
        res.status(500).json({isLogin: false, msg: "Error de servidor"})
    }
}
