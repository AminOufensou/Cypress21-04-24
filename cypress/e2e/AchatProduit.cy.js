describe('Acheter un produit ', () => {

    // Test cases pour l'ajout des produits au panier
    /*
    it('Acheter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        // Completez le test d'achat d'un produit 
        cy.get('button[title="Buy now"]').contains('Buy now').click({force:true})
        cy.get(':nth-child(6) > .custom-control-label').click()
        cy.get('button[id="button-save"]').click()
        cy.contains('Confirm Order')
        cy.get('button[id="button-confirm"]').click()
        cy.contains('Your order has been placed!')
    })
    */
    
    //Ajoutez autres tests cases pour l'achat des produits 
    it('Order From Mega Menu', () => {
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=information/information&information_id=4"]').trigger('mouseover');
      cy.get('a[title="Apple"]').click()
      cy.get('button[id="list-view"]').click()
      cy.wait(3000)
      cy.get('a[id="mz-product-grid-image-32-212439"]').click()
      cy.get('button[title="Buy now"]').contains('Buy now').click({force:true})
      cy.get(':nth-child(6) > .custom-control-label').click()
      cy.get('button[id="button-save"]').click()
      cy.contains('Confirm Order')
      cy.get('button[id="button-confirm"]').click()
      cy.contains('Your order has been placed!')
    }) 
    
  })