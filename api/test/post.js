// To make api calls
const expect = require('chai').expect;
const request = require('supertest');
var mongoose = require('mongoose');

// import file to perform test on
const app = require('../app.js');

connect to local db
function connect(){
    return mongoose.connect('mongodb://localhost/brainhub', {useNewUrlParser: true});
}

//close db connection
function close(){
    return mongoose.disconnect();
}

describe('Post/react', ()=>{
    before((done)=>{
        connect()
        .then(()=> done())
        .catch(err => done(err));
        
    })

    after((done) => {
        close()
        .then(()=> done())
        .catch(err => done(err));
    })

    //Testing post api by sending data
    it('OK, passing form data', (done) =>{
        request(app).post('/react')
        .send({firstName:'Sagar', lastName:'Ekhe', email:'sagar@gmail.com'})
        .then(res => {
            const body = res.body;
            expect(body).to.contain.property('firstName');
            expect(body).to.contain.property('lastName');
            expect(body).to.contain.property('email');
            done();
        })
        .catch( err => done(err));
    })
})