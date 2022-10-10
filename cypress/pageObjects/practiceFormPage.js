/// <reference types="Cypress"/>

class PracticeFromPage {
    visitPage() {
        return cy.visit('automation-practice-form');
    }

    getFirstNameInput() {
        return cy.get('input[id="firstName"]');
    }

    getLastNameInput() {
        return cy.get('input[id="lastName"]');
    }

    getEmailInput() {
        return cy.get('input[id="userEmail"]');
    }

    getGenderInput() {
        return cy.get('input[id="gender-radio-1"]');
    }

    getPhoneNumberInput() {
        return cy.get('input[id="userNumber"]');
    }

    getDateOfBirthInput() {
        return cy.get('input[id="dateOfBirthInput"]');
    }

    getSubjectsInput() {
        return cy.get('.subjects-auto-complete__value-container');
    }

    getHobbiesInput() {
        return cy.get('[id="hobbiesWrapper"]');
    }

    getCurrentAdressInput() {
        return cy.get('textarea[id="currentAddress"]');
    }

    getStateSelect() {
        return cy.get('[id="state"]');
    }

    getCitySelect() {
        return cy.get('[id="city"]');
    }

    submitForm() {
        return cy.get('button[id="submit"]')
    }

    getModal() {
        return cy.get(".modal-body")
    }

    validateModal(tdSelectorPostion, valueToValidate) {
        return cy.get('tr').eq(tdSelectorPostion).within(() => {
            cy
                .get('td')
                .last()
                .should('contain', valueToValidate);
        });
    }
}

export default PracticeFromPage;