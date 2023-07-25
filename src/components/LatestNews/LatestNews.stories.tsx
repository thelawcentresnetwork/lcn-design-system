import React from 'react'
import { Meta } from '@storybook/react'
import LatestNews, { NewsLatestProps } from './LatestNews'

const dummyArticles = [
  {
    title: 'News Home',
    slug: 'news',
    articleImage: null,
    heroDescription:
      'A description of the news page should be placed over here',
    overrideDate: '2023-07-25T00:00:00.000+01:00',
  },
  {
    title: 'Vivamus egestas eros tincidunt metus posuere aliquam. ',
    slug: 'news-item-3',
    heroDescription: 'A hero description to test formatting',
    overrideDate: '2023-07-24T00:00:00.000+01:00',
    articleImage: {
      url: 'https://images.ctfassets.net/y26owwfe9yxn/iwapxsmK1BiSNxpRaPBMB/b78d5ebaac4eb1ad766e1e51d5fadb30/newsbodyimage.png',
    },
  },
  {
    title: 'Law Centres join call for nationwide rent freeze',
    slug: 'news-home-2',
    heroDescription: null,
    overrideDate: '2023-07-19T00:00:00.000+01:00',
    articleImage: {
      url: 'https://images.ctfassets.net/y26owwfe9yxn/iwapxsmK1BiSNxpRaPBMB/b78d5ebaac4eb1ad766e1e51d5fadb30/newsbodyimage.png',
    },
  },
]
export default {
  title: 'News Latest',
  component: LatestNews,
  args: {
    articles: dummyArticles,
    backgroundColor: 'brand.brightPink',
    cardBackgroundColor: 'brand.brightTeal',
    headingColor: 'brand.white.500',
    cardTextColor: '',
  },
} as Meta<NewsLatestProps>

export const Default = (args: NewsLatestProps) => <LatestNews {...args} />
