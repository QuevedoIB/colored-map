export const GET_VISITED_COUNTRIES = idUser => {
  return (dispatch) => {
    alert(`Llamada api a ${idUser}`)
    //api call
    return dispatch({
      type: "GET_VISITED_COUNTRIES", payload: {
        ES: 1,
        FR: 1,
        DE: 1,
        GE: 1,
        US: 1,
        CA: 1
      }
    })
  }
}