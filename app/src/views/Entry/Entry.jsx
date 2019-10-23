import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import * as S from './styles/entry.styled'

const Entry = ({ match: { params }, location: {pathname}, history }) => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { entries } = useSelector(s => ({ entries: s.entries }))
  const renderEntry = () => {
    const entry = entries.content.items.find(item => item.fields.slug === params.entry)

    if (entry) {
      const { title, author, cta, banner, body } = entry.fields
      const { file, description } = banner.fields
      const { createdAt, updatedAt } = entry.sys
      const date = createdAt >= updatedAt ? createdAt : updatedAt
      return (
        <S.Card>
          <Helmet>
            <title>{`Poliwave | ${title}`}</title>
            <link rel="canonical" href={`https://poliwave.com${pathname}`} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={file.url} />
            <meta property="og:description" content={cta} />
            <meta property="og:url" content={`https://poliwave.com${pathname}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
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
