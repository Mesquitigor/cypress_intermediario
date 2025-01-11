// import '../e2e/gui/gui_commands';

describe('new_project', () =>{
    beforeEach(() => {
        cy.login()
      })

    it('successfully', () =>{
        const project = "projeto-cypress2"
        const path = "higormesquita"
        const description = "Este é um projeto de Cypress criado a partir do curso de Cypress Intermediário."
        
        cy.createProject(project, path, description)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project}${path}`)
        cy.contains(project).should('be.visible')
        cy.contains(description).should('be.visible')
    })   
})