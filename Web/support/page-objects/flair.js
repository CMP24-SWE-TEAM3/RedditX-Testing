class Flair {
    
    getcreatepostButton() {
        return cy.get('#create-post-container');
    }
    getchooseCommunityButton() {
        return cy.get('#choose-community');
    }
    geCommunitiesWindow() {
        return cy.get('#communities-drop-down');
    }
    getcommunity1Button() {
        return cy.get('#communities-drop-down > div:nth-child(4) > div:nth-child(7)');
    }
    
    getflairButton() {
        return cy.get('.sc-imTPag > .sc-bJjNXm > [data-testid="flair-button"]')
    }
    getwindowofselectflair() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div');
    }
    gettitleofflairwindow() {
        return cy.get('#contained-modal-title-vcenter');
    }
    getwindowofselectedflairtitle() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-islFiG.hUSWwi > p');
    }
    getsearchflaircontainer() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-PBEJI.lksnpv > div');
    }
    getflair1() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-PBEJI.lksnpv > form > div:nth-child(1)')
    }
    getflair2() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-PBEJI.lksnpv > form > div:nth-child(2)');
    }
    getflair3() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-PBEJI.lksnpv > form > div:nth-child(3)')
    }
    getclearflairbutton() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-eCrewB.cBpYMc.modal-footer > button.sc-eJKXev.iHEUij');
    }  
    getapplybutton() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-eCrewB.cBpYMc.modal-footer > button.sc-fFRahO.hxQufV');
    }
    getexitButton() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-iuxOeI.eXripT.modal-header > button');
    }
    geteditflaircontanier() {
        return cy.get('body > div.sc-jephDI.hESCdC.modal > div > div > div.sc-fjWoZz.hUaTQs.modal-body > div.sc-gInZnl.SvDlU > input[type=text]');
    }
  }
  
  export default new Flair();
  