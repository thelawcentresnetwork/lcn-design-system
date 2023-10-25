import { useState } from 'react'
import React from 'react'
import { Section } from '../../atoms/Section/Section'
import { Card } from '../Cards/Cards'

import {
  Box,
  Text,
  Heading,
  useMediaQuery,
  VisuallyHidden,
  Container,
} from '@chakra-ui/react'

interface Article {
  title: string
  slug: string
  heroDescription: string
  articleImage: {
    url: string
    description: string
  }

  overrideDate: string
}

export interface NewsLatestProps {
  articles: Article[]
  backgroundColor?: string
  cardBackgroundColor?: string
  headingColor?: string
  cardTextColor?: string
  backgroundImage?: string
}

const getDayOfMonthSuffix = (day: number) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const formatDate = (date: string) => {
  const dateWithoutTime = new Date(date?.split('T')[0]);

  const day = dateWithoutTime.getDate();
  const month = dateWithoutTime.toLocaleString('default', { month: 'long' });
  const year = dateWithoutTime.getFullYear();

  const suffix = getDayOfMonthSuffix(day);

  return `${dateWithoutTime.toLocaleDateString('en', { weekday: 'long' })}, ${day}${suffix} ${month} ${year}`;
}

const LatestNews: React.FC<NewsLatestProps> = ({
  articles,
  backgroundColor,
  backgroundImage,
  cardBackgroundColor,
  headingColor,
  cardTextColor,
}) => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0] || null)
  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)')
  return (
    <Section
      display="flex"
      position="relative"
      bg={backgroundColor}
      color={cardTextColor}
      pb="8rem"
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '50px',
        width: '70%',
        right: '0px',
        top: '-45px',
      }}
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
          top="17px"
          right="-7px"
          width={{ base: '40%', lg: '' }}
        >
          <img src={backgroundImage} width="80%" height="auto" alt="" />
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
    </Section>
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
        minHeight="800px"
        position="relative"
        color={cardTextColor}
      >
        <Box width="inherit">
          <img
            src={selectedArticle?.articleImage?.url}
            alt={selectedArticle?.articleImage?.description}
            height="auto"
            width="100%"
          />
        </Box>
        <Box p="2rem" maxWidth="550px">
          <Text
            as="a"
            href={'/news/' + selectedArticle?.slug}
            fontFamily="bodyAlternative"
            lineHeight={1.1}
            fontSize="lg"
            mb="2rem"
          >
            {selectedArticle?.title}
          </Text>
          <Text pt="2rem" pr="1rem" fontSize="2xs">
            {selectedArticle?.heroDescription}
          </Text>
        </Box>
      </Box>
    </Box>

    <Box ml="-60px" mt="105px" width="50%">
      <Box maxWidth="611px" width="100%">
        <VisuallyHidden>
          Select one to view more about the article
        </VisuallyHidden>

        {articles?.map((article, id) => {
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
                {formatDate(article.overrideDate)}
              </Text>
              <Text fontSize="2xs">{article.title}</Text>
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
        articles?.map((article) => {
          return (
            <Card
              key={article.slug}
              title={article.title}
              image={article.articleImage ? article.articleImage?.url : ''}
              alt={
                article.articleImage ? article.articleImage?.description : ''
              }
              body={article.heroDescription}
              color="brand.darkBlue"
              link={'/news/' + article.slug}
              backgroundColor="brand.brightTeal"
              type="short"
            />
          )
        })}
    </Box>
  </Box>
)
export default LatestNews
