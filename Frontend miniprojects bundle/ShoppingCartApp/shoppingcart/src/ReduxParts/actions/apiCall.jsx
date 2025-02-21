export const updateData = (newData) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: newData
  }
}
