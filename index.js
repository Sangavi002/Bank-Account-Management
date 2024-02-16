function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance; 
    this.active = true;

    this.deposit = function(amount){
        if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
        } 
        else {
            console.log("Invalid deposit amount.");
        }
    }

    this.withdraw = function(amount){
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
        } 
        else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    this.checkBalance = function(){
        console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
    }

    this.isActive = function(){
        return this.active;
    }
}

let account1 = new BankAccount(98765,"Sundar","Saving",5000);
let account2 = new BankAccount(56783,"Inbha","Saving",3000);


account1.deposit(3000);
account1.checkBalance();
account1.withdraw(1000)
account1.checkBalance();

account2.deposit(500);
account2.checkBalance();
account2.withdraw(750)
account2.checkBalance();

console.log("Account 1 active status:", account1.isActive());
console.log("Account 2 active status:", account2.isActive());

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

const allAccounts = [account1, account2];
const totalBalance = getTotalBalance(allAccounts);
console.log("Total balance of all active accounts:", totalBalance);