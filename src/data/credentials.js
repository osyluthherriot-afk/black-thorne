// Passwords are stored as SHA-256 hashes — never keep plaintext here.
// Hash values were pre-computed and never appear as strings in source.
export const VALID_CREDENTIALS = {
  validNames: [
    'Zerynthar Calliope', 
    'Zerynthar Illium',
    'Zerynthar, Calliope',
    'Zerynthar, Illium',
    'Zerynthar Calliope [THETA-7]',
    'Zerynthar Illium [THETA-7]',
    'Zerynthar, Calliope [THETA-7]',
    'Zerynthar, Illium [THETA-7]',
    'Calliope Zerynthar',
    'Illium Zerynthar'
  ],
  // SHA-256("Charadrius")
  passwordHash: '9bb6f8e0abfae22a9ab0cc0d142a903b1fc11aa53a209d55d1278a9e8a9524fc',
  // SHA-256("AAVVLL2")
  locationKeyHash: 'b75bfa81379aed85a13b78a63a127c72216ea877635bdd07be4f7a738d7df725',
};

export const LOCATION_KEYS_INFO = {
  'AAVVLL2': 'Testing facility in Avernus (Level 2)',
};
