/// <reference types="cypress" />

describe('Fluxo de Assinatura Eneva', () => {
    it('Resgate pelo admin - Colaborador Pré Definido', () => {

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
        //Largura da régua do cypress deve ser 78%
        //definir Adm (Employee) para resgate, colaborador (Employee) e assinantes (WithdrawWorkflow.DefaultSinger)
        const Administrador = AdmOrSinger("UGPL22T02F6401@ENEVA.COM.BR", "qewrqwer")
        const Colaborador1 = Colaborador("Ricardo Correa Pascotto", "RICARDO.PASCOTTO@ENEVA.COM.BR", "tegrfed")
        const singer = AdmOrSinger("rodrigo.bayma@eneva.com.br", "qewrqwer")
        const singer2 = AdmOrSinger("FELIPE.PULCHERIO@ENEVA.COM.BR", "qewrqwer")
        const DiadoResgate = 17

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
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXFREditorcol6_I").type(`${Colaborador1.name}`)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequestWithdraw_DXSelBtn0_D").click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_btnRequestWithdraw_CD").click()
        cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_txtbxSettlementDate").type("2184-07-09")
        cy.get("#ctl00_MainContent_popupInformExpectedSettlementDate_btnSettlementDate").click().wait(2000)
        cy.get("#ctl00_MainContent_successRequestPopup_HCB-1 > img").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_T0T").click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXFREditorcol3_I").type(`${Colaborador1.name}{enter}`)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_col7 > table > tbody > tr > td.dx-wrap").click().wait(2000)
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXFREditorcol8_I").type("Aguardando aprovação")
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvRequests_DXCBtn0 > span", { timeout: 110000 }).click()
        cy.get("#ctl00_linkSair").click()

        cy.get('#ctl00_MainContent_LoginUser_UserName').type(`${singer.email}`)
        cy.get('#ctl00_MainContent_LoginUser_Password').type(`${singer.password}`)
        cy.get('#ctl00_MainContent_LoginUser_LoginButton').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            //   returning false here prevents Cypress from
            //    failing the tes
            return false
        })
        cy.get('#ctl00_ddlRoles').select('Aprovação de Contratos').wait(2000)
        cy.get("#ctl00_dxMenu > ul > li:nth-child(2) > a").click()
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_gdvToApproveContracts_DXFREditorcol2_I").type(`${Colaborador1.name}{enter}`)
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_gdvToApproveContracts_DXSelBtn0_D").click()
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_btnApproveRequests_CD").click()
        cy.get("#action-bar-btn-continue").click()
        cy.get("#action-bar-btn-finish").click().wait(2000)
        cy.get('i').click({ multiple: true, force: true })
        cy.get("#action-bar-btn-finish").click().wait(20000)
        // cy.get("#ctl00_linkSair").click()

        cy.get('#ctl00_MainContent_LoginUser_UserName').type(`${singer2.email}`)
        cy.get('#ctl00_MainContent_LoginUser_Password').type(`${singer2.password}`)
        cy.get('#ctl00_MainContent_LoginUser_LoginButton').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            //   returning false here prevents Cypress from
            //    failing the tes
            return false
        })
        cy.get('#ctl00_ddlRoles').select('Aprovação de Contratos').wait(2000)
        cy.get("#ctl00_dxMenu > ul > li:nth-child(2)", { timeout: 90000 }).click()
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_gdvToApproveContracts_DXFREditorcol2_I", { timeout: 150000 }).type(`${Colaborador1.name}{enter}`)
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_gdvToApproveContracts_DXSelBtn0_D", { timeout: 90000 }).click()
        cy.get("#ctl00_MainContent_cbpCallbackPagina_pgcListaContratos_btnApproveRequests_CD", { timeout: 90000 }).click()
        cy.get("#action-bar-btn-continue", { timeout: 90000 }).click()
        cy.get("#action-bar-btn-finish", { timeout: 90000 }).click()
        cy.get("#tab-form-element-152dfa59-7e0e-408c-afaa-70078e3e01e2 > div > div > div").click()
        cy.get("#action-bar-btn-finish", { timeout: 90000 }).click().wait(20000)
        //cy.get("#ctl00_linkSair").click()

        cy.get('#ctl00_MainContent_LoginUser_UserName').type(`${Colaborador1.email}`)
        cy.get('#ctl00_MainContent_LoginUser_Password').type(`${Colaborador1.password}`)
        cy.get('#ctl00_MainContent_LoginUser_LoginButton').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            //   returning false here prevents Cypress from
            //    failing the tes
            return false
        })
        cy.get("#ctl00_dxMenu > ul > li:nth-child(4)", { timeout: 90000 }).click()
        cy.get("#ctl00_MainContent_TabPagesPageControl_gdvBeneficiaryRequests_DXFREditorcol3_I").type(`${DiadoResgate}{enter}`).wait(5000)
        //     cy.get("#ctl00_MainContent_TabPagesPageControl_gdvBeneficiaryRequests_DXFREditorcol4_I").type('Aguardando assinatura do beneficiário{enter}').wait(5000)
        //    cy.get('#ctl00_MainContent_TabPagesPageControl_gdvBeneficiaryRequests_DXCBtn0 > span').click()
    });
})