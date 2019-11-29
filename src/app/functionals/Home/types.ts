import { Record } from 'immutable';

const homeStateDefault: API.Home = {
  name: ''
}

export type HomeRecord = Record<API.Home>;
export const HomeStateFactory = Record(homeStateDefault);