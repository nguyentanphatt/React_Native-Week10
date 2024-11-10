import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://673021e666e42ceaf15f7433.mockapi.io/bike/Bike')
  const data = await response.json();
  return data
})

export const addBike = createAsyncThunk('bikes/addBike', async (newBike) => {
  const response = await fetch('https://673021e666e42ceaf15f7433.mockapi.io/bike/Bike', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBike),
  })
  const data = await response.json()
  return data
})

const bikeSlice = createSlice({
  name: 'bike',
  initialState:{
    bikes: [],
    error: null,
    state: 'idle',
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'Loading'
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = "Succeeded"
        state.bikes = action.payload
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = "Failed"
        state.action = action.error.message
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.bikes.push(action.payload)
      })
  }
})

export default bikeSlice.reducer
