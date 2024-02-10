import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    lightTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = 'light'
    },
    darkTheme: (state) => {
      state.value = 'dark'
    },
    switchTheme: (state) => {
      state.value === 'light' ? state.value = 'dark' : state.value = 'light'
    }
  },
})

export const { lightTheme, darkTheme, switchTheme } = themeSlice.actions
export default themeSlice.reducer