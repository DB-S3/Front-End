import { createSlice } from '@reduxjs/toolkit'

export const CredentialSlice = createSlice({
  name: 'credentials',
  initialState: {
    value: 'none'
  },
  reducers: {
    setId: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setId } = CredentialSlice.actions

export default CredentialSlice.reducer