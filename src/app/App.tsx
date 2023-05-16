import React, { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import {
  getUserIsInitialized,
  userActions,
} from 'entities/User'
import { AppRouter } from 'app/providers/router'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { PageLoader } from 'widgets/PageLoader'

const App = () => {
  const dispatch = useAppDispatch()
  const isUserInitialized = useSelector(
    getUserIsInitialized
  )

  useEffect(() => {
    dispatch(userActions.setAuthDataFromLocalStorage())
  }, [dispatch])

  return (
    <div className='app'>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        {isUserInitialized && <AppRouter />}
      </Suspense>
    </div>
  )
}

export default App
