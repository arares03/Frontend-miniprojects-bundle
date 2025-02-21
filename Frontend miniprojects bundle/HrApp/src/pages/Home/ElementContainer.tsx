import React, { useState } from 'react';
import { Person } from '../../Interfaces/Person';
import { StyledUl } from '../Home/HomeStyles';
import { StyledElementContainer } from '../Home/HomeStyles';
import { useDispatch } from 'react-redux';
import { updatePerson } from '../../ReduxParts/actions/PeopleActions';
import { TwoColumnLabelContainer } from '../Home/HomeStyles';
import { useEffect } from 'react';

const ElementContainer = ({ person }: { person: Person }) => {
  const dispatch = useDispatch();

  const [updatedPerson, setUpdatedPerson] = useState<Person>({ ...person });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUpdatedPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    setUpdatedPerson({ ...person });
  }, [person]);

  const handleUpdatePerson = () => {
    dispatch(updatePerson(person.id, updatedPerson));
  };

  return (
    <StyledElementContainer>
      <StyledUl>
        <li>Name: {updatedPerson.first_name + ' ' + updatedPerson.last_name}</li>
        <li>email: {updatedPerson.email}</li>
        <li>Date of birth: {updatedPerson.date_of_birth}</li>
        <li>Industry: {updatedPerson.industry}</li>
        <li>Salary: {updatedPerson.salary}</li>
        <li>Years Of Experience: {updatedPerson.years_of_experience}</li>
      </StyledUl>
      <TwoColumnLabelContainer>
        <label>
          New First Name:
          <input
            type="text"
            name="first_name"
            value={updatedPerson.first_name}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label>
          New Last Name:
          <input
            type="text"
            name="last_name"
            value={updatedPerson.last_name}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label>
          New email:
          <input
            type="email"
            name="email"
            value={updatedPerson.email}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label>
          New industry:
          <input
            type="text"
            name="industry"
            value={updatedPerson.industry}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label>
          New salary:
          <input
            type="number"
            name="salary"
            value={updatedPerson.salary}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label>
          New YOE:
          <input
            type="number"
            name="years_of_experience"
            value={updatedPerson.years_of_experience}
            onChange={handleFieldChange}
            required
          />
        </label>
        <button onClick={handleUpdatePerson}>Update Person</button>

        </TwoColumnLabelContainer>
    </StyledElementContainer>
  );
};

export default ElementContainer;
