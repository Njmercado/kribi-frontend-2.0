import LINKS from "../../../constants/links.constant";
import { isSmallScreen } from "../../../utils/general.utils";
import { NavigationHeader, DrawerHeader } from "../../molecules";

export default function Header() {

  function getHeader(): JSX.Element {
    if (isSmallScreen()) {
      return DrawerHeader({links: LINKS})
    }
    return NavigationHeader({links: LINKS})
  }

  return getHeader()
}