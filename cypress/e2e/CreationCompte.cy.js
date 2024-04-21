
describe('Création de compte', () => {

    // déclarer les variables golbales 
    var firstname;  var lastname; var email;  var tel;  var password

    // Initialiser ces variables avec vos valeurs spécifique
    before(() => {
      firstname = 'amine';
      lastname = 'oufensou';
      email = 'ao@test.com';
      tel = '1234567890';
      password = 'abcd123';
    });

    // Actions à effectuer avant chaque cas de test
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})
      cy.wait(3000);   
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains("Continue").click({force:true})
      
    })
    /*
    // les cas des tests 
    it('Creation de nouveau compte avec succée', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Congratulations! Your new account has been successfully created!")
    });

    //Ajoutez autres test cases pour la partie creation du compte
    
    it('Creation with existing Email', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type(email) 
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true}) 
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains('E-Mail Address is already registered!')
    });
    
    it('Creation Without Last Name', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="email"]').type('ao1@test.com')
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Last Name must be between 1 and 32 characters!")
    });
    */
    it('Creation Without Accepting Privacy Policy', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type('ao1@test.com')
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains('You must agree to the Privacy Policy!')
    });
  });