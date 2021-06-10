import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/404.module.css'

export default function NotFound() {
    return (
        <Layout>
            <div className={styles.error}>
                <h2>404</h2>
                <p>Sorry, that page doesn't exist</p>
                <Link className={styles.btn} to="/">Back to Home Page</Link>
            </div>
        </Layout>
    )
}
