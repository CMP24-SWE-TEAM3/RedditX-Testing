class Notifications {
    getNotifictionsButtonFromHomePage() {
        return cy.get('#notification-box')
    }
    getSeeAllNotifictionsButton() {
        return cy.get('#popover-contained > footer');
    }

    getActivityTabButton() {
        return cy.get('#root > div > div > div.sc-dKhmYf.hsbllF > nav > ul > div > li:nth-child(1) > a')
    }
    getMessageTabButton() {
        return cy.get('#root > div > div > div.sc-dKhmYf.hsbllF > nav > ul > div > li:nth-child(2) > a');
    }
    getMarkedAsReadTabButton() {
        return cy.get('#root > div > div > div.sc-dKhmYf.hsbllF > nav > ul > li > a');
    }
    getSettingsTabButton() {
        return cy.get('');
    }
    //activity
    getFirstNotification() {
        return cy.get('#root > div > div > div.sc-hdanKh.fAAuzD > div > div > div > ol > li:nth-child(1) > div');
    }
    getaboutNotificationButton() {
        return cy.get('#root > div > div > div.sc-hdanKh.fAAuzD > div > div > div > ol > li:nth-child(1) > div > span.sc-gzTcjy.yUduM > span.sc-hYrYqN.dOQRxm > div');
    }
    getHideThisNotificationButton() {
        return cy.get('#popup-1');
    }
    getDisableUpdatesFromCommunityButton() {
        return cy.get('');
    }
    getDisableUpdatesFromCommunityAlert() {
        return cy.get('');
    }
    //Settings
    ////////////////MESSAGES
    getInboxmessagesCheckBox() {
        return cy.get('');
    }
    getChatmessagesCheckBox() {
        return cy.get('');
    }
    getChatrequestCheckBox() {
        return cy.get('');
    }
    ///////
    ////////////////ACTIVITY
    getCommunityAlertsButton() {
        return cy.get('');
    }
    getMentionsofusernameCheckBox() {
        return cy.get('');
    }
    getCommentsonyourpostsCheckBox() {
        return cy.get('');
    }
    getUpvotesonyourcommentsCheckBox() {
        return cy.get('');
    }
    getRepliestoyourcommentsCheckBox() {
        return cy.get('');
    }
    getActivityonyourcommentsCheckBox() {
        return cy.get('');
    }
    ////////////////
    /////////////////////////////RECOMMENDATIONS
    getTrendingpostsCheckBox() {
        return cy.get('');
    }
    getBroadcastrecommendationsCheckBox() {
        return cy.get('');
    }

    getCommunityrecommendationsCheckBox() {
        return cy.get('');
    }
    ///////////////
    /////////////////////UPDATES
    getRedditannouncementsCheckBox() {
        return cy.get('');
    }
    getCakedayCheckBox() {
        return cy.get('');
    }
    ///////////////
    /////////////////////Moderations
    getModnotificationsCheckBox() {
        return cy.get('');
    }
    
}
export default new Notifications();
