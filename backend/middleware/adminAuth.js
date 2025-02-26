import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        // Get token from request headers
        const {token} = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized, login again" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded email matches the admin email
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "You do not have admin access" });
        }

        next(); // Allow the request to proceed
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};
export default adminAuth;