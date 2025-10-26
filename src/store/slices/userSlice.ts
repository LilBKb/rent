import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  phone:string,
  name:string,
  surname:string,
  familyName:string,
  passport:string,
  driverLicense:string,
  password:string

}

const initialState: CounterState = {
  phone:'',
  name:'',
  surname:'',
  familyName:'',
  passport:'',
  driverLicense:'',
  password:''

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
})

export const { } = userSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer