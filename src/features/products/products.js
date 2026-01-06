import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
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
      });
  },
});

export const { resetState } = productSlice.actions;
export default productSlice.reducer;
