import './index.css';
import { Typography, Stack } from '@mui/material';
import ABOUT_US from "../../constants/aboutus.constant";
import { TEAM_MEMBERS } from "../../constants";
import { SutoSection } from '../../components/molecules';
import { TeamSection } from '../../components/organisms';

export default function AboutUs() {
  return (
    <main>
      <article className='container-suto'>
        <section>
          <Stack mt={5}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
              Nosotros
            </Typography>
            <TeamSection members={TEAM_MEMBERS} />
          </Stack>
        </section>
        <section>
          {
            Object.keys(ABOUT_US).map((key: string) => {
              return (
                <SutoSection
                  title={ABOUT_US[key].TITLE}
                  description={ABOUT_US[key].DESCRIPTION}
                  key={key}
                />
              );
            })
          }
        </section>
      </article>
    </main>
  );
}
