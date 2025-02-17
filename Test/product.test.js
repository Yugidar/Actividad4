const request = require('supertest');
const app = require('../server'); 

describe('GET /api/productos', () => {
    it('Debe retornar todos los productos', async () => {
        const response = await request(app).get('/api/productos');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(0);
    });
});

