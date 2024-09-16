import { SocialMedias } from "../enums"

function goTo(link: string) { window.open(link, '_blank') }
function goToFacebook() { goTo(SocialMedias.FACEBOOK) }
function goToInstagram () { goTo(SocialMedias.INSTAGRAM) }
function goToGithub () { goTo(SocialMedias.GITHUB) }

export {
  goTo,
  goToFacebook,
  goToInstagram,
  goToGithub
}