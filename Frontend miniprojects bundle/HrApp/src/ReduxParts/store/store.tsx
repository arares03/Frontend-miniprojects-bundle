import { configureStore } from "@reduxjs/toolkit"
import peopleReducer from "../reducers/peopleReducer.tsx/peopleReducer"

const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    people: peopleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;