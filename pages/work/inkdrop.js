import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Inkdrop">
        <Container>
            <Title>
                Name Work <Badge>Year-</Badge>
            </Title>
            <P>
                Hello, this site is building.
            </P>

        </Container>
    </Layout>
)

export default Work