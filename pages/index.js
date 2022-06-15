import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
// import Image from "next/image"

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
        Hello, I&apos;m a FrontEnd developer based in Peru!
      </Box>
      <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              David Condori
            </Heading>
            <p>Digital Craftman ( Artist / Developer / Desingner )</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
            <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/takuya.jpg' alt="Profile Image"/>
          </Box>
      </Box>
    </Container>
  )
}

export default Page