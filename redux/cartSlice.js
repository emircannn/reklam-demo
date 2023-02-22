/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push({ ...action.payload, quantity : 1})
            toast.success("Ürün Sepete Eklendi", {autoClose: 1000})
            state.total += action.payload.price === true ? action.payload.cartprice + action.payload.afprint +  (action.payload.isDesign ? 0 : action.payload.selectedRadio) :
            action.payload.cartprice*(action.payload.width/100 )*(action.payload.height/100) + action.payload.afprint + (action.payload.isDesign ? 0 : action.payload.selectedRadio)

        },

        deleteProduct: (state, action) => { 
            state.products = state.products.filter((item) => item.id !== action.payload.id)
  
            state.total -= action.payload.price === true ? action.payload.cartprice + action.payload.afprint +  (action.payload.isDesign ? 0 : action.payload.selectedRadio) :
            action.payload.cartprice*(action.payload.width/100 )*(action.payload.height/100) + action.payload.afprint + (action.payload.isDesign ? 0 : action.payload.selectedRadio)
  
            toast.success("Ürün Sepetten Silindi", {autoClose: 1000})
          },
          increase: (state, action) => { 
            const cartItem = state.products.find((item) => item.id === action.payload.id) 
            cartItem.quantity += 1
  
            state.total += action.payload.price === true ? action.payload.cartprice + action.payload.afprint :
            action.payload.cartprice*(action.payload.width/100 )*(action.payload.height/100) + action.payload.afprint
  
          },
          descrease: (state, action) => { 
            const cartItem = state.products.find((item) => item.id === action.payload.id) 
            cartItem.quantity -= 1
  
            state.total -= action.payload.price === true ? action.payload.cartprice + action.payload.afprint :
            action.payload.cartprice*(action.payload.width/100 )*(action.payload.height/100) + action.payload.afprint
  
          },
          reset: (state, action) => {
            state.products = []
            state.total = 0;
        }
    },
})



export const {addProduct, deleteProduct, increase, descrease, reset} = cartSlice.actions;

export default cartSlice.reducer