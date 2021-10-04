import React from 'react'

import {
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Flex,
  Img,
  Spacer,
  Heading,
  Box,
  Collapse,
  Button,
  useDisclosure
} from "@chakra-ui/react"

//@ts-ignore
import ChakraAwesome from '../../src/utilities/ChakraAwesome';

interface CardProps extends LinkBoxProps {
  /** Link overlayed on entire card, if title included */
  link?: string,
  /** Title of card, must be included for link overlays to work */
  title?: string,
  /** URL to source to use as hero image */
  image?: string,
  /** If this card can be collasped by the user */
  collapsable?: boolean
}

function Card({ link, image, title, collapsable, children, ...linkBoxProps }: CardProps) {

  const { isOpen, onToggle } = useDisclosure()

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

      {collapsable &&
        <Button
          variant="link"
          onClick={onToggle}
          justify="space-between"
          fontSize="md"
          fontWeight="700"
          alignItems="left"
          pl="6"
          pr="6"
          justifyContent="space-between"
          _focus={{ outline: 0 }}
          _active={{ outline: 0 }}
          _hover={{ textDecoration: 'none', color: 'brand.Green' }}
          color="gray.800"
          py="3"
          fontFamily="Poppins, sans-serif"
          rightIcon={<ChakraAwesome icon="angle-down" />}>
          {title}
        </Button>
      }

      {!collapsable &&
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
      }

      <Collapse in={isOpen || !collapsable} animateOpacity>
        <Flex
          px={{ sm: '6' }}
          pt="0"
          pb="7"
          direction='column'
          justify='space-between'
          flexGrow={3}>
          {children}
        </Flex>
      </Collapse>

    </LinkBox>

  )
}

export default Card
