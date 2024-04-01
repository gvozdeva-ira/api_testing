describe('template spec', () => {
    const EMAIL=Cypress.env('email');
    const PASSWORD=Cypress.env('password');

    it('Login success test', () => {
        const BODY_LOGIN = JSON.parse(`{"email":"${EMAIL}","password":"${PASSWORD}","namespace":"flashscore","project":1}`);
        cy.request({
            method: 'POST', url: '/login', body: BODY_LOGIN
        }).then((response) => {
            //Expecting the response status code to be 200
            expect(response.status).to.eq(200);
            expect(response.body.r).to.eq("XY1");
        })
    });

    it('Login failed test', () => {
        const BODY_LOGIN = JSON.parse(`{"email":"livesport.tester.cypress1@gmail.com","password":"${PASSWORD}","namespace":"flashscore","project":1}`);
        cy.request({
            method: 'POST', url: '/login', body: BODY_LOGIN
        }).then((response) => {
            //Expecting the response status code to be 200
            expect(response.status).to.eq(200);
            expect(response.body.err).to.eq("XE1");
        })
    })

    it('Add to favorites API test', () => {
        cy.login(EMAIL, PASSWORD).then(()=>{
            const BODY_FAV = JSON.parse(`{"loggedIn":{"id":"${Cypress.env('ID')}","hash":"${Cypress.env('HASH')}"},"key":"mygames","dataDiff":{"merge":{"data.g_1_Mavs6Jki":{"AD":1711890000,"MG":"0","is_duel":1},"data.g_1_z3ro5w5c":{"AD":1711899000,"MG":"0","is_duel":1}},"unmerge":[]},"project":1}`);
            cy.request({
                method: 'POST', url: '/storemergeddata', body: BODY_FAV
            }).then((response) => {
                //Expecting the response status code to be 200
                console.log(response.body);
                expect(response.status).to.eq(200);
                expect(response.body.r).to.eq("XY1");
            })
        });
    })
    it('Remove from favorites API test', () => {
        cy.login(EMAIL, PASSWORD).then(()=>{
            const BODY_FAV_REMOVE = JSON.parse(`{"loggedIn":{"id":"${Cypress.env('ID')}","hash":"${Cypress.env('HASH')}"},"key":"myTeams.1","dataDiff":{"merge":{},"unmerge":["1_hA1Zm19f"]},"project":1}`);
            cy.request({
                method: 'POST', url: '/storemergeddata', body: BODY_FAV_REMOVE
            }).then((response) => {
                //Expecting the response status code to be 200
                console.log(response.body);
                expect(response.status).to.eq(200);
                expect(response.body.r).to.eq("XY1");
            })
        });
    })
})