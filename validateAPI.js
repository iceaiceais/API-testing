
/// <reference types="cypress" />

it('validate respons body', ()=>{
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as("pokemon")
    cy.get("@pokemon").then((response)=>{
    
        expect(response.body).to.have.property("name"); 
    }) 
    })

it('validate status code', ()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
        cy.get("@pokemon").its("status").should("eq", 200);
})

it.only('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').then((response)=>{
    
    expect(response.body.abilities[0].ability["name"]).to.eq("limber"); 
        })  
        
});


