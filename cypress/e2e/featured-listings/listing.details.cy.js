import listingDetailsPage from '../../fixtures/pom/listing-details/listing.details.page'
import listings from '../../fixtures/data/listings.json'

describe('Listing details', () => {
    beforeEach(() => {
        cy.visit('/featured-listings?price=500000-10000000&keyword=Coral+Springs')
    })

    it('should open expected listing details page', () => {
        // Open listing details page
        listingDetailsPage.buttonMoreInfo.click()

        // Verify listing details information matches listing that was created.
        // Ideally created dynamically, but for now we rely on exisitng data for this example framework
        listingDetailsPage.textListingTitle.should('contain.text', listings.coralSprings.title)
        listingDetailsPage.textLocation.should('contain.text', listings.coralSprings.location)
        listingDetailsPage.textPrice.should('contain.text', listings.coralSprings.askingPrice)
        listingDetailsPage.textLotSize.should('contain.text', listings.coralSprings.lotSize)
        listingDetailsPage.textGarage.should('contain.text', listings.coralSprings.garage)
        listingDetailsPage.textBedrooms.should('contain.text', listings.coralSprings.bedrooms)
        listingDetailsPage.textBathrooms.should('contain.text', listings.coralSprings.bathrooms)
        listingDetailsPage.textSqft.should('contain.text', listings.coralSprings.sqftFullWords)
        listingDetailsPage.textListingDate.should('contain.text', listings.coralSprings.listingsDateDetails)
        listingDetailsPage.textRealtor.should('contain.text', listings.coralSprings.realtorDetails)
    })
})
