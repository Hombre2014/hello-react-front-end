import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
  'greetings/fetchMessage',
  async () => {
    const message = await fetch('http://localhost:3000/greetings');
    const res = await message.json();
    return res.message;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: '',
  },
  reducers: {
    getMessage: (state) => { /* eslint-disable no-param-reassign */
      state.message = 'bye';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload; /* eslint-disable no-param-reassign */
    });
  },
});

export const { getMessage } = greetingSlice.actions;

export default greetingSlice.reducer;
