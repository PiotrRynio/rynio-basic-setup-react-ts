import { rest } from 'msw';
import { launchesHandlerResponse } from './responses/apiPathName_HandlerResponse';

const API_URL = 'https://api/rest';

const launchesHandler = rest.get(`${API_URL}/launches`, (req, res, ctx) => {
  const fields = req.url.searchParams.get('limit');
  if (fields === '12') {
    return res(ctx.status(200), ctx.json(launchesHandlerResponse));
  }
  return res(ctx.status(404));
});

export const handlers = [launchesHandler];
