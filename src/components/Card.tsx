import React from 'react'

import {
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Flex,
  Img,
  Spacer,
  Heading,
  Box
} from "@chakra-ui/react"

interface CardProps extends LinkBoxProps {
  /** Link overlayed on entire card, if title included */
  link?: string,
  /** Title of card, must be included for link overlays to work */
  title?: string,
  /** URL to source to use as hero image */
  image?: string
}

function Card({ link, image, title, children, ...linkBoxProps }: CardProps) {

  return (

    <LinkBox
      as={Flex}
      bg='white'
      shadow={{ sm: 'base' }}
      rounded={{ sm: 'lg' }}
      overflow="hidden"
      transition="all 0.2s"
      direction="column"
      _hover={{ shadow: { sm: 'lg' } }}
      {...linkBoxProps}
    >
      {image &&
        <Img height="60" objectFit="cover" src={image} />
      }
      <Box px={{ sm: '6' }} pt="5" flexGrow={0}>
        {(link && title) &&
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={link}>{title}</LinkOverlay>
          </Heading>
        }
        {(!link && title) &&
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            {title}
          </Heading>
        }
      </Box>
      <Flex
        px={{ sm: '6' }}
        pt="0"
        pb="7"
        direction='column'
        justify='space-between'
        flexGrow={3}>
        {children}
      </Flex>
    </LinkBox>

  )
}

export default Card
