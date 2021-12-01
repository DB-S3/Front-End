import { configureStore } from '@reduxjs/toolkit'
import CredentialReducer from './CredentialSlice'

export default configureStore({
  reducer: {
    credentials: CredentialReducer

  }
})