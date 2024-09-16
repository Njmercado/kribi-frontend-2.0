import './index.css'

import { IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LINKS from "../../../constants/links.constant";
import { useState } from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
import { goToFacebook, goToInstagram } from '../../../utils/general.utils';

const StyledNav = styled('nav')`
  padding: 20px 10px;
  background-color: var(--dark-brown);
`

export default function Header() {

  const [clickedLink, setClickedLink] = useState<string>(window.location.pathname)

  function renderLinks() {
    return LINKS.map((link, index) => {
      return (
        <Link key={index} to={link.link ?? '/'} onClick={() => setClickedLink(link.name)}>
          <Typography
            variant='subtitle1'
            fontWeight='600'
            className={
              'link-header-button ' +
              (
                (
                  clickedLink === link.name ||
                  clickedLink === link.link
                )?
                  'active': 
                  ''
              )
            }
          >
              {link.name}
            </Typography>
        </Link>
      )
    })
  }

  return (
    <StyledNav>
      <Stack direction="row" justifyContent='space-between'>
        <img src="/images/logo.png" alt="" width='15%'/>
        <Stack alignItems='flex-end' gap={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems='center' spacing={2} color='var(--white)'>
              <Typography variant='h6'>Siguenos</Typography>
              <IconButton color='inherit' onClick={goToFacebook}> <Facebook/> </IconButton>
              <IconButton color='inherit' onClick={goToInstagram}> <Instagram/> </IconButton>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} justifyContent={"flex-end"}>
            {renderLinks()}
          </Stack>
        </Stack>
      </Stack>
    </StyledNav>
  )
}