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
        cy.get("#ctl00_dxMenu\\:submenu\\:9 > li:nth-child(13) > a", { timeout: 190000 }).click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_T2T", { timeout: 190000 }).click().wait(2000)
        //Quantidade de linhas ajustavaeis
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn0_D").click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn1_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn2_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn3_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn4_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn5_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn6_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn7_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn8_D").click({ force: true })
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn9_D").click({ force: true })
        // cy.get("#ctl00_MainContent_TabPagesPageControl_btnRequestWithdraw_CD").click()
        // //quando settlementDate está on
        //  cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_txtbxSettlementDate").type("2184-07-09")
        //  cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_btnSettlementDate").click().wait(2000)
        // // //
        //  cy.get("#ctl00_MainContent_successRequestPopup_HCB-1 > img").click().wait(2000)
         cy.get("#ctl00_MainContent_TabPagesPageControl_T0T").click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn0 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn1 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn2 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn3 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn4 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn5 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn6 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn7 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn8 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn9 > span", { timeout: 1210000 }).click()
         cy.get("#ctl00_MainContent_cancelWithdrawPopup_btnCancelWithdraw", { timeout: 110000 }).click()
    });
})