import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = import.meta.env.VITE_API_URL;
    const [token, setToken] = useState("");
    const [food_list, setFoodlist] = useState([]);

    const addToCart = async (itemId) => {
        
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));

        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    };

    // ✅ Fix: Prevent cartItems from going negative
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;
            const updatedCart = { ...prev };
            updatedCart[itemId] -= 1;
            if (updatedCart[itemId] === 0) delete updatedCart[itemId]; // Remove item if count reaches 0
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
            } catch (error) {
                console.error("Error removing from cart:", error);
            }
        }
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // ✅ Fix: Ensure fetched data is valid before setting state
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            if (response.data && response.data.data) {
                setFoodlist(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    // ✅ Fix: Ensure `cartItems` is always an object
    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData || {}); // If cartData is undefined, use empty object
        } catch (error) {
            console.error("Error loading cart data:", error);
            setCartItems({}); // Ensure cartItems is always an object
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, []);

    useEffect(() => {
        console.log("Updated cartItems:", cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
