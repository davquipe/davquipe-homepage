import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>Not Found</Heading>
            <Text>The Page you&apos;re looking for was not found.</Text>

            <Divider my={6} />
            <Box my={6} align='center'>
                <NextLink href='/' passHref>
                    <Button colorScheme='teal'>Back to Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound