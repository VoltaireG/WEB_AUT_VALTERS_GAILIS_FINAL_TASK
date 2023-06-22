import { FormPage } from '../pageObjects/Form.page'

describe('Form Submission', () => {
    beforeEach(() => {
      FormPage.visitFormPage()
    })
  
    it('should submit the form with correct information', () => {
      FormPage.fillFirstName('Jānis')
      FormPage.fillLastName('Līgo')
      FormPage.fillEmail('janisligo@alus.lv')
      FormPage.selectGender('Male')
      FormPage.fillMobileNumber('28977007')
      FormPage.selectDateOfBirth('28', 'February', '1930')
      FormPage.selectSubject('Economics')
      FormPage.selectHobby('Music')
      FormPage.uploadImage('vs.jpg')
      FormPage.fillCurrentAddress('Moon street');
      FormPage.selectState('0')
      FormPage.selectCity('0')
      FormPage.clickSubmit()
  
      FormPage.validateLabeledRow('Student Name', 'Jānis Līgo')
      FormPage.validateLabeledRow('Student Email', 'janisligo@alus.lv')
      FormPage.validateLabeledRow('Gender', 'Male')
      FormPage.validateLabeledRow('Mobile', '28977007')
      FormPage.validateLabeledRow('Date of Birth', '28 February,1930')
      FormPage.validateLabeledRow('Subjects', 'Economics')
      FormPage.validateLabeledRow('Hobbies', 'Music')
      FormPage.validateLabeledRow('Picture', 'vs.jpg')
      FormPage.validateLabeledRow('Address', 'Moon street')
      FormPage.validateLabeledRow('State and City', 'NCR Delhi')
    })
  })