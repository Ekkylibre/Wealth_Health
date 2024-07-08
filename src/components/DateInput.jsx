import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput() {
  const [selectedDate, setStartDate] = useState(null);

  return (
    <StyledDatePickerWrapper>
      <StyledDatePicker
        selected={selectedDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
    </StyledDatePickerWrapper>
  );
}

export default DateInput;

// Styles with Styled Components
const StyledDatePickerWrapper = styled.div`
  width: 100%; /* Prend la même largeur que le conteneur parent */
  margin-bottom: 1rem; /* Marge en bas pour l'espacement entre les champs */
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%; /* Prend la même largeur que le conteneur parent */
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  /* Adaptation pour être aligné avec les autres champs */
  display: block;
`;