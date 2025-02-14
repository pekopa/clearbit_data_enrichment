const flatten = require('flat');

const companyObject = {
  "id": "3f5d6a4e-c284-4f78-bfdf-7669b45af907",
  "name": "Uber",
  "legalName": "Uber Technologies, Inc.",
  "domain": "uber.com",
  "domainAliases": [
    "uber.org",
    "ubercab.com"
  ],
  "site": {
    "phoneNumbers": [],
    "emailAddresses": [
      "domains@uber.com"
    ]
  },
  "category": {
    "sector": "Information Technology",
    "industryGroup": "Software & Services",
    "industry": "Internet Software & Services",
    "subIndustry": "Internet Software & Services",
    "sicCode": "47",
    "naicsCode": "51"
  },
  "tags": [
    "Technology",
    "Marketplace",
    "Mobile",
    "B2C",
    "Ground Transportation",
    "Transportation",
    "Internet"
  ],
  "description": "Get a taxi, private car or rideshare from your mobile phone. Uber connects you with a driver in minutes. Use our app in cities around the world.",
  "foundedYear": 2009,
  "location": "1455 Market St, San Francisco, CA 94103, USA",
  "timeZone": "America/Los_Angeles",
  "utcOffset": -7,
  "geo": {
    "streetNumber": "1455",
    "streetName": "Market Street",
    "subPremise": null,
    "city": "San Francisco",
    "postalCode": "94103",
    "state": "California",
    "stateCode": "CA",
    "country": "United States",
    "countryCode": "US",
    "lat": 37.7752315,
    "lng": -122.4175278
  },
  "logo": "https://logo.clearbit.com/uber.com",
  "facebook": {
    "handle": "uber"
  },
  "linkedin": {
    "handle": "company/uber-com"
  },
  "twitter": {
    "handle": "Uber",
    "id": "19103481",
    "bio": "Evolving the way the world moves by seamlessly connecting riders to drivers through our app. Question, concern, or praise? Tweet at @Uber_Support.",
    "followers": 570351,
    "following": 377,
    "location": "Global",
    "site": "http://t.co/11eIV5LX3Z",
    "avatar": "https://pbs.twimg.com/profile_images/697242369154940928/p9jxYqy5_normal.png"
  },
  "crunchbase": {
    "handle": "organization/uber"
  },
  "emailProvider": false,
  "type": "private",
  "ticker": null,
  "identifiers": {
    "usEIN": "452647441"
  },
  "phone": null,
  "indexedAt": "2016-11-07T00:00:00.000Z",
  "metrics": {
    "alexaUsRank": 544,
    "alexaGlobalRank": 943,
    "employees": 20313,
    "employeesRange": "10k-50k",
    "marketCap": null,
    "raised": 10610000000,
    "annualRevenue": null,
    "estimatedAnnualRevenue": "$1B-$10B",
    "fiscalYearEnd": 12
  },
  "tech": [
    "google_analytics",
    "double_click",
    "mixpanel",
    "optimizely",
    "typekit_by_adobe",
    "android",
    "nginx",
    "ios",
    "google_apps"
  ],
  "techCategories": [
    "analytics",
    "advertising",
    "website_optimization",
    "operating_system",
    "web_servers",
    "programming_framework",
    "productivity"
  ],
  "parent": {
    "domain": null
  },
  "ultimateParent": {
    "domain": null
  }
};

const flattenedCompanyObj = flatten(companyObject);
const companyKeys = Object.keys(flattenedCompanyObj);

export default companyKeys;