import { useState } from 'react'
import React from 'react'
import { ExtendedSectionLeft } from '../../atoms/Section/Section'
import { Card } from '../Cards/Cards'
import Megaphone from '../../assets/megaphone.png'

import {
  Box,
  Text,
  Heading,
  useMediaQuery,
  VisuallyHidden,
  Container,
} from '@chakra-ui/react'

interface Article {
  fields: {
    title: string
    slug: string
    heroBodyTitle: string
    articleImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
  sys: {
    createdAt: string
  }
}

export interface NewsLatestProps {
  articles: Article[]
  backgroundColor?: string
  cardBackgroundColor?: string
  headingColor?: string
  cardTextColor?: string
}

const LatestNews: React.FC<NewsLatestProps> = ({
  articles,
  backgroundColor,
  cardBackgroundColor,
  headingColor,
  cardTextColor,
}) => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0] || null)
  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)')
  return (
    <ExtendedSectionLeft
      py="8rem"
      display="flex"
      bg={backgroundColor}
      color={cardTextColor}
    >
      <Container
        maxWidth="1250px"
        display="flex"
        position="relative"
        justifyContent="center"
        pt={{ base: '', sm: '2rem', lg: '12rem' }}
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          width={{ base: '50%', lg: '' }}
        >
          <img src={Megaphone} width="100%" height="auto" alt="alt text" />
        </Box>

        {isLargerThan1250 && (
          <Desktop
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
            articles={articles}
            cardBackgroundColor={cardBackgroundColor}
            headingColor={headingColor}
            cardTextColor={cardTextColor}
          />
        )}

        {!isLargerThan1250 && (
          <Mobile headingColor={headingColor} articles={articles} />
        )}
      </Container>
    </ExtendedSectionLeft>
  )
}
const Desktop: React.FC<
  NewsLatestProps & {
    selectedArticle: Article | null
    setSelectedArticle: React.Dispatch<React.SetStateAction<Article | null>>
  }
> = ({
  selectedArticle,
  articles,
  setSelectedArticle,
  cardBackgroundColor,
  headingColor,
  cardTextColor,
}) => (
  <>
    <Box width="100%" maxWidth="629px">
      <Heading as="h2" mb="2rem" color={headingColor} fontSize="2xl">
        Latest News
      </Heading>
      <Box
        bg={cardBackgroundColor}
        width="100%"
        minHeight="914px"
        position="relative"
        color={cardTextColor}
      >
        <Box width="inherit">
          <img
            src={
              'http:' + selectedArticle?.fields?.articleImage.fields.file.url
            }
            alt=""
            height="auto"
            width="100%"
          />
        </Box>
        <Box p="2rem" maxWidth="445px">
          <Text
            as="a"
            href={'/news/' + selectedArticle?.fields?.slug}
            fontFamily="bodyAlternative"
            fontSize="lg"
            mb="1rem"
          >
            {selectedArticle?.fields?.title}
          </Text>
          <Text pr="2rem" fontSize="2xs">
            {selectedArticle?.fields?.heroBodyTitle}
          </Text>
        </Box>
      </Box>
    </Box>

    <Box ml="-60px" mt="105px" width="50%">
      <Box maxWidth="611px" width="100%">
        <VisuallyHidden>
          {' '}
          Select one to view more about the article
        </VisuallyHidden>

        {articles.slice(0, 3).map((article, id) => {
          const isSelected = selectedArticle === article
          return (
            <Box
              onClick={() => {
                setSelectedArticle(article)
              }}
              as="button"
              display="block"
              key={id}
              bg={isSelected ? 'brand.legacyTeal' : 'brand.white.500'}
              mt="2.5rem"
              p="2rem"
              minHeight="171px"
              width="100%"
              textAlign="start"
              position="relative"
              color={isSelected ? 'brand.white.500' : 'brand.darkBlue'}
              _hover={{
                bg: isSelected ? 'brand.legacyTeal' : 'brand.white.400',
              }}
            >
              <VisuallyHidden>
                {isSelected && 'Currently selected'}
              </VisuallyHidden>
              <Text fontSize="3xs" mb="1rem">
                {article.sys.createdAt}
              </Text>
              <Text fontSize="2xs">{article.fields?.title}</Text>
            </Box>
          )
        })}
      </Box>
    </Box>
  </>
)
const Mobile: React.FC<NewsLatestProps> = ({ headingColor, articles }) => (
  <Box>
    <Heading
      as="h2"
      mb="2rem"
      color={headingColor}
      fontSize="2xl"
      position="relative"
    >
      Latest News
    </Heading>

    <Box
      rowGap="2.5rem"
      display="flex"
      justifyContent={{ base: 'center', xl: 'flex-start' }}
      columnGap="clamp(1.25rem, calc(0.82rem + 2.17vw), 2.50rem)"
      flexWrap="wrap"
    >
      {articles &&
        articles.slice(0, 3).map((article) => {
          return (
            <Card
              key={article.fields.slug}
              title={article.fields?.title}
              image={
                article.fields?.articleImage
                  ? 'https:' + article.fields?.articleImage.fields.file.url
                  : ''
              }
              body={article.fields?.heroBodyTitle}
              color="brand.darkBlue"
              linkText={`Read about ${article.fields?.title}`}
              link={'/news/' + article.fields?.slug}
              backgroundColor="brand.brightTeal"
              type="short"
            />
          )
        })}
    </Box>
  </Box>
)
export default LatestNews
