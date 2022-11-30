import { theme } from './theme'

export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const formLayout = `
 display: flex;
  padding: 30px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
 `

export const inputLayout = `
  width: 335px;
  border: none;
  margin: 8px 0;  
  padding: 10px;
  font-size: 1rem;
  border-radius: 2px;
  color: ${theme.White};
    ::placeholder {
        color: ${theme.GreyText};
      }
`
