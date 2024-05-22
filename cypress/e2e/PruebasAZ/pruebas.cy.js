describe ("test suite - conjunto pruebas mall plaza",() => {

  it("Inciar web y localizar",() => {

    cy.visit("http://dev.mallplaza.com")
    cy.get('.brand > .image_logo').should("be.visible")
    cy.get('h2[class="title"]').contains("Todo lo que necesitas en tu centro urbano")
  })
})