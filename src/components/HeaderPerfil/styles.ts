import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-items: center;
    gap: 16px;
  }
`

export const Text = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  justify-self: start; /* alinha à esquerda dentro do grid */
  text-align: left;
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  color: ${cores.branco};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`

export const TextBanner = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin: 0 0 8px;
`

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  width: 672px;
`
export const Cart = styled.h3`
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;
  color: ${cores.rosa};
  justify-self: end; /* alinha à direita dentro do grid */
  text-align: right;
  &:hover {
    text-decoration: underline;
  }
`
