const Signup = require('../pageobjects/Signup');
const Login = require('../pageobjects/Login');
const Data=require("../fixtures/Data.json");

const SignupPOM = new Signup();
const LoginPOM = new Login();


describe('Signup testing', () => {

  
  afterEach(async () => {
    await driver.reset();
  });
  beforeEach(async()=>{
    const contineuButton =await LoginPOM.getContineuWithEmail();
    await contineuButton.click();
    const signupButton= await LoginPOM.signupButton();
    await signupButton.click();
  })

  it("all the fields are empty ",async ()=>{
    const signupButton=await SignupPOM.signupButtonPOM();
    expect(signupButton.isEnabled()).toBe(false);
  })

  it("two empty fields ",async ()=>{
    const emailField=await SignupPOM.emailTextBoxPOM();
    await emailField.addValue(Data.validEmail);
    const signupButton=await SignupPOM.signupButtonPOM();
    expect(signupButton.isEnabled()).toBe(false);
  })

  it("one empty field ",async ()=>{
    const emailField=await SignupPOM.emailTextBoxPOM();
    await emailField.addValue(Data.validEmail);

    const usernameField=await SignupPOM.usernameTextBoxPOM();
    await usernameField.addValue(Data.validUsername);

    const signupButton=await SignupPOM.signupButtonPOM();
    expect(signupButton.isEnabled()).toBe(false);
  })

  it("no empty field and the data is valid",async ()=>{
    const emailField=await SignupPOM.emailTextBoxPOM();
    const usernameField=await SignupPOM.usernameTextBoxPOM();
    const passwordField=await SignupPOM.passwordTextBoxPOM();
    await passwordField.addValue(Data.validPassword);
    await emailField.addValue(Data.validEmail);
    await usernameField.addValue(Data.validUsername);


    const signupButton=await SignupPOM.signupButtonPOM();
    expect(await signupButton.isEnabled()).toBe(true);
    await signupButton.click();
    const manButton=await LoginPOM.getManButton();
    await manButton.click();
    const interestsSection= await LoginPOM.getInterestsSection();
    expect(await interestsSection.isEnabled()).toBe(true);
  })

  // test validations
  it("no empty field and the data is invalid email",async ()=>{

    const emailField=await SignupPOM.emailTextBoxPOM();
    const usernameField=await SignupPOM.usernameTextBoxPOM();
    const passwordField=await SignupPOM.passwordTextBoxPOM();
    await passwordField.addValue(Data.validPassword);
    await emailField.addValue(Data.invalidEmail);
    await usernameField.addValue(Data.validUsername);
    

    const signupButton=await SignupPOM.signupButtonPOM();
    await signupButton.click();
    const emailError= await SignupPOM.signupEmailErrorPOM();
    expect(await emailError.getAttribute("contentDescription")).toBe("Not a valid email address");
  })

  it("no empty field and the data is invalid username(1)",async ()=>{

    const emailField=await SignupPOM.emailTextBoxPOM();
    const usernameField=await SignupPOM.usernameTextBoxPOM();
    const passwordField=await SignupPOM.passwordTextBoxPOM();
    await passwordField.addValue(Data.validPassword);
    await emailField.addValue(Data.validEmail);
    await usernameField.addValue(Data.invalidUsername1);
  

    const signupButton=await SignupPOM.signupButtonPOM();
    await signupButton.click();
    const usernameError= await SignupPOM.signupUsernameErrorPOM("Letters, numbers, dashes, and underscores only. please try again without symbols.");
    expect(await usernameError.isDisplayed()).toBe(true);
  })

  it("no empty field and the data is invalid username(2)",async ()=>{

    const emailField=await SignupPOM.emailTextBoxPOM();
    const usernameField=await SignupPOM.usernameTextBoxPOM();
    const passwordField=await SignupPOM.passwordTextBoxPOM();
    await passwordField.addValue(Data.validPassword);
    await emailField.addValue(Data.validEmail);
    await usernameField.addValue(Data.invalidUsername3);
    //
    const signupButton=await SignupPOM.signupButtonPOM();
    await signupButton.click();
    const usernameError= await SignupPOM.signupUsernameErrorPOM("Username must be between 3 and 20 characters");
    expect(await usernameError.isDisplayed()).toBe(true);
  })


  it.only("no empty field and the data is invalid password",async ()=>{
    const emailField=await SignupPOM.emailTextBoxPOM();
    const usernameField=await SignupPOM.usernameTextBoxPOM();
    const passwordField=await SignupPOM.passwordTextBoxPOM();
    await passwordField.addValue(Data.invalidPassword);
    await emailField.addValue(Data.validEmail);
    await usernameField.addValue(Data.invalidUsername3);

    const signupButton=await SignupPOM.signupButtonPOM();
    await signupButton.click();
    const passwordError= await SignupPOM.signupPasswordErrorPOM();
    expect(await passwordError.isDisplayed()).toBe(true);
  })
  
})
