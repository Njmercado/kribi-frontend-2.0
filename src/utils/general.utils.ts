import { SocialMedias } from "../enums"
import { SCREENS } from "../constants"

function goTo(link: string) { window.open(link, '_blank') }
function goToFacebook() { goTo(SocialMedias.FACEBOOK) }
function goToInstagram() { goTo(SocialMedias.INSTAGRAM) }
function goToGithub() { goTo(SocialMedias.GITHUB) }
export function getWidth(): number { return window.screen.width }
export function isSmallScreen(): boolean {
  const screenWidth = getWidth()
  return screenWidth < SCREENS.MD
}

export {
  goTo,
  goToFacebook,
  goToInstagram,
  goToGithub
}