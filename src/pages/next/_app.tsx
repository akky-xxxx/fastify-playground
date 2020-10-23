/**
 * import node_modules
 */
import App, { AppInitialProps } from "next/app"
import Head from "next/head"
import React, { Fragment } from "react"

/**
 * import others
 */
import "react-datepicker/dist/react-datepicker.css"

/**
 * main
 */
class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
