import crypto from "crypto"

export const getSalt = () => {
    const size = process.env.SALT_SIZE
    return crypto.randomBytes(5*size).toString("base64url").substring(0, size)
}


export function hashPassword(password, salt) {
    const pepper = process.env.PEPPER
    const hash = crypto.createHash("sha256")
    const hashing = hash.update(salt + password + pepper)
    const hashed = hashing.digest("base64url")
    return salt + hashed
}