import './index.css';
import { Typography } from "@mui/material";
import ABOUT_US from "../../constants/aboutus.constant";

export default function AboutUs() {
  return (
    <main className='center'>
      <article style={{ width: '70vw' }}>
        <section>
          {/* TODO: show a carrousel with all devs and admins information   */}
        </section>
        {
          Object.keys(ABOUT_US).map((key: string) => {
            return (
              <section key={key} style={{ marginTop: '100px' }} className="center">
                <Typography variant='h4'>{ABOUT_US[key].TITLE}</Typography>
                <Typography variant='body1' sx={{ mt: 5 }}>{ABOUT_US[key].DESCRIPTION}</Typography>
              </section>
            );
          })
        }
      </article>
    </main>
  );
}