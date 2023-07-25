import React from 'react'
import { Meta } from '@storybook/react'
import LatestNews, { NewsLatestProps } from './LatestNews'

const dummyArticles = [
  {
    fields: {
      title: 'Dummy Article 1',
      slug: 'https://www.google.com',
      heroBodyTitle: 'This is the first dummy article',
      articleImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/y26owwfe9yxn/6UWcUTFJVt8att4XssKOHu/12886f6f0fcfc91cc922cb9f37dded5c/newsimage.png',
          },
        },
      },
    },
    sys: {
      createdAt: '2023-07-25T10:30:00Z',
    },
  },
  {
    fields: {
      title: 'Dummy Article 2',
      slug: 'https://www.google.com',
      heroBodyTitle: 'This is the second dummy article',
      articleImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/y26owwfe9yxn/6UWcUTFJVt8att4XssKOHu/12886f6f0fcfc91cc922cb9f37dded5c/newsimage.png',
          },
        },
      },
    },
    sys: {
      createdAt: '2023-07-24T15:45:00Z',
    },
  },
  {
    fields: {
      title: 'Dummy Article 3',
      slug: 'https://www.google.com',
      heroBodyTitle: 'This is the third dummy article',
      articleImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/y26owwfe9yxn/6UWcUTFJVt8att4XssKOHu/12886f6f0fcfc91cc922cb9f37dded5c/newsimage.png',
          },
        },
      },
    },
    sys: {
      createdAt: '2023-07-23T09:15:00Z',
    },
  },
  {
    fields: {
      title: 'Dummy Article 4',
      heroBodyTitle: 'This is the fourth dummy article',
      slug: 'https://www.google.com',
      articleImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/y26owwfe9yxn/6UWcUTFJVt8att4XssKOHu/12886f6f0fcfc91cc922cb9f37dded5c/newsimage.png',
          },
        },
      },
    },
    sys: {
      createdAt: '2023-07-22T14:00:00Z',
    },
  },
  {
    fields: {
      title: 'Dummy Article 5',
      heroBodyTitle: 'This is the fifth dummy article',
      slug: 'https://www.google.com',
      articleImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/y26owwfe9yxn/6UWcUTFJVt8att4XssKOHu/12886f6f0fcfc91cc922cb9f37dded5c/newsimage.png',
          },
        },
      },
    },
    sys: {
      createdAt: '2023-07-21T11:30:00Z',
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
