import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    try {
        // Get token from request headers
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized, login again" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.uerId = decoded.id
        next();
        
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};
export default authUser;