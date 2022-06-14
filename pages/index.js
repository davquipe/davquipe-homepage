// import React from 'react'

import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} mb={6} aling='center'>
        Hello, I&apos;m a FrontEnd developer based in Peru!
      </Box>
      <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              David Condori
            </Heading>
            <p>Digital Craftman ( Artist / Developer / Desingner )</p>
          </Box>
      </Box>
    </Container>
  )
}

export default Page