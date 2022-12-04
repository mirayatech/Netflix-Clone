import { theme } from './theme'

export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`
export const flexItemsCenter = `
  display: flex;
  align-items: center; 
`

export const formLayout = `
 display: flex;
  padding: 30px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
 `

export const bannerButtonDesktop = `
  ${flexCenter}
  width: 140px;
  border: none;
  font-size: 1rem;
  font-weight: 700; 
  padding: 8px 10px;
  border-radius: 4px;
  transition: all .2s ease;

  :hover {
    opacity: .8;
  }

  
 `

export const bannerButtonMobile = `
  ${flexCenter}
  width: 95px;
  font-size: .8rem;
  font-weight: 600; 
  padding: 7px 2px;
  border-radius: 4px;
  transition: all .2s ease;
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

export const boxShadow = `
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)`

export const infoButton = `
     padding: 5px;
    margin-right: 5px;
    border-radius: 50%;

    color: ${theme.White};
    border: 2px solid #8e8e8e; 
    ${flexCenter} font-size: 1.2rem;

    :hover {
      opacity: 0.9;
    }`
