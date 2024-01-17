import styled from 'styled-components'

import {
  WDS_COLOR_BLACK,
  WDS_COLOR_BLUE_300,
  WDS_COLOR_BLUE_700,
  WDS_COLOR_GREY,
  WDS_COLOR_WHITE,
} from 'styles/colors'
import { border } from 'styles/mixins/border.mixin'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import {
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_020_PX,
  WDS_SIZE_224_PX
} from 'styles/size'

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
`

export const Label = styled.div`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLUE_700};
  margin-bottom: 4px;
`

export const DropdownWrapper = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })};
  ${border({ type: 'solid', color: WDS_COLOR_GREY })};
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLACK};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_010_PX};
  background-color: white;
`

export const DropdownList = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: ${WDS_SIZE_224_PX};
  padding: ${WDS_SIZE_010_PX};
  background: ${WDS_COLOR_WHITE};
  ${border({ type: 'solid', color: WDS_COLOR_GREY })};
  border-radius: ${WDS_SIZE_008_PX};
`

export const Select = styled.div`
  ${flex({ direction: 'column', gap: WDS_SIZE_020_PX })};
`
export const Option = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  ${({ isActive }) => (isActive ? textVariant('subheading') : textVariant('bodyM'))};
  color: ${({ isActive }) => (isActive ? WDS_COLOR_BLUE_300 : WDS_COLOR_BLACK)};

  :hover {
    color: ${WDS_COLOR_BLUE_300};
  }
`
