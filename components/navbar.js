import Logo from './logo'
import NextLink from 'next/link'
import { Container, Box, Link, useColorModeValue, Flex, Heading, Stack, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { RiGithubLine } from 'react-icons/ri';

const LinkItem = ({ href, path, children, target, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')


    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                wrap='wrap'
                align='center'
                justify='space-between'
            >
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href='/posts' path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem
                        target='_blank'
                        href='https://github.com/davquipe/davquipe-homepage'
                        path={path}
                        display='inline-flex'
                        alignItems='center'
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <RiGithubLine />
                        Source
                    </LinkItem>
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' arial-label='Options' />
                            <MenuList>
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href='/works' passHref>
                                    <MenuItem as={Link}>
                                        Woks
                                    </MenuItem>
                                </NextLink>
                                <NextLink href='/posts' passHref>
                                    <MenuItem as={Link}>
                                        Posts
                                    </MenuItem>
                                </NextLink>
                                <NextLink href='https://github.com/davquipe/davquipe-homepage' passHref>
                                    <MenuItem as={Link}>
                                        View Source
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar