/// <reference types="Cypress"/>
import PracticeFormPage from '../pageObjects/practiceFormPage';

context('Cypress demoqa practiceForm test', () => {
    describe('Fill in practice form', () => {
        const practiceFormPage = new PracticeFormPage();
        const firstName = 'Wood';
        const lastName = 'Chucker';
        const email = 'woodchucker@gmail.com';
        const phoneNumber = Math.floor(1000000000 + Math.random() * 900000000);
        const dateOfBirth = '30 Apr 1997';
        const subjects = 'Hindi';
        const currentAdress = 'Devilstreet 666';
        const gender = 'Male'
        const state = 'NCR';
        const city = 'Delhi';

        beforeEach(() => {
            cy.on('uncaught:exception', (err, runnable) => {
                expect(err.message).to.include('.setup is not a function');
                return false;
            });
        });

        it('Visit practice form webpage', () => {
            practiceFormPage
                .visitPage();
        });

        it('Fill in name inputs', () => {
            practiceFormPage
                .getFirstNameInput()
                .type(firstName)
                .should('have.value', firstName);
            practiceFormPage
                .getLastNameInput()
                .type(lastName)
                .should('have.value', lastName);
        });

        it('Fill in email input', () => {
            practiceFormPage
                .getEmailInput()
                .type(email)
                .should('have.value', email);
        });

        it('Fill in Gender input with radio button', () => {
            practiceFormPage
                .getGenderInput()
                .check({ force: true })
                .should('have.value', 'Male');
        });

        it('Fill in phoneNumber input', () => {
            practiceFormPage
                .getPhoneNumberInput()
                .type(phoneNumber)
                .should('have.value', phoneNumber)
                .invoke('val')
                .and('have.length', 10);
        });

        it('Fill in date of birth Input', () => {
            practiceFormPage
                .getDateOfBirthInput()
                .click();
            cy
                .get('.react-datepicker__month-select')
                .select(3);
            cy
                .get('.react-datepicker__year-select')
                .select("1997");
            cy
                .get('div.react-datepicker__month > div:nth-child(5) > div.react-datepicker__day.react-datepicker__day--030')
                .click();
            practiceFormPage
                .getDateOfBirthInput()
                .should('have.value', dateOfBirth);
        });

        it('Fill in subjects input', () => {
            practiceFormPage
                .getSubjectsInput()
                .type(subjects + '{enter}');
        });

        it('Fill in hobbies checkbox', () => {
            practiceFormPage
                .getHobbiesInput()
                .within(() => {
                    cy
                        .get('[type="checkbox"]')
                        .first()
                        .check({ force: true });
                });
        });

        it('Fill in Current Adress textarea', () => {
            practiceFormPage
                .getCurrentAdressInput()
                .type(currentAdress)
                .should('have.value', currentAdress);
        });

        it('Select correct state', () => {
            practiceFormPage
                .getStateSelect()
                .type(state + '{enter}');
        });

        it('Select correct city', () => {
            practiceFormPage
                .getCitySelect()
                .type(city + '{enter}');
        });

        it('Submit practice form', () => {
            practiceFormPage
                .submitForm()
                .click({ force: true });
        });

        it('Validate form values', () => {
            practiceFormPage
                .getModal()
                .within(() => {
                    practiceFormPage.validateModal(1, `${firstName} ${lastName}`);
                    practiceFormPage.validateModal(2, email);
                    practiceFormPage.validateModal(3, gender);
                    practiceFormPage.validateModal(4, phoneNumber);
                    practiceFormPage.validateModal(5, '30 April,1997');
                    practiceFormPage.validateModal(6, subjects);
                    practiceFormPage.validateModal(7, 'Sports');
                    practiceFormPage.validateModal(9, currentAdress);
                    practiceFormPage.validateModal(10, `${state} ${city}`);
                });
        });
    });
});