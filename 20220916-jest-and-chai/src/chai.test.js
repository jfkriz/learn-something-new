// This expect is the same as "pm.expect" - they are both the Chai chaining & assertions library
const { expect } = require('chai');

// This is just so I can easily generate UUIDs, not really related to chai assertions
const { v4: uuidv4 } = require('uuid');

describe('Chai playground', () => {
    // This is a regular expression to match a UUID - we'll use this later
    const uuidV4regex = /^[\da-fA-F]{8}\b-[\da-fA-F]{4}\b-[\da-fA-F]{4}\b-[\da-fA-F]{4}\b-[\da-fA-F]{12}$/;

    // Setup a "mock" agency response, so we can test stuff about it later
    let agencyResponse;
    beforeEach(() => {
        agencyResponse = {
            id: uuidv4(),
            name: "agency 1",
            applicationIds: [ ],
            versionKey: uuidv4()
        };
    });

    describe('agency name', () => {
        test('name should be defined', () => {
            expect(agencyResponse).to.have.property('name');
        });
        test('name should have the value "agency 1"', () => {
            expect(agencyResponse).to.have.property('name').with.equal("agency 1");
        });
    });

    describe('applicationIds', () => {
        test('should be length 0', () => {
            expect(agencyResponse).to.have.property('applicationIds').have.lengthOf(0);
        });
        test('should be length 2 with correct IDs', () => {
            agencyResponse.applicationIds.push('abc', '123');
            expect(agencyResponse).to.have.property('applicationIds').have.lengthOf(2).and.includes.members(['123', 'abc']);
        });
        test('should be array', () => {
            expect(agencyResponse).to.have.property('applicationIds').to.be.an('array');
        });
    });

    describe('id', () => {
        test('should be valid uuid', () => {
            expect(agencyResponse).to.have.property('id').matches(uuidV4regex);
        });
        test('should not be a valid uuid', () => {
            agencyResponse.id = '123';
            expect(agencyResponse).to.have.property('id').not.matches(uuidV4regex);
        });

    });
});