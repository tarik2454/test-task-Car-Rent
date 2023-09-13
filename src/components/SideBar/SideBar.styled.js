import Select from 'react-select';
import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const StyledInput = styled(Select)`
  &.css-13cymwt-control {
    width: 224px;
    height: 48px;
    border-radius: 40px;
  }
`;

export const StyledName = styled.div`
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;
