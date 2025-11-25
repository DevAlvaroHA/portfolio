import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    const endpoints = {
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
      },
    };

    // Solo mostrar seed en desarrollo
    if (process.env.NODE_ENV !== 'production') {
      endpoints.endpoints['seed'] = 'POST /seed (development only)';
    }

    return endpoints;
  }
}
