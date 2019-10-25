let BookStore = require("../task");

let expect = require("chai").expect;
let assert = require("chai").assert;

describe('test', () => {
    let store = new BookStore();
    beforeEach(function () {
        store = new BookStore('SoftUni');
    })

    describe('constructor tests', function () {
        it('should initialize properties correctly', function () {
            expect(store.name).to.equal('SoftUni');
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
        });
    });

    describe('stockBooks tests', function () {
        it('should push correct item', function () {
            //Arrange
            const expectedBook = {
                title: "TestTitle",
                author: "TestAuthor"
            };

            //Act
            store.stockBooks(['TestTitle-TestAuthor']);

            //Assert
            expect(store.books.length).to.equal(1);
        });

        it('should have correct length', function () {
            //Arrange
            const expectedBook = {
                title: "TestTitle",
                author: "TestAuthor"
            };

            //Act
            store.stockBooks(['TestTitle-TestAuthor']);

            //Assert
            expect(store.books[0]).to.deep.equal(expectedBook);
        });

        it('should have correct return', function () {
            //Arrange
            const expectedBook = [{
                title: "TestTitle",
                author: "TestAuthor"
            }];

            //Act
            let result = store.stockBooks(['TestTitle-TestAuthor']);

            //Assert
            expect(result).to.deep.equal(expectedBook);
        });
    });

    describe('hire tests', function () {
        it('should throw error', function () {
            //Arrange
            store.hire('TestName', 'TestPosition');

            //Act

            const hire = () => store.hire('TestName', 'TestPosition');
            

            //Assert
            expect(hire).to.throw(Error, 'This person is our employee');
        });

        it('should push properly', function () {
            //Arrange
            const expectedWorker = {
                name: 'TestName',
                position: 'TestPosition',
                booksSold: 0
            };

            //Act

            let outputMsg = store.hire('TestName', 'TestPosition');

            //Assert
            expect(store.workers.length).to.equal(1);
            expect(outputMsg).to.equal(`TestName started work at SoftUni as TestPosition`);            
            expect(store.workers[0]).to.deep.equal(expectedWorker);
        });
    });

    describe('fire tests', function () {
        it('should throw error', function () {
            //Arrange

            //Act

            const fire = () => store.fire('TestName');
            

            //Assert
            expect(fire).to.throw(Error, "TestName doesn't work here");
        });

        it('should remove properly', function () {
            //Arrange
            store.hire('TestName', 'TestPosition');
            const outputMsg = store.fire('TestName');

            //Act

            //Assert
            expect(store.workers.length).to.equal(0);
            expect(outputMsg).to.equal(`TestName is fired`);    
        });
        
    });

    describe('sellBook tests', function () {
        it('should throw error out of stock', function () {
            //Arrange

            //Act

            const sellBook = () => store.sellBook('TestBook', 'TestWorker');
            

            //Assert
            expect(sellBook).to.throw(Error, 'This book is out of stock');
        });

        it('should throw error no such worker', function () {
            //Arrange
            store.stockBooks(['TestBook-TestAuthor'])

            //Act

            const sellBook = () => store.sellBook('TestBook', 'TestWorker');
            

            //Assert
            expect(sellBook).to.throw(Error, "TestWorker is not working here");
        });

        it('should sell book', function () {
            //Arrange
            store.stockBooks(['TestBook-TestAuthor'])
            store.hire('TestWorker', 'TestPosition')

            //Act

            store.sellBook('TestBook', 'TestWorker');
            

            //Assert
            expect(store.workers[0].booksSold).to.equal(1);
            expect(store.books.length).to.equal(0);
        });
        
    });

    describe('printWorkers tests', function () {
        it('should print workers correctly', function () {
            //Arrange
            store.hire('TestWorker', 'TestPosition');
            let expected = "Name:TestWorker Position:TestPosition BooksSold:0"

            //Act        
            //Assert
            expect(store.printWorkers()).to.equal(expected);
        });
        
    });
});