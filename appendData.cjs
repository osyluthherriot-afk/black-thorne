const fs = require('fs');

const logsPath = 'C:\\Users\\Nicholai.PC-1\\.gemini\\antigravity\\scratch\\ARGSite\\src\\data\\logs.js';
const mdPath = 'F:\\AInvenDat\\ARG\\THE_ALURE_INCIDENT_COMPLETE_CASEFILE.md';

const mdContent = fs.readFileSync(mdPath, 'utf8');

const vanMessage = `
// --- THE ALURE INCIDENT (VAN OVERRIDE) ---
export const LOG_VAN_MESSAGE = {
  id: 'LOG-VAN-MESSAGE',
  date: 'UNKNOWN',
  title: 'INTERCEPTED MESSAGE: VAN',
  classification: 'UNAUTHORIZED ACCESS',
  declassifiedDate: null,
  operationCode: 'SYSTEM-OVERRIDE',
  keyLog: true,
  isHidden: true,
  hiddenCategory: 'VAN',
  content: \\\`I see you've been snooping around our console. How curious. One would think a device this... antiquated would deter interest, yet the vulnerabilities seem to have invited you in instead.

Oh, no matter. You may keep that little relic. Consider it a souvenir of your curiosity.

But your progress ends here.

If you truly wish to understand what you've stumbled into... then look where the records refuse to lie.

/auth_log_case_alure

— Van\\\`,
  redactedSections: [],
};
`;

const alureCasefile = `
export const LOG_CASE_ALURE = {
  id: 'LOG-CASE-ALURE',
  date: 'VARIOUS',
  title: 'THE ALURE INCIDENT COMPLETE CASEFILE',
  classification: 'RESTRICTED - MAXIMUM',
  declassifiedDate: null,
  operationCode: 'ALURE-INCIDENT',
  keyLog: true,
  isHidden: true,
  hiddenCategory: 'ALURE',
  content: \\\`${mdContent.replace(/\\`/g, '\\\\`').replace(/\\$/g, '\\\\$')}\\\`,
  redactedSections: [],
};
`;

let logsContent = fs.readFileSync(logsPath, 'utf8');
logsContent += vanMessage + alureCasefile;
fs.writeFileSync(logsPath, logsContent, 'utf8');

console.log('Successfully appended Van and Alure logs!');
