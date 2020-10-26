/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ActionCard } from '../stories/action-card/ActionCard';
import { Button } from '../stories/button/Button';
import { Sidebar } from '../stories/sidebar/Sidebar';
import { WithBackground } from '../stories/with-background/WithBackground';
import iconForm from '../stories/assets/actionCardIcon/icon@2x.png';
import icon2 from '../stories/assets/actionCardIcon/icon-2@2x.png';
import icon3 from '../stories/assets/actionCardIcon/icon-3@2x.png';
import { OfferCard } from '../stories/offer-card/OfferCard';
import ReferralForm from '../components/ReferralForm';

const responsive = css`
  @media (max-width: 1330px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 0.2fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    font-size: 0.9rem;

    > div:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    > div:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    > div:nth-of-type(3) {
      grid-area: 3 / 1 / 4 / 2;
    }
    > div:nth-of-type(4) {
      grid-area: 4 / 1 / 5 / 2;
    }
    > div:nth-of-type(5) {
      grid-area: 5 / 1 / 6 / 2;
    }
    > div:nth-of-type(6) {
      grid-area: 6 / 1 / 7 / 2;
    }
  }

  @media (max-width: 760px) {
    margin-left: 0rem;

    > div:nth-of-type(1) {
      font-size: 0.6rem;
      h3 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1.5rem;
      }
    }
    > div:nth-of-type(6) {
      > h3 {
        font-size: 2em;
      }
      > p {
        font-size: 1.3em;
      }
    }

    > div:nth-of-type(3) {
      justify-self: center;
    }
    > div:nth-of-type(4) {
      justify-self: center;
    }
    > div:nth-of-type(5) {
      justify-self: center;
    }
  }

  @media (max-width: 450px) {
    padding: 6em 1.5em;
  }

  // text size
  @media (max-width: 450px) {
    > div:nth-of-type(1) {
      h3 {
        font-size: 5em;
      }
      h4 {
        font-size: 3.5em;
      }
    }
    > div:nth-of-type(6) {
      > p {
        font-size: 1.5em;
        margin-top: 0;
      }
    }
  }
`;

const DashboardStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0.5fr) 1.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 23.3rem;
  padding: 6em 5em;

  > div:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: 4em;
    > h3 {
      color: #555555;
      > span {
        color: #3d3fa8;
      }
      margin-bottom: 0.5em;
    }
    > h4 {
      color: #2c2c2c;
    }
  }

  > div:nth-of-type(2) {
    grid-area: 1 / 3 / 2 / 4;
    justify-self: flex-end;
    padding: 2em;
  }

  > div:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 2;
    justify-self: flex-start;
  }

  > div:nth-of-type(4) {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: center;
  }

  > div:nth-of-type(5) {
    grid-area: 2 / 3 / 3 / 4;
    justify-self: flex-end;
  }

  > div:nth-of-type(6) {
    grid-area: 3 / 1 / 4 / 4;
    > h3 {
      color: #555555;
      margin: 0.5em 0;
    }
    > p {
      color: #858585;
      margin: 2em 0;
    }
    // offer cards
    > div {
      > * {
        margin: 1em 0;
      }
    }
  }
  > div:nth-of-type(7) {
    margin: 5em 0;
    grid-column: 1/-1;
  }

  // Responsive
  ${responsive}
`;

const Dashboard: React.FC = () => {
  const username = 'Jimmy Hendrix';
  return (
    <WithBackground>
      <Sidebar username={username} profileLink="/me" />
      <div css={DashboardStyles}>
        <div>
          <h3 className="text-24-bold-none">
            Hello <span>{`${username.split(' ')[0]},`}</span>
          </h3>
          <h4 className="text-36-normal-none">What do you want to do today?</h4>
        </div>
        <div>
          <Button label="FIND A GYM CLUB" primary />
        </div>
        <div>
          <ActionCard
            textPrimary="Fill up the form"
            textSecondary="Fill in your basic information to join the Gym Club."
            icon={iconForm}
          />
        </div>
        <div>
          <ActionCard
            textPrimary="Find your perfect gym"
            textSecondary="Easily find your perfect gym club and join the club instantly."
            icon={icon2}
          />
        </div>
        <div>
          <ActionCard
            textPrimary="Track your progress"
            textSecondary="Analyze and plan for your tasks and progress."
            icon={icon3}
          />
        </div>
        <div>
          <h3 className="text-20-bold-none">Recommended Tour Packages</h3>
          <p className=".text-12-normal-none">
            These recommendations are based on your profile information
          </p>
          <div>
            <OfferCard
              name="Pilates"
              description="Developed first by Joseph Pilates, after whom the technique is name…"
              price={4220}
              durationMonths={6}
            />
            <OfferCard
              name="Yoga & Meditation"
              description="Mantra has always believed in a Mind & Body approach which means…"
              price={4220}
              durationMonths={6}
            />
            <OfferCard
              name="Kettlebell"
              description="Kettlebell, the exercise routine involving a kettle shaped weight originat…"
              price={4220}
              durationMonths={6}
            />
          </div>
        </div>
        <div>
          <ReferralForm />
        </div>
      </div>
    </WithBackground>
  );
};

export default Dashboard;
