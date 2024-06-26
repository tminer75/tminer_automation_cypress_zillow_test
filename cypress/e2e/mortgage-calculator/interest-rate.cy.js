
describe('Test the interest rate feature.', () => {
    let userData

    beforeEach(() => {
        cy.fixture('/pages/zillow_pages').then((data) => {
            userData = data
        })

        cy.visit("https://www.zillow.com/mortgage-calculator/")

    })

    it('Verify the Interest rate field is present', () => {
        cy.contains("Interest rate")
        cy.get(userData.pages.mortgageCalculator.field.interestRateField).should("exist")

        // "Appears correct" code could go here

    })

    it('Verify interest rate helper button brings up "Interest rate" modal', () => {

        // Check modal appears when user clicks button
        cy.contains('Representative interest rates are based').should('not.exist')
        cy.get(userData.pages.mortgageCalculator.siteButton.interestRateHelperButton).as('HelperButton').click()
        cy.contains('Representative interest rates are based').should('exist')
        cy.get('@HelperButton').type('{esc}')

        // Check modal dismiss via mouse click
        cy.get('@HelperButton').click()
        cy.get(userData.pages.mortgageCalculator.siteText.insuranceText).click()
        cy.contains('Representative interest rates are based').should('not.exist')

        // Check modal dismiss via ESC key press
        cy.get('@HelperButton').click()
        cy.get('@HelperButton').type('{esc}')
        cy.contains('Representative interest rates are based').should('not.exist')

        // Check modal dismiss via X button
        cy.get('@HelperButton').click()
        cy.get(userData.pages.mortgageCalculator.siteButton.modalCloseButton).should('exist').as('ModalCloseButton')
        cy.get('@ModalCloseButton').click()
        cy.contains('Representative interest rates are based').should('not.exist')

    });

    it('Verify "See current rates" link brings user to "Compare Today\'s Mortage Rates" page', () => {

        // Check that the link exists
        cy.contains('See current rates').as('SeeRateLink').should('exist')

        // Check that the link goes to the valid HREF route
        cy.get('@SeeRateLink').should('have.attr', 'href').and('contains', 'https://www.zillow.com/mortgage-rates/')

    });

    it('Verify that "Interest Rate" field only takes valid information', () => {

        // Empty field check
        cy.get(userData.pages.mortgageCalculator.field.interestRateField).as('InterestField').clear()
        cy.get(userData.pages.mortgageCalculator.siteText.insuranceText).as('ClickOutside').click()
        cy.contains('Invalid value').should("exist")

        // Non-numerical check
        cy.get('@InterestField').clear()
        cy.get('@InterestField').type("abc")
        cy.get('@ClickOutside').click()
        cy.contains('\'abc\' is not a valid number').should("exist")

        // Below 0 check
        cy.get('@InterestField').clear()
        cy.get('@InterestField').type("-1")
        cy.get('@ClickOutside').click()
        cy.contains('Rate must be greater than or equal to 0').should("exist")

        // Above 100 check
        cy.get('@InterestField').clear()
        cy.get('@InterestField').type("101")
        cy.get('@ClickOutside').click()
        cy.contains('Rate must be less than or equal to 100').should("exist")

    });

    it('Verify entering a valid number between 0 and 100 updates the "Your payment" pie chart', () => {


        // Setup initial Alias for easy of coding
        cy.get(userData.pages.mortgageCalculator.siteText.yourPaymentValue).as('YourPaymentValue').click()
        cy.get(userData.pages.mortgageCalculator.field.interestRateField).as('iRateField')
        cy.get(userData.pages.mortgageCalculator.siteText.pAndIText).as('pAndIText')


        // Check that "Your Payment" updates when Interest Rate field is updated
        cy.get('@YourPaymentValue').then(($input) => {
            let yourPaymenetValue = $input.text()

            cy.get('@iRateField').clear()
            cy.get('@iRateField').type('1')
            cy.get('@YourPaymentValue').click()

            cy.get('@YourPaymentValue').then(($secondInput) => {
                let newYourPaymentValue = $secondInput.text()

                //cy.log("Initial value: " + yourPaymenetValue)
                //cy.log("New value: " + newYourPaymentValue)

                expect(newYourPaymentValue).to.not.equal(yourPaymenetValue)

            })
        })

        // Check that "P & I" updates when Interest Rate field is updated
        cy.get('@pAndIText').then(($input) => {
            let yourPandIValue = $input.text()

            cy.log(yourPandIValue)

            cy.get('@iRateField').clear()
            cy.get('@iRateField').type('2')
            cy.get('@YourPaymentValue').click()

            cy.get('@pAndIText').then(($secondInput) => {
                let newYourPandIValue = $secondInput.text()

                cy.log(newYourPandIValue)

                //cy.log("Initial value: " + yourPandIValue)
                //cy.log("New value: " + newYourPandIValue)

                expect(newYourPandIValue).to.not.equal(yourPandIValue)

            })
        })


    });

    // Blocking this, but skipping it since it a little too complicated to automate at the moment.
    it.skip('Verify entering a valid number between 0 and 100 updates the "Schedule" graph', () => {

        // Code block here would check that the graph lines change in a predictive manner

    });

})

