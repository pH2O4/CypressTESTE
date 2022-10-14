/// <reference types="cypress" />

describe('Fluxo de Assinatura Assai', () => {
  it('Colaborador = Any ou Colaborador Pré Definido', () => {

    function Adm(emailLogin, passwordLogin) {
      return {
        email: emailLogin,
        password: passwordLogin,
      };
    }
    function Colaborador(emailLogin, passwordLogin) {
      return {
        name: 'Teste',
        email: emailLogin,
        password: passwordLogin,
      };
    }
    //definir assinantes e colaborador
    const Administrador = Adm("admin", "qewrqwer")

    cy.visit('https://localhost:44309/')
    cy.get('#ctl00_MainContent_LoginUser_UserName').type(`${Administrador.email}`)
    cy.get('#ctl00_MainContent_LoginUser_Password').type(`${Administrador.password}`)
    cy.get('#ctl00_MainContent_LoginUser_LoginButton').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      //   returning false here prevents Cypress from
      //    failing the tes
      return false
    })
    cy.get("#ctl00_dxMenu > ul > li:nth-child(4) > a").click().wait(2000)
    cy.get("#ctl00_dxMenu\\:submenu\\:21 > li:nth-child(12) > a", { timeout: 90000 }).click().wait(2000)
    cy.get("#ctl00_MainContent_TabPagesPageControl_T2T > span", { timeout: 90000 }).click().wait(2000)
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    let nameBeneficiaryStorage = '';
    const haveSomeoneForRescue = cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn0_D").click().wait(2000)
    const getingNameBeneficiaryStorage = cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXDataRow0 > td:nth-child(2)").invoke('text').then(async ($value) => {
      cy.log($value)
      nameBeneficiaryStorage = "'" + $value + "'"
    })
    // cy.get("#ctl00_MainContent_TabPagesPageControl_btnRequestWithdraw_CD").click().wait(2000)
    cy.visit("https://localhost:44309/Pages/Gestao/ManageWithdraw.aspx")
    cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXFREditorcol3_I").type(nameBeneficiaryStorage)
  });
})