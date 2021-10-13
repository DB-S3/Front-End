import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
    name: 'apiConnection',
    initialState: {
      value: "test",
    }
  })

  export default apiSlice.reducer