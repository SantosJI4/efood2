import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFood = styled.div`
    padding: 8px;
    background-color: ${cores.rosa};
    width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    
    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0; 
    }
`

export const ImagemFood = styled.img`
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
`

export const TitleFood = styled.h4`
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    color: ${cores.bege};
`

export const DescriptionFood = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.bege};
    margin-bottom: 8px;
`
export const StyledButton = styled.button`
    background-color: ${cores.bege};
    color: ${cores.rosa};
    cursor: pointer;
    width: 100%;
    border: none;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-top: auto;
`