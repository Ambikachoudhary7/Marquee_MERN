Object().__proto__.sendWithdrawEmail = function (amount) {
    console.log(`To ${this.__accountHolderName} Laxman,
    This is to inform you that amount of Rs.${amount-deposit} is withdraw`)
};