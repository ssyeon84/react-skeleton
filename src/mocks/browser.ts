import { setupWorker } from 'msw';
import { handlers as sampleHandlers } from './sample/handlers';

export const worker = setupWorker(...sampleHandlers);