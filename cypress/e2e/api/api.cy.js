describe('API Tests - JSONPlaceholder', () => {

  it('GET - Obtener lista de usuarios', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        expect(response.body[0]).to.have.property('name')
        expect(response.body[0]).to.have.property('email')
      })
  })

  it('GET - Obtener un usuario por ID', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name')
      })
  })

  it('POST - Crear un nuevo post', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'QA Automation Test',
      body: 'Test creado por Cypress',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'QA Automation Test')
      expect(response.body).to.have.property('id')
    })
  })

  it('PUT - Actualizar un post existente', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Post Actualizado',
      body: 'Contenido actualizado',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title', 'Post Actualizado')
    })
  })

  it('DELETE - Eliminar un post', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

})