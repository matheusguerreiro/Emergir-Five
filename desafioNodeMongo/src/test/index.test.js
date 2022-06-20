const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../app')


describe('routes', () => {
  it('get/markers, deve retornar status 200.', async () => {
    const res = await request(app)
    .get('/markers')
    expect(res.statusCode).toEqual(200)
  })

  it('get/markers/id(Inválido), deve retornar status 404.', async () => {
    const res = await request(app)
    .get(`/markers/idInválido`)
    expect(res.statusCode).toBe(404)
  })

  let id = '62ad254be63740691bf8cc79'
  it('get/markers/id, deve retornar status 200.', async () => {
    const res = await request(app)
    .get(`/markers/${id}`)
    expect(res.statusCode).toEqual(200)
  })

  it('post/markers(Faltando coordenada), deve retornar status 500.', async () => {
    const res = await request(app)
    .post('/markers')
    .send({position: {lng: -35.5353}})
    expect(res.statusCode).toEqual(500)
  })

  it('post/markers, deve retornar status 201.', async () => {
    const res = await request(app)
    .post('/markers')
    .send({position: {lat: -15.5151, lng: -35.5353}})
    expect(res.statusCode).toEqual(201)
  })

  it('put/markers/id(Inválido), deve retornar status 500.', async () => {
    const res = await request(app)
    .put('/markers/idInválido')
    .send({position: {lat: -35.5353, lng: -15.5151}})
    expect(res.statusCode).toEqual(500)
  })
  
  it('put/markers/id, deve retornar status 200.', async () => {
    const res = await request(app)
    .put(`/markers/${id}`)
    .send({position: {lat: -35.3535, lng: -15.1515}})
    expect(res.statusCode).toEqual(200)
  })

  it('delete/markers/id(Inválido), deve retornar status 500.', async () => {
    const res = await request(app)
    .delete('/markers/idInválido')
    expect(res.statusCode).toEqual(500)
  })

  it('delete/markers/id, deve retornar status 200.', async () => {
    const res = await request(app)
    .delete(`/markers/${id}`)
    expect(res.statusCode).toEqual(200)
  })

  it('delete/markers, deve retornar status 200.', async () => {
    const res = await request(app)
    .delete('/markers')
    expect(res.statusCode).toEqual(200)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })
})

