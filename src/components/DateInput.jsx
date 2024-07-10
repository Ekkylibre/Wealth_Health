import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput({ id, onChange, value }) {
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);

  const handleChange = date => {
    setSelectedDate(date);
    onChange({ target: { id, value: date } });
  };

  return (
    <StyledDatePickerWrapper>
      <StyledDatePicker
        id={id}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
      />
    </StyledDatePickerWrapper>
  );
}

export default DateInput;

const StyledDatePickerWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;