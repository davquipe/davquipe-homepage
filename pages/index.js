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
          Hello, I&apos;m a Front-End developer from Peru!
        </Box>
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
              <Heading as='h2' variant='page-title'>
                David Condori
              </Heading>
              <p>Digital Craftman ( Developer / Desingner )</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
              <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/david.jpg' alt="Profile Image"/>
            </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            David is a Front-End Developer with proven experience in the development 
            in helping companies create and maintain a better code base 
            for reusability. Passionate about learning and development with a desire 
            to apply skills on a larger development. Eager to tackle 
            more complex problems and continue to find ways to maximize user efficiency.
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
              <Link target="_blank">David C Quispe</Link>
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
            Internship in Vitaltec Chile
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            In Consigue Ventas Perú
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Athlete, Music,{' '}
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