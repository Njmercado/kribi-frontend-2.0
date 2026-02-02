'use client'

import { useState } from "react";
import { styled, SwipeableDrawer, Typography, Stack, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Menu } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledNav = styled('nav')`
  padding: 20px 10px;
  background-color: var(--dark-brown);
`

export interface DrawerHeaderProps {
  links: Array<{ name: string, link?: string }>
}

export default function DrawerHeader({
  links
}: DrawerHeaderProps) {

  const [open, setOpen] = useState<boolean>(false);
  const [clickedLink, setClickedLink] = useState<string>(window.location.pathname)
  const navigate = useNavigate();

  function onClickLink(link: string) {
    setClickedLink(link)
    setOpen(false)
  }

  function renderLinks() {
    return <Box bgcolor='var(--dark-brown)' padding='20px 10px'>
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
      <Grid
        container
        padding='32px'
        width='100%'
        justifyContent='center'
        direction='row'
        spacing={4}
      >
        {
          links.map((link, index) =>
            <Grid key={index} size="auto">
              <Link to={link.link ?? '/'} onClick={() => onClickLink(link.name)}>
                <Typography
                  variant='subtitle1'
                  fontWeight='600'
                  className={
                    // These css clases are defined in the NavigationHeader/index.css file and being used here
                    // This is wrong because the DrawerHeader component should be self-contained
                    // TODO: isolate the css classes in the DrawerHeader component
                    'link-header-button ' +
                    (
                      (
                        clickedLink === link.name ||
                        clickedLink === link.link
                      ) ?
                        'active' :
                        ''
                    )
                  }
                >
                  {link.name}
                </Typography>
              </Link>
            </Grid>
          )
        }
      </Grid>
    </Box>
  }

  return (
    <StyledNav>
      <Stack direction='row' justifyContent='space-between'>
        <img src="/images/logo.png" alt="" width='128px' />
        <Stack>
          <IconButton onClick={() => setOpen(true)}>
            <Menu fontSize='large' sx={{ color: 'var(--yellow)' }} />
          </IconButton>
          <SwipeableDrawer
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            anchor='bottom'
            sx={{ textAlign: 'center' }}
            color='blue'
          >
            {renderLinks()}
          </SwipeableDrawer>
        </Stack>
      </Stack>
    </StyledNav>
  )
}