import './index.css';
import ABOUT_US from "../../constants/aboutus.constant";
import { TEAM_MEMBERS } from "../../constants";
import { SutoSection } from '../../components/molecules';
import { TeamSection } from '../../components/organisms';

export default function AboutUs() {
  return (
    <main>
      <article className='container-suto'>
        <section>
          <TeamSection members={TEAM_MEMBERS} />
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
