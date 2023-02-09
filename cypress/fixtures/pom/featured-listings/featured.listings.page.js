import page from "../page"

class FeaturedListings extends page {
    get searchCardResult() {return cy.get('.MuiGrid-grid-sm-6')}
    get textListingTitle() {return cy.get('h5')}
    get textCity() {return cy.get('[viewBox="0 0 48 48"]').parent()}
}

export default new FeaturedListings()