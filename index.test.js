// index.test.js
const index = require('./index'); //把index.js import進來
const supertest = require('supertest'); // 把supertest import進來
test('HelloWorld', () => {
// 對index.js打一個get('/')的request，觀察他的respond
supertest(index).get('/').then((res) => {
        expect(res.statusCode).toBe(200) 
        expect(res.body).toEqual(expect.any(Object)) 
        expect(res.body).toEqual(expect.objectContaining({
            result: expect.any(String)
        }))
        expect(res.body.result).toBe('Hello World!!!');
        done();
    });
})