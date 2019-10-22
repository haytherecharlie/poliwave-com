import styled from 'styled-components'

export const EntriesList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;
`

export const Card = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.span`
  font-weight: 900;
  text-transform: uppercase;
  color: #082d3d;
  font-family: cocogoose;
  font-size: 3rem;
  line-height: 3rem;
`

export const Meta = styled.span`
  font-size: 14px;
  color: #666;
`

export const Banner = styled.img`
  height: auto;
  max-width: 80%;
  width: auto;
  margin: 0.5rem auto;
`

export const ReadMore = styled.div`
  font-size: 16px;
  color: #16b9ff;
`
