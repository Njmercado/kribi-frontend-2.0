import './index.css';
import ABOUT_US from "../../constants/aboutus.constant";
import { SutoSection } from '../../components/molecules';

export default function AboutUs() {
  return (
    <main className='container-suto'>
      <article style={{ width: '110ch' }}>
        <section>
          {/* TODO: show a carrousel with all devs and admins information   */}
        </section>
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
      </article>
    </main>
  );
}