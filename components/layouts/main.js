import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="David's homepage" />
            <meta name="author" content="David Condori" />
            <meta name="author" content="davquipe" />
            <meta name="twitter:title" content="David Condori" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@davquipe" />
            <meta name="twitter:creator" content="@davquipe" />
            <meta name="twitter:image" content="https://media-exp1.licdn.com/dms/image/C5616AQE_ITyRTEgeEQ/profile-displaybackgroundimage-shrink_350_1400/0/1654401313877?e=1661385600&v=beta&t=bfyZpm-aRKsSHp-cGmDwqQ4Hq0mGgkqPUI8uRT0_PCc" />
            <meta property="og:site_name" content="David Condori" />
            <meta name="og:title" content="David Condori" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C5616AQE_ITyRTEgeEQ/profile-displaybackgroundimage-shrink_200_800/0/1654401313877?e=1661385600&v=beta&t=Ab7nL8CpZF6SK6KuNJx0qcjSW0RymidsfE5egeihq5Y" />
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