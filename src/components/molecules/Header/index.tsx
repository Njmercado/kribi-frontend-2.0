import { useMediaQuery, useTheme } from "@mui/material";
import LINKS from "../../../constants/links.constant";
import { NavigationHeader, DrawerHeader } from "../../molecules";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  function getHeader(): JSX.Element {
    if (isSmallScreen) {
      return <DrawerHeader links={LINKS} />
    }
    return <NavigationHeader links={LINKS} />
  }

  return getHeader()
}