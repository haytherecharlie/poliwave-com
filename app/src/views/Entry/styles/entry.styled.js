import styled from 'styled-components'

export const Card = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Title = styled.span`
  font-weight: 900;
  color: #082d3d;
  font-family: cocogoose;
  font-size: 3rem;
  line-height: 3rem;
`

export const Meta = styled.span`
  font-size: 14px;
  color: #666;
  padding: 1rem 0;
`

export const Banner = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 1rem;
`

export const GoBack = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  color: #044a7f;
  font-weight: 400;
  background: #fff;
  border: 1px solid #044a7f;
`
