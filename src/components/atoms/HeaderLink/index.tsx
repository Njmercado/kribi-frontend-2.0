import './index.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ILink } from "../../../interfaces";

export interface HeaderLinkProps {
  link: ILink;
  active?: boolean;
  onClick?: () => void;
}

export default function HeaderLink({ link, active, onClick }: HeaderLinkProps) {

  const [hover, setHover] = useState<boolean>(false)

  return (
    <Link to={link.link ?? '/'} onClick={onClick}>
      <Typography
        variant='subtitle1'
        fontWeight='600'
        className={'link-header-button ' + (active ? 'active' : '')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {link.name}
        <Typography variant='caption' fontWeight='600' sx={{
          opacity: hover || active ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          color: hover && active ? 'var(--brown)' : hover ? 'var(--brown)' : 'var(--yellow)'
        }}>
          {link.translation?.es.name}
        </Typography>
      </Typography>
    </Link>
  )
}