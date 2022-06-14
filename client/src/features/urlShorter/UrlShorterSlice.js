import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import urlShorterService from './UrlShorterService';

export const shortifyUrl = createAsyncThunk(
  'urls/shortifyUrl',
  async ({ fullUrl, shortUrl }, { rejectWithValue }) => {
    try {
      return await urlShorterService.shortifyUrl(fullUrl, shortUrl);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteUrl = createAsyncThunk(
  'urls/deleteUrl',
  async (shortUrl, { rejectWithValue }) => {
    try {
      return await urlShorterService.deleteUrl(shortUrl);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUrls = createAsyncThunk(
  'urls/getUrls',
  async (_, { rejectWithValue }) => {
    try {
      return await urlShorterService.getUrls();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUrl = createAsyncThunk(
  'urls/getUrl',
  async (shortUrl, { rejectWithValue }) => {
    try {
      return await urlShorterService.getUrl(shortUrl);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  urlList: [],
  shortUrl: '',
  fullUrl: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const urlShorterSlice = createSlice({
  name: 'urlShorter',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(shortifyUrl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(shortifyUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.urlList.push({ ...action.payload });
    });
    builder.addCase(shortifyUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.response.data;
    });
    builder.addCase(deleteUrl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.urlList = state.urlList.filter(
        (url) => url.shortUrl !== action.payload
      );
    });
    builder.addCase(deleteUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.response.data;
    });
    builder.addCase(getUrls.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUrls.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.urlList = action.payload;
    });
    builder.addCase(getUrls.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.response.data;
    });
    builder.addCase(getUrl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.fullUrl = action.payload;
    });
    builder.addCase(getUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.response.data;
    });
  },
});

export const {
  urlList,
  shortUrl,
  fullUrl,
  isLoading,
  isSuccess,
  isError,
  errorMessage,
} = urlShorterSlice.actions;
export default urlShorterSlice.reducer;
