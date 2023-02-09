import homePage from '../../fixtures/pom/homepage/home.page'
import featuredListingsPage from '../../fixtures/pom/featured-listings/featured.listings.page'
import listings from '../../fixtures/data/listings.json'

describe('Search', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // We have purposely used already existing listing, without creating it. 
    // This is a bad practice as we are creating test dependency on a data.
    // Ideally we should create listing before we use it in the test.
    // But since we have no access to listings creation, we will use it as an example
    it('should search by the keywords', () => {
        homePage.inputSearch.type(listings.coralSprings.searchKeyword, {force: true})
        homePage.buttonStartSearch.click()

        // Verify card search result
        featuredListingsPage.searchCardResult.should('have.length', 1)
        featuredListingsPage.searchCardResult.should('contain.text', listings.coralSprings.price)
        featuredListingsPage.searchCardResult.should('contain.text', listings.coralSprings.realtor)
        featuredListingsPage.textListingTitle.should('contain.text', listings.coralSprings.title)
        featuredListingsPage.textLocation.should('contain.text', listings.coralSprings.location)
        featuredListingsPage.textSqft.should('contain.text', listings.coralSprings.sqft)
        featuredListingsPage.textGarage.should('contain.text', listings.coralSprings.garage)
        featuredListingsPage.textBedrooms.should('contain.text', listings.coralSprings.bedrooms)
        featuredListingsPage.textBathrooms.should('contain.text', listings.coralSprings.bathrooms)
        featuredListingsPage.textCity.should('contain.text', listings.coralSprings.city)
    })
})
