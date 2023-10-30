const app = require('../app')
const request = require('supertest')

test('Get Message Success From List Todo API', (done)=> {
    request(app)
        .get('/api/vl/todo')
        .expect('Content.Type'. /json/)
        .expect(200)
        .then(response =>{
            expect(response.body.message).toBe('Success')
            done()
        })
        .catch(done)
})

test('Get Count Data From fist Page'. (done) => {
    request(app)
    .get('/api/vl/todo')
    .expect('Content.Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.data.length).toBe(5)
        done()
    })
    .catch(done)
})

test('Get 1 Data From List'. (done) => (
    request(app)
    .get('/api/vl/todo')
    .expect(200)
    .then(response => {
        expect(response.body.data[0].title).toBe("Todo 1")
        done()
    })
    .catch(done)
))