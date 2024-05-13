import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { IconDownloadFile } from '../../atoms/Icons/Icons'
export interface DownloadButtonProps {
  downloadFileURL: string
  downloadFileTitle: string
}
export interface CardProps {
  title: string
  titleLink?: string
  body: string
  link?: string
  linkText?: string
  type: string
  backgroundColor: string
  color: string
  image?: string
  newTab?: boolean
  alt?: string
  downloadFileURL?: string
  downloadFileTitle?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  body,
  link,
  type,
  backgroundColor,
  color,
  image,
  alt,
  newTab,
  downloadFileURL,
  downloadFileTitle,
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    width="100%"
    height="100%"
    {...(link && {as: "a", href: link, target: newTab ? '_blank' : '_self'})}
  >
    {image && (
      <Box width="inherit">
        <Image alt={alt} src={image} width="100%" height="100%" objectFit="cover" />
      </Box>
    )}

    <Box
      padding="25px 20px 20px 20px"
      width="inherit"
      height="100%"
      bg={backgroundColor}
      display="flex"
      flexDirection="column"
    >
        <Text lineHeight="1" fontFamily="bodyAlternative" fontSize="lg" display="inline-block">
          {title}
        </Text>
      <Text mt="1.5rem" lineHeight="1.3" fontSize="2xs">
        {body}
      </Text>

      {downloadFileURL && (
        <>
          <Box
            alignItems="center"
            as="a"
            mt="auto"
            mb="0"
            pt="20px"
            display="flex"
            href={downloadFileURL}
            download={downloadFileTitle}
            target={newTab ? "_blank" : "_self"}
          >
            <Text max-width="20ch" mr="1.5rem" fontSize="3xs">
              {'Download ' + downloadFileTitle}
            </Text>
            <IconDownloadFile />
          </Box>
        </>
      )}
    </Box>
  </Box>
)

export const Conference2024Card: React.FC<CardProps> = ({
  title,
  body,
  link,
  backgroundColor,
  color,
  image,
  alt,
  newTab,
  downloadFileURL,
  downloadFileTitle,
}) => (
  <Box
    maxWidth={'350px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    width="100%"
    height="100%"
    {...(link && {as: "a", href: link, target: newTab ? '_blank' : '_self'})}
  >
    {image && (
      <Box width="inherit">
        <Image alt={alt} src={image} width="100%" height="100%" objectFit="cover" />
      </Box>
    )}

    <Box
      padding="25px 20px 20px 20px"
      width="inherit"
      height="100%"
      bg={backgroundColor}
      display="flex"
      flexDirection="column"
    >
        <Text fontFamily="bigSubtitleConference2024" fontSize="bigSubtitleConference2024" lineHeight="45.6px" display="inline-block">
          {title}
        </Text>
      <Text mt={title ? "1.5rem" : "0rem"} fontFamily="smallSubtitleConference2024" fontSize="smallSubtitleConference2024" lineHeight="38.4px">
        {body}
      </Text>

      {downloadFileURL && (
        <>
          <Box
            alignItems="center"
            as="a"
            mt="auto"
            mb="0"
            pt="20px"
            display="flex"
            href={downloadFileURL}
            download={downloadFileTitle}
            target={newTab ? "_blank" : "_self"}
          >
            <Text max-width="20ch" mr="1.5rem" fontSize="3xs">
              {'Download ' + downloadFileTitle}
            </Text>
            <IconDownloadFile />
          </Box>
        </>
      )}
    </Box>
  </Box>
)

export const CardWithExtended: React.FC<CardProps> = ({
  type,
  title,
  body,
  link,
  alt,
  image,
  backgroundColor,
  color,
  downloadFileURL,
  downloadFileTitle,
  newTab
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    bg={image ? backgroundColor : 'none'}
    height="100%"
    {...(link && {as: "a", href: link, textDecoration: 'none', target: newTab ? "_blank" : "_self"})}
  >
    <Box width="inherit" flex="1">
      <Image src={image} alt={alt} width="100%" height="100%" objectFit="cover" />
    </Box>
    <Box
      position="relative"
      width="100%"
      flex="1"
      display="flex"
      flexDirection="column"
      bottom={image ? '55px' : '0'}
      color={color}
    >
      <Box height="auto" width="82%" bg={backgroundColor}>
          <Text
            lineHeight="1.5"
            fontFamily="bodyAlternative"
            fontSize="sm"
            pl="20px"
            mt="0.3rem"
            mr="1rem"
            textDecoration="underline"
            display="inline-block"
          >
            {title}
          </Text>
      </Box>

      <Box
        padding="25px 20px 20px 20px"
        minHeight="210px"
        bg={backgroundColor}
        pl="20px"
        display="flex"
        flexDirection="column"
        color={color}
        position="relative"
        flexGrow="1"
      >
        <Text fontSize="2xs">{body}</Text>

        {downloadFileURL && (
          <>
            <Box
              alignItems="center"
              as="a"
              mt="auto"
              mb="0"
              pt="20px"
              display="flex"
              href={downloadFileURL}
              download={downloadFileTitle}
              target={newTab ? "_blank" : "_self"}
              color={color}
            >
              <Text max-width="20ch" mr="1.5rem" fontSize="3xs">
                {'Download ' + downloadFileTitle}
              </Text>
              <IconDownloadFile />
            </Box>
          </>
        )}
      </Box>
    </Box>
  </Box>
)
