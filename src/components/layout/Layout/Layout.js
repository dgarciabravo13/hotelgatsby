import * as React from "react"
import { Helmet } from "react-helmet"
import Header from "../../organisms/Header/Header"
import { ThemeProvider } from "styled-components"
import theme from "../../../styles/theme"
import GlobalStyle from "../../../styles/globals"
import Footer from "../../organisms/Footer/Footer"
import { SCLayout } from "./Layout.style"
import useSeo from "../../../hooks/useSeo"

const Layout = props => {

  const seo = useSeo();

  const {siteName, fallbackSeo:{description, title}} = seo;



  return (
    <SCLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        {props.children}
        <Footer title={title} />
      </ThemeProvider>
    </SCLayout>
  )
}

export default Layout
