const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let oldQuantity = 0;
      if (state[action.item.id] !== undefined) {
        oldQuantity = state[action.item.id].quantity;
      }
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: oldQuantity + 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return stateCopy;
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.quantity,
        },
      };
    }
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);

export default cartReducer;
