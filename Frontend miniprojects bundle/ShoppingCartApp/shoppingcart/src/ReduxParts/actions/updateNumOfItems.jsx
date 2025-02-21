export const updateNumOfItems = (newValue) => {
  return {
    type: 'UPDATE_NUM_OF_ITEMS',
    payload: newValue
  }
}