import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const PostProduct = createAsyncThunk(
  "product/PostProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost/root-project/Backend/products/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
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

export const showProducts = createAsyncThunk(
  "product/showProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost/root-project/Backend/products/"
      );
      return res.data;
    } catch (error) {
      console.log(error, "this is error ");
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete("http://localhost/root-project/Backend/products/", {
        data: { id },
      });

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    products: [],
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
      .addCase(PostProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(PostProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.success = true;
      })
      .addCase(PostProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(showProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(showProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = productSlice.actions;
export default productSlice.reducer;
