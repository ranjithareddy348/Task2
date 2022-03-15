const initialState = [{ id: 1 }];

const projectReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.payload];
      return state;
    case "DELETE":
      const ProjectFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = ProjectFilter;
      return state;
    case "UPDATE":
      const ProjectUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = ProjectUpdate;
      return state;

    default:
      return state;
  }
};

export default projectReducers;
