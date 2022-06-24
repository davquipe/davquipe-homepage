import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>David Condori | Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main