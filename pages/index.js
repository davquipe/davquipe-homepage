import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Heading, Image, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio"
import { RiGithubLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import Layout from "../components/layouts/article";
// import Image from "next/image"

const Page = () => {
  return (
    <Layout>
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
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            David is a freelance and a full-stack developer based in San Antoon with a
            passion for building digital services/stuff he wants. He has a knack
            for all things launching products, from planning and designing all the
            way to solving real-life problems with code. When not online, he loves
            hanging out with his camera. Currently, he is living off of his own
            product called{' '}
            <NextLink href="/works/" passHref scroll={false}>
              <Link>Inkdrop</Link>
            </NextLink>
            . He publishes content for marketing his products and his YouTube
            channel called &quot;
            <NextLink href="https://www.youtube.com/" passHref>
              <Link target="_blank">Dev as Life</Link>
            </NextLink>
            &quot; has more than 100k subscribers.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              1999
            </BioYear>
              Born in San Anton (Puno), Peru.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Bachelor Program at the Faculty of Engineering and 
            Architecture of the Academic School of Systems Engineering at the 
            Universidad Peruana Union
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Yahoo! Peru
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as a freelancer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link href="https://illust.odoruinu.net/" target="_blank">
              Drawing
            </Link>
            , Playing Scoccer,{' '}
            <Link href="https://500px.com/p/craftzdog" target="_blank">
              Photography
            </Link>
            , IA, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/davquipe" target="_blank">
                <Button 
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<RiGithubLine />}
                >
                  @davquipe
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/davquipe" target="_blank">
                <Button 
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<RiTwitterLine />}
                >
                  @davquipe
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/davquipe" target="_blank">
                <Button 
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<RiInstagramLine />}
                >
                  @davquipe
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page