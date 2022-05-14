import styled from 'styled-components';

export default function Button({ onClick, buttonType, children }) {
  return (
    <ButtonStyle onClick={onClick} buttonType={buttonType}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  background-color: #9f7ce8;
  border-radius: 100%;
  border: 5px solid #22ca51;
  width: 70px;
  height: 70px;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 0.2rem;
  font-size: 12px;
  color: white;
`;
