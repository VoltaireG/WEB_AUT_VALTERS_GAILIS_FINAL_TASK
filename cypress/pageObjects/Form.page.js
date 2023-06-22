export class FormPage {
    static visitFormPage() {
      cy.visit('https://demoqa.com/automation-practice-form')
    }
  
    static fillFirstName(firstName) {
      cy.get('#firstName').type(firstName)
    }
  
    static fillLastName(lastName) {
      cy.get('#lastName').type(lastName)
    }
  
    static fillEmail(email) {
      cy.get('#userEmail').type(email)
    }
  
    static selectGender(gender) {
      cy.get('#genterWrapper').contains(gender).click()
    }
  
    static fillMobileNumber(number) {
      cy.get('#userNumber').type(number)
    }
  
    static selectDateOfBirth(date, month, year) {
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select(month);
      cy.get('.react-datepicker__year-select').select(year);
      cy.get('.react-datepicker__day')
        .not('.react-datepicker__day--outside-month')
        .contains(date)
        .click();
    }   
  
    static selectSubject(subject) {
      cy.get('#subjectsInput').type(subject).type('{enter}')
    }
  
    static selectHobby(hobby) {
      cy.get('#hobbiesWrapper').contains(hobby).click()
    }
  
    static uploadImage(filename) {
      cy.get('#uploadPicture').then((el) => {
        cy.fixture(`files/${filename}`, 'base64').then((fileContent) => {
          const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
          const testFile = new File([blob], filename, { type: 'image/jpeg' });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el[0].files = dataTransfer.files;
          cy.wrap(el).trigger('change', { force: true });
        });
      });
    }
    
   static fillCurrentAddress(address) {
      cy.get('#currentAddress').type(address);
    }
    
   static selectState(state) {
      cy.get('#state').contains('Select State').click({ force: true })
      cy.get(`#react-select-3-option-${state}`).click({ force: true })
  }
  
   static selectCity(city) {
    cy.get('#city').contains('Select City').click({ force: true });
    cy.get(`#react-select-4-option-${city}`).click({ force: true });
  }
  

    static clickSubmit() {
      cy.get('#submit').click({ force: true })
    }
  
    static validateLabeledRow(label, value) {
      cy.get('.table-responsive')
        .contains('td', label)
        .next()
        .should('have.text', value);
    }
    
    
    
  }
  