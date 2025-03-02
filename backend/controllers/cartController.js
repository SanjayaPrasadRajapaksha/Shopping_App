import userModel from "../models/userModel.js";

// add product to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][[size]]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        await userModel.findByIdAndUpdate(itemId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


// update user cart
const updateCart = async (req, res) => {

}

// get user cart data
const getUserCart = async (req, res) => {

}

export {
    addToCart,
    updateCart,
    getUserCart,
}