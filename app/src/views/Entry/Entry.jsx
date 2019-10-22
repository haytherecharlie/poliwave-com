import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import * as S from './styles/entry.styled'

const Entry = ({ match: { params }, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { entries } = useSelector(s => ({ entries: s.entries }))

  const renderEntry = () => {
    const entry = entries.content.items.find(item => item.fields.slug === params.entry)

    if (entry) {
      const { title, author, banner, body } = entry.fields
      const { file, description } = banner.fields
      const { createdAt, updatedAt } = entry.sys
      const date = createdAt >= updatedAt ? createdAt : updatedAt
      return (
        <S.Card>
          <S.Title>{title}</S.Title>
          <S.Meta>
            {author} | {format(date, 'MMMM Do YYYY')}
          </S.Meta>
          <S.Banner src={file.url} alt={description} />
          <ReactMarkdown className="entry-markdown" source={body} />
          <S.GoBack onClick={() => history.goBack()}>&lsaquo; Go Back</S.GoBack>
        </S.Card>
      )
    }
    return <div>Not Found</div>
  }

  return entries.status === 'SUCCESS' ? <div>{renderEntry()}</div> : <div>Loading</div>
}

export default withRouter(Entry)
