#!/usr/bin/env node
const program = require('commander');
const {propmt} = require('inquirer')
const { addCustomer,
    findCustomer,updateCustomer,removeCustomer,listcustomers
} = require('./index')

const questions = [
    {
        type:'input',
        name:'firstname',
        message:'Customer Phone Number'
    },
    {
        type:'input',
        name:'phone',
        message:'Customer Email Address'
    },{
        type:'input',
        name:'email',
        message:'Customer First name'
    }
]

program
.version('1.0.0')
.description('Client Management System')

program
.Command('add <firstname> <lastname> <phone> <email>')
.alias('a')
.description('Add a customer')
.action((firstname,lastname,phone,email)=>{
    addCustomer({firstname,lastname,phone,email})
})

program
.Command('add')
alias('a')
.description(`Add a customer`)
.action(()=>{
    prompt(questions).then(answer=>addCustomer(answer));
})

program
.Command('find<name>')
.alias('f')
.description('Find a customer')
.action(name => findCustomer(name));

program
.Command('update <_id>')
.alias('u')
.description('Update a customer')
.action(_id=>{
    prompt(questions.then(answers=>updateCustomer(_id,answers)))
})

program
.Command('remove <_id>')
.alias('r')
.description('Remove a customer')
.action(_id => removeCustomer(_id));

program
.Command('list')
.alias('l')
.description('List all customers')
.action(()=>listcustomers());






program.parse(process.argv);