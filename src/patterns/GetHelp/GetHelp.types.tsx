export interface lawCentreDetailsProps {
  lawCentreName: string
  postcode: string
  latitude: number
  longitude: number
  telephoneNumber?: string
  email?: string
  address?: string
  website?: string
  openingTimes?: string
  areasOfLaw?: string[]
  distanceFromUser?: number
  getHelpLink?: string
  regions?: string
}

export interface areasOfLawProps {
  actionsAgainstPublicAuthorities?: string
  asylum?: string
  communityCare?: string
  consumer?: string
  conveyancy?: string
  costOfLiving?: string
  crime?: string
  debt?: string
  discrimination?: string
  education?: string
  employment?: string
  family?: string
  general?: string
  housing?: string
  humanRights?: string
  immigration?: string
  mentalHealth?: string
  motoringOffences?: string
  other?: string
  personalInjury?: string
  publicLaw?: string
  smallClaims?: string
  welfareBenefits?: string
  willsAndProbate?: string
  youthAdviceServices?: string
}

export interface getHelpProps {
  areasOfLaw?: areasOfLawProps
  searchWordOfCaution: string
}
