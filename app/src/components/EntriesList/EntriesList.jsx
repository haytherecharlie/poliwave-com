import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import * as S from './styles/entriesList.styled'

const EntriesList = () => {
  const { entries } = useSelector(s => ({ entries: s.entries }))

  const renderEntries = () =>
    entries.content.items.map(entry => {
      const { title, slug, author, banner, cta } = entry.fields
      const { file, description } = banner.fields
      const { createdAt, updatedAt } = entry.sys
      const date = createdAt >= updatedAt ? createdAt : updatedAt
      return (
        <Link to={slug} key={slug}>
          <S.Card>
            <S.Title>{title}</S.Title>
            <S.Meta>
              {author} | {format(date, 'MMMM Do YYYY')}
            </S.Meta>
            <S.Banner src={file.url} alt={description} />
            <ReactMarkdown className="entry-markdown" source={cta} />
            <S.ReadMore>Read More..</S.ReadMore>
          </S.Card>
        </Link>
      )
    })

  return entries.status === 'SUCCESS' ? (
    <S.EntriesList>{renderEntries()}</S.EntriesList>
  ) : (
    <div>Loading</div>
  )
}

export default EntriesList
