/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    this.Account.deposit(balance);
    this.accounts.push(newAccount);
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function () {

};

Bank.prototype.getTotalAssets = function () {

};
