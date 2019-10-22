import styled from 'styled-components'

export const EntriesList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
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
  padding: 1rem 0;
`

export const Banner = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 1rem;
`

export const ReadMore = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  color: #044a7f;
  font-weight: 400;
  background: #fff;
  border: 1px solid #044a7f;
`
