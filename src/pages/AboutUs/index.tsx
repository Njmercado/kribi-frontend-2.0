import './index.css';
import { Typography, Stack, Box } from '@mui/material';
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
        <section>
          <Stack mt={10} mb={10} alignItems="center">
            <Typography variant="h6" sx={{ color: 'var(--brown)', fontWeight: 'bold', mb: 3 }}>
              Un proyecto nacido desde
            </Typography>
            <Box 
              component="img" 
              src="/images/fumcat.png" 
              alt="Fundación María Catalina Luango - FUMCAT" 
              sx={{ maxWidth: '250px', width: '100%', height: 'auto', objectFit: 'contain' }} 
            />
          </Stack>
        </section>
      </article>
    </main>
  );
}
