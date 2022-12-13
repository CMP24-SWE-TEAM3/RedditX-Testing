class Profile {
    getUpvoteUnites(){
        return cy.get(".upvote-units")
    }

    getUpvotes(){
        return cy.get(".upvote")
    }

    getTimeUnites(){
        return cy.get(".time-units")
    }

    getTimeNumber(){
        return cy.get(".time-number")
    }
}

export default new Profile();