import { SocialMedias } from "../enums"

function goTo(link: string) { window.open(link, '_blank') }
function goToFacebook() { goTo(SocialMedias.FACEBOOK) }
function goToInstagram () { goTo(SocialMedias.INSTAGRAM) }

export {
  goTo,
  goToFacebook,
  goToInstagram
}