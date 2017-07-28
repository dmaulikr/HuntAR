// remove state intial character

const initialState = [{
  health: 10,
  damage: 5,
  name:"Spider",
  type:"spider",
  created:true
}]

export default function monsters(state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}
