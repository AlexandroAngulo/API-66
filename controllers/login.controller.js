import User from "../models/users.model.js"

export const login = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({username, password})
        if (user) {
            res.json({isLogin: true, msg: "Login successful", user: user})
        } else {
            res.status(401).json({isLogin: false, msg: "Credenciales incorrectas", user: {}})
        }
    } catch (error) {
        res.status(500).json({isLogin: false, msg: "Error de servidor"})
    }
}
