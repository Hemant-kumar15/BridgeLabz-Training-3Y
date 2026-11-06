class BankAccount {
 #balance;
 constructor(balance) { this.#balance=balance; }
 deposit(amount) {
  if(amount<=0) throw new Error("Deposit must be greater than zero.");
  this.#balance+=amount;
 }
 withdraw(amount) {
  if(amount<=0) throw new Error("Withdrawal must be greater than zero.");
  if(amount>this.#balance) throw new Error("Insufficient balance.");
  this.#balance-=amount;
 }
 getBalance() { return this.#balance; }
}
let account=new BankAccount(5000);
account.deposit(2000);
console.log("Balance after deposit:",account.getBalance());
try { account.withdraw(10000); }
catch(error) { console.log("Transaction failed:",error.message); }
account.withdraw(1000);
console.log("Final balance:",account.getBalance());