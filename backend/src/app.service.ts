import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'Portfolio API',
      version: '1.0.0',
      status: 'running',
      endpoints: {
        public: [
          'GET /profile/active',
          'GET /projects',
          'GET /experience',
          'GET /education',
          'POST /contact',
        ],
        docs: 'GET /api (Swagger)',
        seed: 'POST /seed',
      }
    };
  }
}
