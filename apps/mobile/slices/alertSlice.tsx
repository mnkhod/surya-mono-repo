import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AlertState {
  show: boolean;
  showBankAlert: boolean;
  showTrialClassOrderSuccessAlert: boolean;
}

const initialState: AlertState = {
  show: false,
  showBankAlert: false,
  showTrialClassOrderSuccessAlert: false,
}

export const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlert: (state,action: PayloadAction<boolean>) => {
      state.show = action.payload
    },
    setBankAlert: (state,action: PayloadAction<boolean>) => {
      state.showBankAlert = action.payload
    },
    setTrialClassOrderSuccessAlert: (state,action: PayloadAction<boolean>) => {
      state.showTrialClassOrderSuccessAlert = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAlert,setBankAlert,setTrialClassOrderSuccessAlert } = alertSlice.actions

export default alertSlice.reducer
