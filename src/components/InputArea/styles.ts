import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  display: flex;
  gap: 20px;
  align-items: flex-end;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 6px;
  margin-top: 5px;
  height: 15px;
`;

export const Select = styled.select`
  padding: 6px;
  margin-top: 5px;
`;

export const Button = styled.button`
  background-color: #008081;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.5s;

  :hover {
    background-color: #47a3a4;
  }
`;