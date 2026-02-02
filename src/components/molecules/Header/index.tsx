import { useMediaQuery, useTheme } from "@mui/material";
import { NavigationHeader, DrawerHeader } from "../../molecules";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LINKS } from "../../../constants";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [isHome, setIsHome] = useState<boolean>(location.pathname === '/');

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  function getHeader(): JSX.Element {
    if (isSmallScreen) {
      return <DrawerHeader links={LINKS} />
    }

    if (isHome) {
      return <></>;
    }

    return <NavigationHeader links={LINKS} />
  }

  return getHeader()
}