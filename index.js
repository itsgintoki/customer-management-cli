const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb:/.localhost:27017/customercli',{
    useMongoClient: true
});


const Customer = require('./models/customer');
const customer = require('./models/customer');


const addCustomer = (customer) =>{
    Customer.create(customer).then(customer=>{
        console.info('New Customer Added');
        db.close();
    })
}

const findCustomer = (name)=>{
    const search = new RegExp(name,'i');
    Customer.find({$or:[{firstname:search},{lastname:search}]})
    .then(customer=>{
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    })
}

const updateCustomer = (_id,customer)=>{
    Customer.update({_id},customer)
    .then(customer=>{
        console.info('Customer Updated');
        db.close();
    })
}

const removeCustomer = (_id)=>{
    Customer.remove({_id})
    .then(customer=>{
        console.info('Customer Removed');
        db.close();
    })
}

const listcustomers = ()=>{
    Customer.find()
    .then(customers=>{
        console.info(customers);
        console.info(`${customers.length} customers` );
        db.close()
    })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listcustomers
}


