import React, { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { PageLoader } from 'widgets/PageLoader'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
