import { Dictionary } from "@reduxjs/toolkit"
import { remToPxVal } from "styles/cssHelpers"

export const WDS_BREAKPOINT_MOBILE = '20rem' // from 320 px
export const WDS_BREAKPOINT_MOBILE_UP_TO = '39.9375rem' // less than 640 px
export const WDS_BREAKPOINT_TABLET = '40rem' // from 640 px
export const WDS_BREAKPOINT_TABLET_UP_TO = '63.9375rem' // less than 1024 px
export const WDS_BREAKPOINT_DESKTOP_S = '64rem' // from 1024 px
export const WDS_BREAKPOINT_DESKTOP_S_UP_TO = '89.9375rem' // less than 1440 px
export const WDS_BREAKPOINT_DESKTOP_M = '90rem' // from 1440 px
export const WDS_BREAKPOINT_DESKTOP_M_UP_TO = '119.9375rem' // less than 1920 px
export const WDS_BREAKPOINT_DESKTOP_L = '120rem' // from 1920 px

export const PIXEL_BREAKPOINT_VALUES: Dictionary<number> = {
  MOBILE: remToPxVal(WDS_BREAKPOINT_MOBILE),
  MOBILE_UP_TO: remToPxVal(WDS_BREAKPOINT_MOBILE_UP_TO),
  TABLET: remToPxVal(WDS_BREAKPOINT_TABLET),
  TABLET_UP_TO: remToPxVal(WDS_BREAKPOINT_TABLET_UP_TO),
  DESKTOP_S: remToPxVal(WDS_BREAKPOINT_DESKTOP_S),
  DESKTOP_S_UP_TO: remToPxVal(WDS_BREAKPOINT_DESKTOP_S_UP_TO),
  DESKTOP_M: remToPxVal(WDS_BREAKPOINT_DESKTOP_M),
  DESKTOP_M_UP_TO: remToPxVal(WDS_BREAKPOINT_DESKTOP_M_UP_TO),
  DESKTOP_L: remToPxVal(WDS_BREAKPOINT_DESKTOP_L),
}

export const BREAKPOINTS: Dictionary<string> = {
  MOBILE_UP_TO: `screen and (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO})`, // < 640px
  TABLET: `screen and (min-width: ${WDS_BREAKPOINT_TABLET})`, // > 640px
  TABLET_UP_TO: `screen and (max-width: ${WDS_BREAKPOINT_TABLET_UP_TO})`, // < 1023px
  DESKTOP_S: `screen and (min-width: ${WDS_BREAKPOINT_DESKTOP_S})`, // > 1024px
  DESKTOP_M: `screen and (min-width: ${WDS_BREAKPOINT_DESKTOP_M})`, // > 1440px+
};
