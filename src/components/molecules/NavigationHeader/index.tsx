import { Stack, styled } from "@mui/material";
import { useState } from 'react';
import { ILink } from "../../../interfaces";
import { HeaderLink } from "../../atoms";
import { useLocation } from "react-router-dom";
import { LINKS_INDEX } from "../../../constants";

const StyledNav = styled('nav')`
  padding: 20px 10px;
  background-color: var(--dark-brown);
`

export interface NavigationHeaderProps {
  links: Array<ILink>
}

export default function NavigationHeader({
  links
}: NavigationHeaderProps) {
  const location = useLocation();
  const [clickedLink, setClickedLink] = useState<ILink>(LINKS_INDEX[location.pathname.substring(1).toUpperCase()]);

  function isActive(link: ILink) {
    return link.name === clickedLink?.name
  }

  function renderLinks() {
    return links?.map((link, index) => {
      return (
        <HeaderLink
          key={index}
          link={link}
          active={isActive(link)}
          onClick={() => setClickedLink(link)}
        />
      )
    })
  }

  return (
    <StyledNav>
      <Stack direction="row" justifyContent='space-between'>
        <img src="/images/logo.png" alt="" width='200px' />
        <Stack justifyContent='flex-end' gap={2}>
          <Stack direction={"row"} gap={2}>
            {renderLinks()}
          </Stack>
        </Stack>
      </Stack>
    </StyledNav>
  )
}