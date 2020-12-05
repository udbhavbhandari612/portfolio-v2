import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import Loading from '../../components/loading'
import Navigation from '../../components/navigation'
import './home.scss'

const AboutMe = lazy(() => import('../about-me/aboutMe'))
const Landing = lazy(() => import('../landing/landing'))
const NotFound = lazy(() => import('../not-found/not-found'))
const Projects = lazy(() => import('../projects/projects'))

const timingOffset = 1.2

function Home() {
    const loc = useLocation()
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        handleLoading()
    }, [loc])

    const handleLoading = () => {
        setAnimating(true)
        setTimeout(() => {
            setAnimating(false)
        }, 1200);
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navigation {...{ timingOffset }} />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path='/' exact render={() => <Landing {...{ timingOffset }} />} />
                    <Route path='/about-me' exact render={() => <AboutMe {...{ timingOffset }} />} />
                    <Route path='/projects' exact render={() => <Projects {...{ timingOffset }} />} />
                    <Route path='/404' component={NotFound} />
                    <Route path='*' children={<Redirect to='/404' />} />
                </Switch>
            </Suspense>
            {
                animating &&
                (<Loading />)
            }
        </div>
    )
}

export default Home
