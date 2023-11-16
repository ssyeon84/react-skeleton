import { rest } from 'msw';
import { SAMPLE_LIST_ENDPOINT } from './endpoints';
import { MOCK_SAMPLE_LIST } from './mocks';

export const handlers = [
    rest.get(SAMPLE_LIST_ENDPOINT, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_SAMPLE_LIST));
    })
];