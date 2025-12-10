// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhoneItem, AccessoryItem } from "../types/types_Data";

// CartProduct unificado con tipo
export type CartProduct =
  | (PhoneItem & { type: "phone" })
  | (AccessoryItem & { type: "accessory" });

// Cada item en el carrito
type CartPhoneItem = { item: PhoneItem & { type: "phone" }; quantity: number };
type CartAccessoryItem = {
  item: AccessoryItem & { type: "accessory" };
  quantity: number;
};

// Estado del carrito separado
interface CartState {
  phones: CartPhoneItem[];
  accessories: CartAccessoryItem[];
}

const initialState: CartState = {
  phones: [],
  accessories: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      if (action.payload.type === "phone") {
        const existing = state.phones.find(
          (p) => p.item.id === action.payload.id
        );
        if (existing) {
          existing.quantity += 1;
        } else {
          state.phones.push({ item: action.payload, quantity: 1 });
        }
      }

      if (action.payload.type === "accessory") {
        const existing = state.accessories.find(
          (p) => p.item.title === action.payload.title
        );
        if (existing) {
          existing.quantity += 1;
        } else {
          state.accessories.push({ item: action.payload, quantity: 1 });
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<CartProduct>) => {
      if (action.payload.type === "phone") {
        const existing = state.phones.find(
          (p) => p.item.id === action.payload.id
        );
        if (existing) {
          existing.quantity -= 1;
          if (existing.quantity <= 0) {
            state.phones = state.phones.filter(
              (p) => p.item.id !== action.payload.id
            );
          }
        }
      }

      if (action.payload.type === "accessory") {
        const existing = state.accessories.find(
          (p) => p.item.title === action.payload.title
        );
        if (existing) {
          existing.quantity -= 1;
          if (existing.quantity <= 0) {
            state.accessories = state.accessories.filter(
              (p) => p.item.title !== action.payload.title
            );
          }
        }
      }
    },

    removeItem: (state, action: PayloadAction<CartProduct>) => {
      if (action.payload.type === "phone") {
        state.phones = state.phones.filter(
          (p) => p.item.id !== action.payload.id
        );
      }
      if (action.payload.type === "accessory") {
        state.accessories = state.accessories.filter(
          (p) => p.item.title !== action.payload.title
        );
      }
    },

    clearCart: (state) => {
      state.phones = [];
      state.accessories = [];
    },
  },
});

export const { addToCart, removeFromCart, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
