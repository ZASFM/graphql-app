import { createSlice } from "@reduxjs/toolkit";

const initialState={
   list:[],
}
 
const HomeSlice=createSlice({
   name:'homeSlice',
   initialState,
   reducers:{

   }
})

export const {

}=HomeSlice.actions;
export default HomeSlice.reducer;