import useApi from "utils/Hooks/useApi";
import Loader from "rsuite/Loader";
import SCountry from "components/Country";
import { Grid } from "./styles";
import type { Country } from "./types";

const Home: React.FC = () => {
  const [state, setState] = useApi({
    method: "GET",
    url: "https://api.covid19api.com/summary",
  });

  if (state.loading) {
    return (
      <div>
        <Loader backdrop content="loading..." vertical />
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

  return (
    <div>
      <Grid>
        {state?.data?.Countries.map((c: Country) => (
          <SCountry key={c.ID} data={c} />
        ))}
      </Grid>
    </div>
  );
};
export default Home;
