import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/Logo/Logo'
import * as S from './styles/header.styled'

const Header = () => (
  <S.Header>
    <S.HeaderContent>
      <Link to="/">
        <Logo size={40} />
      </Link>
    </S.HeaderContent>
  </S.Header>
)

export default Header
