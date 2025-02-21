import { Person } from "../../Interfaces/Person"

export const importPeople = (fetchedData: Person[]) => {
    return {
        type: 'UPDATE_PEOPLE',
        payload: fetchedData,
    }
}
export const updatePerson = (personId: number, updatedPerson: Person) => {
  return {
    type: 'UPDATE_PERSON',
    payload: {
      id: personId,
      updatedPerson,
    },
  };
};