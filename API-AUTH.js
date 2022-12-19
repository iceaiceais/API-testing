// it('Successfully login using headers', function () {
//     cy.visit("https://the-internet.herokuapp.com/basic_auth", {
//         headers: {
//             authorization: 'Basic YWRtaW46YWRtaW4='
//         },
//         failOnStatusCode: false
//     })
//     cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
// })

it('Successfully login using headers', function () {
    
    cy.loginViaAPI()
    
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
})