import page from "../page"

class ListingsDetails extends page{
    get textPrice() {return cy.get('[viewBox="0 0 1920 1280"]').parent()}
    get textLotSize() {return cy.get('[viewBox="0 0 1536 1536"]').parent()}
    get textListingDate() {return cy.get('[viewBox="0 0 1664 1792"]').parent()}
    get textListingTitle() {return cy.get('h3')}
    get textRealtor() {return cy.get('[viewBox="0 0 1280 1536"]').parent()}
    get buttonMoreInfo() {return cy.contains('More Info')}
}

export default new ListingsDetails()