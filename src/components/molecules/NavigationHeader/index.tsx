import { Box, Stack, styled } from "@mui/material";
import { useState } from 'react';
import { ILink } from "../../../interfaces";
import { HeaderLink } from "../../atoms";
import { useLocation } from "react-router-dom";
import { LINKS_INDEX } from "../../../constants";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        <Box
          component="img"
          src="/images/logo.png"
          alt="Logo Kribí"
          sx={{
            objectFit: 'contain', width: '150px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        />
        <Stack justifyContent='flex-end' gap={2}>
          <Stack direction={"row"} gap={2}>
            {renderLinks()}
          </Stack>
        </Stack>
      </Stack>
    </StyledNav>
  )
}