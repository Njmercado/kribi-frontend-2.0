import './index.css'

import { Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ISection } from "../../../interfaces";

interface SectionButtonProps extends ISection { }

export default function SectionButton({
  image,
  link,
  title,
  color
}: SectionButtonProps) {

  const navigate = useNavigate();

  function goToLink() { navigate(link); }

  return (
    <Paper onClick={goToLink} sx={{ bgcolor: color, borderRadius: '10px', transition: 'all 200ms' }} className="paper">
      <Stack justifyContent='center' alignItems='center' p={2}>
        <img src={image} alt="" width='100vw' />
        <Typography variant='h6' color='white' fontWeight='bold'>{title}</Typography>
      </Stack>
    </Paper>
  )
}