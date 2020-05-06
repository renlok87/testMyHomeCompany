// Tools
import {
  startFetching, stopFetching, fill, setfetchingError,
} from '../../action';

// Types
import { Starships } from '../../types';

// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../api';

export function* fetchStarships(): Generator {
  const options = {
    fetcher: api.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setfetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}
