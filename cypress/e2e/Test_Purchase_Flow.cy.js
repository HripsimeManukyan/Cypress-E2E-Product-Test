describe("End-to-End Broccoli Product Purchase Flow", () => {
    it("Test Product Purchase Flow", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("Brocolli")
        cy.get('.product').contains('Brocolli').should('be.visible')
        cy.get('.quantity').should('have.length', 1)

        cy.get('.increment').dblclick()
        cy.get('input.quantity').should('have.value', '3')
        cy.get('.product').contains('Brocolli').parent().find('button').click()
        cy.get('.product').contains('Brocolli').parent().find('.added').should('be.visible')

        cy.get('.cart-icon').click()
        cy.get('.cart-preview').contains('Brocolli').should('be.visible')
        cy.get('.cart-preview.active button').click()

        cy.get('.products .product-name').should('exist').and('contain.text', 'Brocolli')
        cy.get('.promoCode').type('test')
        cy.get('.promoBtn').click()
        cy.wait(1000)
        cy.get('.promoInfo').should('have.text', 'Invalid code ..!')
        cy.contains('Place Order').click()

        cy.get('select').select('France')
        cy.get('.chkAgree').check()
        cy.get('.wrapperTwo button').click()
        cy.contains('Thank you, your order has been placed successfully').should('be.visible')
    })
})
