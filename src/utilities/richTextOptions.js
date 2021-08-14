import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { getRichTextEntityLinks } from '@contentful/rich-text-links';
import ReactHtmlParser from "react-html-parser";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactPlayer from 'react-player/lazy'

import { ChakraAwesome } from 'law-centres-design-system'

import {
  Heading,
  Text,
  Image,
  Link,
  Button,
  Container,
  OrderedList,
  UnorderedList,
  ListItem,
  Box
} from "@chakra-ui/react"

function richTextOptions(links) {

  return (
    {
      renderText: text => text.split('\n\n').flatMap((text, i) => [i > 0 && <><br /><br /></>, text]),
      renderNode: {
        [BLOCKS.OL_LIST]: (node, children) => <OrderedList lineHeight="1.8" color="gray.600" mb='6' pt="1" className="fa-ul">{children}</OrderedList>,
        [BLOCKS.UL_LIST]: (node, children) => <UnorderedList lineHeight="1.8" color="gray.600" mb='6' pt="1" className="fa-ul">{children}</UnorderedList>,
        [BLOCKS.LIST_ITEM]: (node, children) => {
          return (
            <ListItem mb="0" pl="0" ml="4" mr="10" listStyleType="none" lineHeight="1.8" fontSize="1.05rem">
              <Text as="span" className="fa-li">
                <ChakraAwesome color="brand.Green" icon={['fas', 'caret-right']} />
              </Text>
              {children}
            </ListItem>
          )
        },
        [BLOCKS.HEADING_1]: (node, children) => <Heading color="gray.700" as="h1" lineHeight="1.3" fontWeight="800" fontSize="2.5rem" mb='5'>{children}</Heading>,
        [BLOCKS.HEADING_2]: (node, children) => <Heading color="gray.700" as="h2" lineHeight="1.4" fontSize="1.75rem" fontWeight="800" mb='6' pt='2'>{children}</Heading>,
        [BLOCKS.HEADING_3]: (node, children) => <Heading color="gray.700" as="h3" fontSize="1.25rem" mb='6' pt="2">{children}</Heading>,
        [BLOCKS.HEADING_4]: (node, children) => <Heading color="gray.700" as="h4" fontSize="1.15rem" mb='5' pt='2'>{children}</Heading>,
        [BLOCKS.HEADING_5]: (node, children) => <Heading color="gray.700" as="h5" fontSize="1.15rem" mb='5' pt='2'>{children}</Heading>,
        [BLOCKS.HEADING_6]: (node, children) => <Heading color="gray.700" as="h6" fontSize="1.15rem" mb='5' pt='2'>{children}</Heading>,
        [BLOCKS.PARAGRAPH]: (node, children) => <Text color="gray.600" mb='5' lineHeight="1.8" fontSize="1.05rem">{children}</Text>,
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
          let entry = links.entries.block.find(i => (i !== null && i.sys.id === node.data.target.sys.id))
          if (!entry) return <></>
          return (
            <Box key={node.data.target.sys.id}>

              {(entry.__typename == "SharepointDocument") &&
                <Box mb="9" mt="10" px="10">
                  <Box type={entry.__typename} content={entry} />
                </Box>
              }

              {((entry.__typename != "SharepointDocument") && (entry.__typename != "CodeEmbed")) &&
                <Box mb="9" mt="10" px="10">
                  <Box type={entry.__typename} content={entry} />
                </Box>
              }

              {(entry.__typename == "CodeEmbed") &&
                <Box mb="7" mt="10">
                  <>{ReactHtmlParser(entry.embed)}</>
                </Box>
              }

            </Box>
          )
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
          let asset = links.assets.block.find(i => i.sys.id === node.data.target.sys.id)
          return (
            <>
              {asset.contentType.includes('image') &&
                <Image
                  mb='5'
                  mt='2'
                  alt={asset.title}
                  src={asset.url} />
              }
              {ReactPlayer.canPlay(asset.url) &&
                <Box pt="5" pb="10">
                  <ReactPlayer controls={true} url={asset.url} />
                </Box>
              }
              {(!asset.contentType.includes('image') && !ReactPlayer.canPlay(asset.url)) &&
                <Button target="_blank" href={asset.url} mb="4">
                  <ChakraAwesome color="brand.Orange" mr="3" icon={['fal', 'download']} />
                  {asset.title}
                </Button>
              }
            </>
          )
        },
        [INLINES.HYPERLINK]: (node, children) => {
          return (
            <>
              {ReactPlayer.canPlay(node.data.uri) &&
                <Container py="5">
                  <ReactPlayer controls={true} url={node.data.uri} />
                </Container>
              }
              {node.data.uri.startsWith('#') ?
                <Link
                  fontWeight="600"
                  onClick={(e) => {
                    e.preventDefault();
                    let heading = Array.from(document.querySelectorAll('h2, h3, h4, h5')).find(el => el.textContent === node.data.uri.replace('#', ''))
                    if (heading) heading.scrollIntoView({ behavior: 'smooth' })
                  }}
                  color="brand.Green">
                  {children}
                </Link>
                :
                <Link
                  target="_blank"
                  href={node.data.uri}
                  color="brand.Green">
                  {children}
                </Link>
              }
            </>
          )
        },
        [INLINES.ASSET_HYPERLINK]: (node, children) => {
          let asset = links.assets.hyperlink.find(i => i.sys.id === node.data.target.sys.id)
          return (
            <>
              {asset &&
                <Text as="span">
                  <Link href={asset.url} size="md" target="_blank" color="brand.Green">
                    <ChakraAwesome
                      mr="1" ml="1"
                      fontSize="xs"
                      sx={{ position: 'relative', top: '-1px' }}
                      color="brand.Green" icon={['fal', 'download']} />
                    {children}
                  </Link>
                </Text>
              }
            </>
          )
        },
        [INLINES.ENTRY_HYPERLINK]: (node, children) => {
          let entry = links.entries.hyperlink.find(i => (i !== null && i.sys.id === node.data.target.sys.id))
          return (
            <>
              {entry &&
                <Button
                  as="a"
                  href={`/${entry.slug}`}>
                  {children}
                </Button>
              }
            </>
          )
        }
      }
    })
};

export default richTextOptions;
