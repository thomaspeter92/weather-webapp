import React from 'react'
import Nav from './nav'
import Weather from './weather'
import styles from '../styles/layout.module.scss'


function Layout({children}) {

    return (
    <>
        <header>
            <Nav></Nav>
        </header>
        <main className={styles.main}>
            <Weather />
        </main>
    </>
    )
}

export default Layout
