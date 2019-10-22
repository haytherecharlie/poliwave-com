import React from 'react'
import Logo from 'components/Logo/Logo'
import * as S from './styles/footer.styled'

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <Logo size={100} />
      <S.Copyright>&copy; 2019 Poliwave.com</S.Copyright>
    </S.FooterContent>
  </S.Footer>
)

export default Footer
