import { Person } from "../../../Interfaces/Person";

const initialState = {
  people: [] as Person[]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const peopleReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return {
        ...state,
        people: action.payload,
      };
    case 'UPDATE_PERSON':
      // eslint-disable-next-line no-case-declarations
      const updatedPeople = state.people.map((person) => {
        if (person.id === action.payload.id) {
          return action.payload.updatedPerson;
        }
        return person;
      });

      return {
        ...state,
        people: updatedPeople,
      };
    default:
      return state;
  }
};

export default peopleReducer;
