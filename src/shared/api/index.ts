import axios from 'axios';
import { ISpacexRockets } from './types';

const httpClient = axios.create({
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

class Api_instance {
  private FakeSpacexRocketBaseUrl: {
    rockets: string;
  };

  constructor() {
    const FakeSpacexRocketBaseUrl = 'https://api.spacexdata.com/v3';

    this.FakeSpacexRocketBaseUrl = {
      rockets: FakeSpacexRocketBaseUrl + '/rockets',
    };
  }
  public async getSpacexRockets(): Promise<ISpacexRockets[]> {
    try {
      const rockets: ISpacexRockets[] = await httpClient.get(
        this.FakeSpacexRocketBaseUrl.rockets
      );
      return rockets;
    } catch (error) {
      console.log('Error fetching SpaceX rockets:', error);
      return [];
    }
  }
}

export const API = new Api_instance();
