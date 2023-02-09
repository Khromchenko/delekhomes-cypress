class Homepage {
    get inputSearch() {return cy.get('[type="text"]').eq(0)}
    get buttonStartSearch() {return cy.contains('Start Search')}
}

export default new Homepage()