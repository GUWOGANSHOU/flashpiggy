export enum SWITCH {
  MAP,
  LIST
}

export enum ORDER {
  REWARD,
  DISTANCE
}

export type IMarkerCallout = {
  content?: string
  color?: string
  fontSize?: string | number
  borderRadius?: string | number
  borderWidth?: string | number
  borderColor?: string
  bgColor?: string
  padding?: string | number
  display?: string
  textAlign?: 'left' | 'right' | 'center'
}

export type IMarkerLabel = {
  content?: string
  color?: string
  fontSize?: string | number
  x?: number
  y?: number
  anchorX?: string | number
  anchorY?: string | number
  borderRadius?: string | number
  borderWidth?: string | number
  borderColor?: string
  bgColor?: string
  padding?: string | number
  textAlign?: 'left' | 'right' | 'center'
}

export type IMarkerAnchor = {
  x?: number
  y?: number
}

export type IMarker = Coordinate & {
  id?: number | string
  title?: string
  zIndex?: number
  iconPath: string
  rotate?: number
  alpha?: number
  width?: number | string
  height?: number | string
  callout?: IMarkerCallout
  label?: IMarkerLabel
  anchor?: IMarkerAnchor
}

export type Coordinate = {
  latitude: number
  longitude: number
}

export type INeedPictures = {
  id: number | string
  desc: string
  count: number
}

export type IMission = Coordinate & {
  id: number | string
  avatar: string
  name: string
  distance: number
  address: string
  reward: number
  questions: IQuestion[]
  needPictures: INeedPictures[]
  shop: string
  timeConsuming: number
  completedPeopleCount: number
  availablePeopleCount: number
  deadlineDate: string
  deadlineTime: string
}

export type IQuestion = {
  desc: string
  answers: string[]
}

export type IData = {
  SWITCH: typeof SWITCH
  ORDER: typeof ORDER
  switchActive: SWITCH
  orderActive: ORDER
  missionActive: boolean
  missions: IMission[]
  missionActiveStep: number
  step2ActiveQuestion: number
  step2QestionSelected: number[]
  markers: IMarker[]
  missionActiveContent: IMission | null
  missionNeedPictures: number
  questions: IQuestion[]
  needPictures: INeedPictures[]
}
