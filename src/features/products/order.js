import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// SEND ORDER
export const sendOrder = createAsyncThunk(
  "order/sendOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost/root-project/Backend/orders/create.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Failed to post product");
      }

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// SHOW ORDERS
export const showOrders = createAsyncThunk(
  "Order/showOrders",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost/root-project/Backend/orders/create.php"
      );
      return res.data;
    } catch (error) {
      console.log(error, "this is error ");
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// DELETE ORDER
export const deleteOrder = createAsyncThunk(
  "Order/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        "http://localhost/root-project/Backend/orders/create.php/",
        {
          data: { id },
        }
      );

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    orders: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder

      //SEND ORDER
      .addCase(sendOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      //SHOW ORDER
      .addCase(showOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(showOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE PRODUCT
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = orderSlice.actions;
export default orderSlice.reducer;
