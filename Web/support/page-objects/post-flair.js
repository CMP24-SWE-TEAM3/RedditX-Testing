class PostFlair {
    getPostFlairButton() {
        return cy.get("#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(11) > a");
    }
    getAddFlairButton() {
        return cy.get("#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-iDmqZj.kgltjk > button.sc-fgsTfp.jcPkXH");
    }
    getPostflairSettingsButton() {
        return cy.get('#choose-community');
    }
    getWindowOfFlairs() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg');
    }
    getAddFlairWindow() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg');
    }
    
    getPostFalirPreviewContainer() {
        return cy.get('#<ke-lin');
    }
    getclassCSScontainer() {
        return cy.get('#');
    }
    getSETTINGScontainer() {
        return cy.get('#');
    }
    getteditFalirButtonfromAddflair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-dzTBpY.fFMuCm > div.sc-bqezCg.hcWzJr > button.sc-gwrawi.hJkMhR');
    }
    getDeleteFalirButtonfromAddflair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-dzTBpY.fFMuCm > div.sc-bqezCg.hcWzJr > button.sc-jPipnV.keluEs');
    }
    getFlairtextcontainerfromAddflair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-hsndKn.hItbiP > div.sc-jmHipa.gklwUx > div > div.sc-eCDatj.fPVrcW > label > div > span > input[type=text]');
    }
    getFlairtextcontainerfromFirstFlair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div.sc-hsndKn.hItbiP > div.sc-jmHipa.gklwUx > div > div.sc-eCDatj.fPVrcW > label > div > span > input[type=text]');
    }
    getSaveButtonfromFirstFlair() {
        return cy.get('    #root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div.sc-hsndKn.hItbiP > div.sc-iTQEHp.bNZIpA > button.sc-gwVtdH.hqFACl');
    }
    getCssClasscontainerfromAddflair() {
        return cy.get('#');
    }
    getModOnlyButtonfromAddflair() {
        return cy.get('#');
    }
    getAllowUsereditsButtonfromAddflair() {
        return cy.get('#');
    }
    getSaveButtonfromAddflair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-hsndKn.hItbiP > div.sc-iTQEHp.bNZIpA > button.sc-gwVtdH.hqFACl');
    }  
    getCancleButtonfromAddflair() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-hsndKn.hItbiP > div.sc-iTQEHp.bNZIpA > button.sc-cafTvy.bwDLTg');
    }
    getFlairBackGroundcheck() {
        return cy.get('#');
    }
    getFlairTextColorcheck() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-hsndKn.hItbiP > div.sc-jmHipa.gklwUx > div > div:nth-child(4) > label > button');
    }
    getEditPostapperancecheck() {
        return cy.get('#');
    }
    getCancleButtonWindow() {
        return cy.get('body > div.fade.sc-kvVhHC.jaHXVD.modal.show > div > div > div.modal-header');
    }
    getCancleWindowTitle() {
        return cy.get('body > div.fade.sc-kvVhHC.jaHXVD.modal.show > div > div > div.modal-header > div');
    }
    getcancleButtonfromCancleWindow() {
        return cy.get('body > div.fade.sc-kvVhHC.jaHXVD.modal.show > div > div > div.modal-footer > button.sc-hUZyWc.hwWupJ');
    }
    getDiscardButtonfromCancleWindow() {
        return cy.get('body > div.fade.sc-kvVhHC.jaHXVD.modal.show > div > div > div.modal-footer > button.sc-iOMIgP.cMcoxe');
    }
    getexitButtonfromCancleWindow() {
        return cy.get('body > div.fade.sc-kvVhHC.jaHXVD.modal.show > div > div > div.modal-header > button');
    }
    getPostFlairSettingsWindow() {
        return cy.get('#');
    }
    getTitleOfPostFlairSettingsWindow() {
        return cy.get('#');
    }
    getCancleButtonPostFlairSettingsWindow() {
        return cy.get('#');
    }
    getSaveButtonPostFlairSettingsWindow() {
        return cy.get('#');
    }
    getSaveButtonfromeditFlair() {
        return cy.get('#');
    }
    getEnablePostFlairCheck() {
        return cy.get('#');
    }
    getAllowuserstoassignthereownCheck() {
        return cy.get('#');
    }
    getAllowuserstoassignthereownWindow() {
        return cy.get('#');
    }
    getTextandEmojisCheckFromallowuser() {
        return cy.get('#');
    }
    getEmojisOnlyCheckFromallowuser() {
        return cy.get('#');
    }
    getTextOnlyCheckFromallowuser() {
        return cy.get('#');
    }
    getLimitnumberOfEmojisButton() {
        return cy.get('#');
    }
    getLimitnumberOfEmojisWindow() {
        return cy.get('#');
    }
    getLimitnumberOfEmojisFirstcheckButton() {
        return cy.get('#');
    }
    getLimitnumberOfEmojissecondcheckButton() {
        return cy.get('#');
    }
    getWindowOfDeleteButton() {
        return cy.get('body > div.fade.sc-jmxFWv.cqSYij.modal.show > div > div > div.modal-header');
    }
    getTitleWindowOfDelete() {
        return cy.get('#');
    }
    getDeleteButtonOfWindowOfDelete() {
        return cy.get('body > div.fade.sc-jmxFWv.cqSYij.modal.show > div > div > div.modal-footer > button.sc-isKwLI.logjIo');
    }
    getcancleButtonOfWindowOfDelete() {
        return cy.get('#');
    }
    getexitButtonOfWindowOfDelete() {
        return cy.get('#');
    }
    geteditButtonOftheFristitem() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div:nth-child(1) > div.sc-bqezCg.hcWzJr > button.sc-gwrawi.hJkMhR');
    }
    gettheFristitem() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div:nth-child(1)');
    }
    getDeleteButtonOftheSeconditem() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div:nth-child(2) > div.sc-bqezCg.hcWzJr > button.sc-jPipnV.keluEs');
    }
    gettheSeconditem() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-dkzciG.eKoEwg > div.sc-kTGfxi.jIYeFx > div:nth-child(2) > div > div > div:nth-child(2)');
    }


}
export default new PostFlair();
