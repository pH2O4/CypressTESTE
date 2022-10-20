/// <reference types="cypress" />

describe('Resgate Unico', () => {
    it('Resgate pelo admin - Colaborador Não Definido', () => {
        function AdmOrSinger(emailLogin, passwordLogin) {
            return {
                email: emailLogin,
                password: passwordLogin,
            };
        }
        function Colaborador(name, emailLogin, passwordLogin) {
            return {
                name: name,
                email: emailLogin,
                password: passwordLogin,
            };
        }
        //definir Adm (Employee) para resgate, colaborador (Employee) e assinantes (WithdrawWorkflow.DefaultSinger)
        const Administrador = AdmOrSinger("UGPL22T02F6401@ENEVA.COM.BR", "qewrqwer")
        const Colaborador1 = Colaborador("Thiago Freitas", "THIAGO.FREITAS@ENEVA.COM.BR", "tegrfed")
        const DiadoResgate = 18

        cy.visit('https://localhost:44309/')
        cy.get('#ctl00_MainContent_LoginUser_UserName').type(`${Administrador.email}`)
        cy.get('#ctl00_MainContent_LoginUser_Password').type(`${Administrador.password}`)
        cy.get('#ctl00_MainContent_LoginUser_LoginButton').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            //   returning false here prevents Cypress from
            //    failing the tes
            return false
        })
        cy.get("#ctl00_dxMenu > ul > li:nth-child(3) > a", { timeout: 100000 }).click().wait(2000)
        cy.get("#ctl00_dxMenu\\:submenu\\:9 > li:nth-child(13) > a", { timeout: 90000 }).click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_T2T", { timeout: 90000 }).click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn0_D").click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_btnRequestWithdraw_CD").click()
        //quando settlementDate está on
     cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_txtbxSettlementDate").type("2184-07-09")
       cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_btnSettlementDate").click().wait(2000)
        cy.get("#ctl00_MainContent_successRequestPopup_HCB-1 > img").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_T0T").click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn0 > span", { timeout: 110000 }).click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn0 > span", { timeout: 110000 }).click()
        cy.get("#ctl00_MainContent_cancelWithdrawPopup_btnCancelWithdraw", { timeout: 110000 }).click()
    });
})