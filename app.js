const clearbit = require('clearbit')(process.env.CLEARBIT_API_KEY);
const flatten = require('flat');
const companyFields = require('./objects_keys/company_keys');
const personFields = require('./objects_keys/person_keys');
const XLSX = require('xlsx');
const dotenv = require('dotenv');
dotenv.config();

const EMAILS_FILE = 'data.xlsx'; // File that contains emails
const OUTPUT_FILE = 'enriched.xlsb'; // Enriched file to write to

(async function() {
  const emailsList = ReadEmails(); // Read emails from file
  const enrichedEmails = await EnrichEmails(emailsList); // Enrich emails from the excel file
  WriteToSheet(enrichedEmails); // Write enriched emails to the excel sheet
})();

function ReadEmails() {
  const workbook = XLSX.readFile(EMAILS_FILE);
  const emailsList = workbook.Strings.filter(email => validateEmail(email.t) === true);
  return emailsList;
};

async function EnrichEmails(emails) {
   console.log(emails.length + ' emails will be enriched');
   return await Promise.all(emails.map(async(email) => {
     try {
      const response = await clearbit.Enrichment.find({ email: email, stream: true });
      if (response) {
        const { person, company } = response;
        const combinedObject = { email, person, company };
        return combinedObject;
      }
     } catch (error) {
       console.log('Resource not found for email: ', email);
     }
   }));
};

function FlatenObjects(toBeFlattened) {
  return toBeFlattened.filter(person => flatten(person));
};

function WriteToSheet(enrichedObjectsList) {
  console.log('Flattening objects...');
  const flattenedObjects = FlatenObjects(enrichedObjectsList); // Flatten objects so each field has a column
  console.log('Writing to sheet...');
  const combinedFields = personFields.concat(companyFields);
  const worksheet = XLSX.utils.json_to_sheet(flattenedObjects, { header: combinedFields });
  const enrichedWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(enrichedWorkbook, worksheet, 'enriched data');
  XLSX.writeFile(enrichedWorkbook, OUTPUT_FILE);
  console.log(`Writing to file "${OUTPUT_FILE}" was completed successfuly`);
};

function validateEmail(email) {
  if (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  } else {
    return false;
  }
};
