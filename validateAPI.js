/// <reference types="cypress" />

it('validate respons body', ()=>{
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as("pokemon")
    cy.get("@pokemon").then((response)=>{
    
        expect(response.body).to.have.property("name");

       
    }) 
    })
    