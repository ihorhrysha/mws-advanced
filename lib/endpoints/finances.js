const generateEndpoints = require('./endpoints-utils');

const categoryName = 'Finances';

const apiVersion = '2015-05-01';

const endpointList = [
    'ListFinancialEventGroups',
    'ListFinancialEventGroupsByNextToken',
    'ListFinancialEvents',
    'ListFinancialEventsByNextToken',
    'GetServiceStatus',
];

const newEndpointList = {
    ListFinancialEvents: {
        throttle: {
            maxInFlight: 30,
            restoreRate: 1800,
        },
        params: {
            MaxResultsPerPage: {
                type: 'xs:int', // TODO: implement 'int' in type checker
                required: false,
            },
            AmazonOrderId: {
                type: 'xs:string', // TODO: uses 3-7-7 format only, validate?
                required: false,
            },
            FinancialEventGroupId: {
                type: 'xs:string', // TODO: "any valid financial event group identifier" -- What are those?
                required: false,
            },
            PostedAfter: {
                type: 'xs:dateTime',
                required: false,
            },
            PostedBefore: {
                type: 'xs:dateTime',
                required: false,
            },
        },
        returns: {
            NextToken: {
                type: 'xs:string',
                required: false,
            },
            FinancialEvents: {
                type: 'FinancialEvents',
                required: true,
            },
        },
    },
};

const endpoints = generateEndpoints(
    categoryName,
    apiVersion,
    endpointList,
    newEndpointList,
);

module.exports = endpoints;