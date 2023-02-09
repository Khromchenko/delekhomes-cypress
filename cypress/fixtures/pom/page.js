// Lowest level abstraction which is shared will all page objects that
// require shared elements to be used

export default class {
    get textGarage() {return cy.get('[viewBox="0 0 2048 1600"]').parent()}
    get textSqft() {return cy.get('[viewBox="0 0 1664 1408"]').parent()}
    get textBedrooms() {return cy.get('[viewBox="0 0 2048 1280"]').parent()}
    get textBathrooms() {return cy.get('[viewBox="0 0 1792 1792"]').parent()}
    get textLocation() {return cy.get('p [viewBox="0 0 32 32"]').parent()}
}