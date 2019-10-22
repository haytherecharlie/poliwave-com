import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import Landing from 'views/Landing/Landing'
import Entry from 'views/Entry/Entry'
import { addEntries } from 'redux/store'
import { Page } from 'assets/styles/App.styled'

const Router = () => {
  const { entries } = useSelector(s => ({ entries: s.entries }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (entries.status !== 'SUCCESS') dispatch(addEntries())
  }, [entries.status, dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Page>
        <Route exact path="/" component={Landing} />
        <Route path="/:entry" component={Entry} />
      </Page>
    </BrowserRouter>
  )
}

export default Router
