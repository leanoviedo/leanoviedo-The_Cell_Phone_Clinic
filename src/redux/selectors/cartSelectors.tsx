import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCartPhones = (state: RootState) => state.cart.phones;
export const selectCartAccessories = (state: RootState) =>
  state.cart.accessories;

// Combina ambos tipos de ítems en un solo array
export const selectCartItems = createSelector(
  [selectCartPhones, selectCartAccessories],
  (phones, accessories) => [...phones, ...accessories]
);

// Cantidad total de ítems
export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((acc, item) => acc + item.quantity, 0)
);

// Precio total
export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce(
    (acc, { item, quantity }) => acc + (item.price || 0) * quantity,
    0
  )
);
