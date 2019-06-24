let defaultState = {
 friends: [
  {
   id: 1,
   name: 'Jow',
  },
 ],
};

export default function reducer(state = defaultState, action) {
 switch (action.type) {
  default:
   return state;
 }
}
