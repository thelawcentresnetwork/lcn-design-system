import React from 'react'

import {
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Flex,
  Img,
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
      as="article"
      bg='white'
      shadow={{ sm: 'base' }}
      rounded={{ sm: 'lg' }}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ shadow: { sm: 'lg' } }}
      {...linkBoxProps}
    >
      <Flex direction="column">
        {image &&
          <Img height="60" objectFit="cover" src={image} />
        }
        <Flex direction="column" px={{ sm: '6' }} py="5">
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
          <Box>
            {children}
          </Box>
        </Flex>
      </Flex>
    </LinkBox>

  )
}

export default Card
