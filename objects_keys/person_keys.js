const flatten = require('flat');

const personObject = {
  "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
  "name": {
    "fullName": "Alex MacCaw",
    "givenName": "Alex",
    "familyName": "MacCaw"
  },
  "email": "alex@alexmaccaw.com",
  "location": "San Francisco, CA, US",
  "timeZone": "America/Los_Angeles",
  "utcOffset": -8,
  "geo": {
    "city": "San Francisco",
    "state": "California",
    "stateCode": "CA",
    "country": "United States",
    "countryCode": "US",
    "lat": 37.7749295,
    "lng": -122.4194155
  },
  "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
  "site": "http://alexmaccaw.com",
  "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/d54c54ad-40be-4305-8a34-0ab44710b90d",
  "employment": {
    "domain": "clearbit.com",
    "name": "Clearbit",
    "title": "Co-founder, CEO",
    "role": "leadership",
    "subRole": "ceo",
    "seniority": "executive"
  },
  "facebook": {
    "handle": "amaccaw"
  },
  "github": {
    "handle": "maccman",
    "avatar": "https://avatars.githubusercontent.com/u/2142?v=2",
    "company": "Clearbit",
    "blog": "http://alexmaccaw.com",
    "followers": 2932,
    "following": 94
  },
  "twitter": {
    "handle": "maccaw",
    "id": "2006261",
    "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
    "followers": 15248,
    "following": 1711,
    "location": "San Francisco",
    "site": "http://alexmaccaw.com",
    "avatar": "https://pbs.twimg.com/profile_images/1826201101/297606_10150904890650705_570400704_21211347_1883468370_n.jpeg"
  },
  "linkedin": {
    "handle": "pub/alex-maccaw/78/929/ab5"
  },
  "googleplus": {
    "handle": null
  },
  "gravatar": {
    "handle": "maccman",
    "urls": [
      {
        "value": "http://alexmaccaw.com",
        "title": "Personal Website"
      }
    ],
    "avatar": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
    "avatars": [
      {
        "url": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
        "type": "thumbnail"
      }
    ]
  },
  "fuzzy": false,
  "emailProvider": false,
  "indexedAt": "2016-11-07T00:00:00.000Z"
};

const flattenedPersonObj = flatten(personObject);
const personKeys = Object.keys(flattenedPersonObj);

export default personKeys;