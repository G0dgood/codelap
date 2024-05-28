import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService';
 


const initialState = { 
  alluserdata:   [],
  alluserisError: false,
  alluserisSuccess: false,
  alluserisLoading: false, 
  allusermessage: '', 
}

  
 
 
// istration User
export const getalluser = createAsyncThunk('user/getalluser', async (data,thunkAPI) => {
  try { 
    return await userService.getalluser(data)
  } catch (error:any) {
      const message = error?.response?.data?.message ||
    (error?.response?.data?.errors?.map((error: { message: any; }) => error.message) || []).join(', ');
    
    return thunkAPI.rejectWithValue(message)
  }
})
 

  


export const istrationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {   
      
      state.alluserisLoading = false
      state.alluserisSuccess = false  
      state.alluserisError = false
      state.allusermessage= ''
      
    },
    
     
  },
  extraReducers: (builder) => {
    builder  
    
    .addCase(getalluser.pending, (state) => {
        state.alluserisLoading = true 
      })
      .addCase(getalluser.fulfilled, (state:any, action) => {
        state.alluserisLoading = false
        state.alluserisSuccess = true
        state.alluserdata = action.payload 
      })
      .addCase(getalluser.rejected, (state:any, action) => {
        state.alluserisLoading = false
        state.alluserisError = true
        state.allusermessage = action.payload
        state.alluserdata = [] 
      })
      
  },
})

export const { reset } = istrationSlice.actions
export default istrationSlice.reducer



