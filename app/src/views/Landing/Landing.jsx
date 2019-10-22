import React from 'react'
import { Helmet } from 'react-helmet'
import EntriesList from 'components/EntriesList/EntriesList'
import * as S from './styles/landing.styled'

const Landing = () => (
  <S.Wrapper>
    <Helmet>
      <title>Poliwave | Politics For a New Generation</title>
      <link rel="canonical" href="https://poliwave.com" />
      <meta property="og:title" content="Poliwave | Politics For a New Generation" />
      <meta property="og:image" content="https://github.com/haytherecharlie/poliwave.com/blob/master/app/src/assets/images/poliwave.jpg" />
      <meta property="og:description" content="Poliwave brings to market a refreshed portfolio of political articles and thought pieces helping you to understand the modern political environment." />
      <meta property="og:url" content="https://poliwave.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <EntriesList />
  </S.Wrapper>
)

export default Landing
