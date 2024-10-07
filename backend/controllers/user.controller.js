export const test = (req, res) => {
    res.json({ message: 'Hello from server!' });
}

export const signout = (req, res) =>{
    try {
        res.clearCookie('access_token').status(200).json("user signed out")
    } catch (error) {
        return res.status(500).json({ message: "server error" });
    }
}