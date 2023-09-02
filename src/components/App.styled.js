import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
      
       margin:0;

       padding:0;

       box-sizing:border-box;

       font-family: 'Droid Sans' sans-serif;
         
       }`;

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-image: linear-gradient(
      rgba(50, 47, 66, 0.2),
      rgba(50, 47, 66, 0.2) 100%
    ),
`;

export const TitleOne = styled.h1`
  font-size: 32px;
  color: rgba(50, 50, 50, 0.5);
  border-radius: 17px;
  padding: 0 20px;
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
`;

export const TitleContacts = styled.h2`
  font-size: 32px;
  color: rgba(50, 50, 50, 0.5);
  border-radius: 17px;
  padding: 0 20px;
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
`;