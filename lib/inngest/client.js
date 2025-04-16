import {Inngest} from 'inngest';

export const inngest = new Inngest({
  id: 'VaultX',
  name: 'VaultX',
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000,
    maxAttempts: 2,
  }),
});
