describe('Buscar PET por status', () => {
    it('deve retornar PETS com o status "pending"', () => {
        cy.request({
            method: 'GET',
            url: '/pet/findByStatus',
            qs: { status: 'pending' },
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
            if (res.body.length > 0) {
                res.body.forEach((pet) => {
                    expect(pet.status).to.eq('pending');
                });
            }
        });
    })
    it('deve retornar PETS com o status "sold"', () => {
        cy.request({
            method: 'GET',
            url: '/pet/findByStatus',
            qs: { status: 'sold' },
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
            if (res.body.length > 0) {
                res.body.forEach((pet) => {
                    expect(pet.status).to.eq('sold');
                });
            }
        });
    })
})