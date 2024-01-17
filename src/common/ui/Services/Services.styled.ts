import styled from 'styled-components'

import {
  WDS_BREAKPOINT_MOBILE_UP_TO,
  WDS_BREAKPOINT_TABLET_UP_TO,
} from 'common/constants/breakpoint'
import { WDS_COLOR_BLUE_600 } from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { grid } from 'styles/mixins/grid.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const ServicesWrapper = styled.div`
  ${flex({ direction: 'column', gap: '94px' })};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    gap: 32px;
  }
`

export const Tag = styled.p`
  ${textVariant('subheading')};
  color: ${WDS_COLOR_BLUE_600};
`

export const Title = styled.h1`
  ${textVariant('titleH3')};
  padding: 0 0 24px 0;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('titleH3')};
  }
`

export const SubTitle = styled.p<{ bold?: boolean }>`
  ${textVariant('bodyM')};
  ${(props) => props.bold && 'font-weight: bold'};
  ${(props) => props.bold && 'color: #1C3375'};
`

export const Other = styled.div`
  padding-top: 16px;
  ${flex({ direction: 'column', gap: '8px' })};
`

export const ListWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px' })};
  padding: 32px 0 0 0;
`

export const List = styled.div`
  ${flex({ gap: '16px', alignItems: 'center' })};
`

export const ListContent = styled.p`
  ${textVariant('bodyM')};
`

export const Icon = styled.img``

export const Image = styled.img`
  width: 100%;
  max-height: 464px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    height: 504px;
  }
`

export const Content = styled.div`
  ${grid({ gridTemplateColumns: '1fr 1fr', columnGap: '48px' })};
  align-items: center;

  @media (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO}) {
    ${grid({ gridTemplateColumns: '1fr', rowGap: '48px' })};
  }
`
