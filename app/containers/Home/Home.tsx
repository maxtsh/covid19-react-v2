import Flag from 'react-country-flag';
import useApi from 'Utils/Hooks/useApi';
import Content from 'rsuite/Content';
import Loader from 'rsuite/Loader';
import Progress from 'rsuite/Progress';
import { Grid, Item } from './styles';
import { Country } from './types';

const Home: React.FC = () => {
  const [state, setState] = useApi({
    method: 'GET',
    url: 'https://api.covid19api.com/summary',
  });

  if (state.loading) {
    return (
      <div>
        <Loader size="lg" content="Getting Data..." center />
      </div>
    );
  }

  if (state.error) {
    return (
      <div>
        <h1>Error: {state.error}</h1>
      </div>
    );
  }

  console.log(state);

  return (
    <Content>
      <Progress.Circle percent={100} status="success" />
      <Grid>
        {state?.data?.Countries.map((c: Country) => (
          <Item key={c.ID}>
            <div className="item-header">
              <Flag
                className="item-header-emoji"
                countryCode={c.CountryCode}
                aria-label={c.Country}
                svg
              />
              <h3 className="item-header-slug">{c.CountryCode}</h3>
            </div>
            <div className="item-body">
              <h5 className="item-body-country">{c.Country}</h5>
              <h5 className="item-body-stats item-body-case">
                <span className="item-body-stats-title">Total Cases:</span>{' '}
                {c.TotalConfirmed}
              </h5>
              <h5 className="item-body-stats item-body-death">
                <span className="item-body-stats-title">Total Deaths:</span>{' '}
                {c.TotalDeaths}
              </h5>
              <h5 className="item-body-stats item-body-rec">
                <span className="item-body-stats-title">Total Recovered:</span>{' '}
                {c.TotalRecovered}
              </h5>
              <h5 className="item-body-stats item-body-new">
                <span className="item-body-stats-title">+ New Cases:</span>{' '}
                {c.NewConfirmed}
              </h5>
            </div>
          </Item>
        ))}
      </Grid>
    </Content>
  );
};
export default Home;
