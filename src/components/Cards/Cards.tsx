import React from 'react'
import { Box, Text } from '@chakra-ui/react'
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
  downloadFileURL,
  downloadFileTitle,
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    height="100%"
  >
    {image && (
      <Box width="inherit">
        <img alt={alt} src={image} width="100%" height="auto" />
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
      {link && (
        <Text
          as="a"
          href={link}
          lineHeight="1"
          fontFamily="bodyAlternative"
          fontSize="lg"
        >
          {title}
        </Text>
      )}
      {!link && (
        <Text lineHeight="1" fontFamily="bodyAlternative" fontSize="lg">
          {title}
        </Text>
      )}

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
            target="_blank"
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
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    bg={image ? backgroundColor : 'none'}
    height="100%"
  >
    <Box width="inherit">
      <img src={image} alt={alt} width="100%" height="auto" />
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
        {link && (
          <Text
            as="a"
            href={link}
            lineHeight="1.5"
            fontFamily="bodyAlternative"
            fontSize="sm"
            pl="20px"
            mt="0.3rem"
            mr="1rem"
          >
            {title}
          </Text>
        )}
        {!link && (
          <Text
            lineHeight="1.5"
            fontFamily="bodyAlternative"
            fontSize="sm"
            pl="20px"
            mt="0.3rem"
            mr="1rem"
          >
            {title}
          </Text>
        )}
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
              target="_blank"
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
