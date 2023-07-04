import React from 'react'

export interface SVGProps {
  height?: string
  width?: string
}
export const IconArrowRight: React.FC<SVGProps> = (props) => (
  <svg
    viewBox="0 0 70 60"
    width="70"
    height="60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    role="img"
    {...props}
  >
    <path d="M69.2167 0H0V60H69.2167V0Z" fill="#E45E37" />
    <path
      d="M29.3925 49.6852L49.312 29.7657L29.861 10.3147L22.7014 17.467L35.0001 29.7657L22.2402 42.5256L29.3925 49.6852Z"
      fill="white"
    />
  </svg>
)

export const IconArrowDown: React.FC<SVGProps> = (props) => (
  <svg
    viewBox="0 0 70 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    role="img"
    {...props}
  >
    <path d="M69.3845 0H0.167725V60H69.3845V0Z" fill="#E45E37" />
    <path
      d="M15.0907 23.6163L35.0102 43.5358L54.4612 24.0848L47.3089 16.9252L35.0102 29.2239L22.2503 16.464L15.0907 23.6163Z"
      fill="white"
    />
  </svg>
)

export const IconPlus: React.FC<SVGProps> = (props) => (
  <svg
    width="89"
    height="85"
    viewBox="0 0 89 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    role="img"
    {...props}
  >
    <path
      d="M88.898 32.5H54.948V0.47998H34.898V32.5H0.947998V52.48H34.898V84.5H54.948V52.48H88.898V32.5Z"
      fill="#E45E37"
    />
  </svg>
)

export const IconMinus: React.FC<SVGProps> = (props) => (
  <svg
    width="89"
    height="21"
    viewBox="0 0 89 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    role="img"
    {...props}
  >
    <path
      d="M88.8981 0.349121H0.94812V20.3191H88.8981V0.349121Z"
      fill="#E45E37"
    />
  </svg>
)
