export const LOGS = [
  {
    id: 'LOG-001',
    date: '-339 DR',
    title: 'Fall of Netheril Contingency & Illium Zerynthar Reincarnation Initiative',
    classification: 'DECLASSIFIED',
    declassifiedDate: '1501 DR',
    operationCode: 'RESURRECTION-PROTOCOL',
    keyLog: true,
    content: `Records Black Thorne's discovery of the cataclysmic fall of Netheril. Documents Illium Zerynthar's final moments and their reincarnation contingency plan. Black Thorne forms with explicit mission: Locate and recruit/resurrect Illium Zerynthar. References "Thorne Binding Ritual" as failsafe mechanism. Other entities suspected to be involved. Assets in the Underdark mobilized. Agent [REDACTED] to rendezvous with Subject Zaryn.
Cross-reference: NETHERIL_COLLAPSE_001, ABYSS_INTELLIGENCE_REPORT`,
    redactedSections: [],
  },
  {
    id: 'LOG-002',
    date: '1360 DR',
    title: 'Identification of Aasimar Subject & Potential Abyssal Proxy',
    classification: 'TOP SECRET / CRITICAL INTELLIGENCE',
    declassifiedDate: null,
    operationCode: 'ABYSS-INCURSION-ALERT',
    keyLog: true,
    content: `Post-Times of Troubles: Black Thorne detects unusual divine signature in material plane.
Identifies Aasimar with corrupted celestial bloodline and false divinity marker.
Intelligence: Father of the Abyss may be attempting planar intrusion.
Speculation that Asmodeus is making moves for expanded influence.
Recommends monitoring and potential recruitment/elimination. Multiple agents flagged for possible infiltration.
See biological profile ████████ for genetic markers.`,
    redactedSections: [5], // Sentence 6
  },
  {
    id: 'LOG-003',
    date: '1395 DR',
    title: 'Asset K Activation & Grand Plan Initiation',
    classification: 'TOP SECRET',
    declassifiedDate: null,
    operationCode: 'SLEEPER-AGENT-ACTIVATION',
    keyLog: true,
    content: `Black Thorne initiates contact with long-dormant sleeper agent (Asset K).
I've found you.
Asset K refuses to utilize "the Sea Child" component for unknown reasons.
Conflict: Illium Zerynthar (now reincarnated) forms bitter rivalry with Asset K.
Internal memo suggests personal vendetta complicating mission objectives.
References "Calliope's soul-core research" as critical path.
Recommendation: Proceed with caution, monitor IL/Asset K tensions.
Subject K rated ALPHA-THREAT if compromised.`,
    redactedSections: [1], // Sentence 2
  },
  {
    id: 'LOG-004',
    date: '1478 DR',
    title: 'Calliope Zerynthar Soul-Core Completion & Operational Casualty',
    classification: 'RESTRICTED',
    declassifiedDate: null,
    operationCode: 'REITHWIN-INCIDENT',
    keyLog: true,
    content: `Calliope Zerynthar completes "Soul Core Project" (classified magical weapon/artifact).
Leak detected: Lords Alliance and Harpers gaining intelligence on project.
Black Thorne decision: Scorched earth protocol activated.
Reithwin Village destroyed to eliminate leak. Civilian casualties: █████.
Calliope Zerynthar: Unfortunately terminated during containment operations.
Post-action analysis: Successful containment, but high cost.
New protocol: Project archived, components scattered across planes.
Recommendation: Find successor to Calliope for future iterations.
See REITHWIN_COVER_STORY_001 for approved media narrative.`,
    redactedSections: [3], // Civilian casualties part of Sentence 4
  },
  {
    id: 'LOG-005',
    date: '1490 DR',
    title: 'Artifact Recovery: Crown of Karsus Location Pinpointed & Barrier Key Acquisition',
    classification: 'EYES ONLY',
    declassifiedDate: null,
    operationCode: 'CROWN-OF-KARSUS-RECOVERY',
    keyLog: true,
    content: `Black Thorne intelligence successfully locates Crown of Karsus (legendary artifact).
Crown protected by ancient barrier; key required for access.
Asset K: Confirmed key acquisition through ██████ operation.
Key currently stored: Disposal Facility, Forest of Suicides, Avernus Layer.
Location Key: AAVVLL2 (Avernus, Level 2—Testing Facility designation).
Operational readiness: Crown retrieval phase estimated 6 months.
Security concern: ████████ and ██████ may be pursuing parallel intel.
Final note: All pieces converging. The Reincarnation Protocol approaches fruition.
Cross-reference ARTIFACT_LOCATION_DATABASE, ABYSS_LOGISTICS_001. STATUS: ACTIVE - Monitor closely.`,
    redactedSections: [2, 6], // Sentences 3 and 7
  },
  // Filler Logs
  {
    id: 'LOG-006',
    date: '1252 DR',
    title: 'Quarterly Asset Review',
    classification: 'ROUTINE',
    declassifiedDate: '1400 DR',
    operationCode: 'HR-REVIEW',
    keyLog: false,
    content: `Standard personnel evaluations for Sector 4 operatives. All metrics within acceptable parameters. No anomalous behavior reported. Performance bonuses distributed according to protocol.`,
    redactedSections: [],
  },
  {
    id: 'LOG-007',
    date: '1267 DR',
    title: 'Facility Maintenance Report',
    classification: 'ROUTINE',
    declassifiedDate: '1350 DR',
    operationCode: 'INFRASTRUCTURE',
    keyLog: false,
    content: `Avernus facility structural integrity check. Minor sulfur corrosion on exterior plating. Replacement scheduled for next quarter. Requesting additional budget for reinforced titanium scaffolding.`,
    redactedSections: [],
  },
  {
    id: 'LOG-008',
    date: '1284 DR',
    title: 'Supply Requisition Approved',
    classification: 'ROUTINE',
    declassifiedDate: '1350 DR',
    operationCode: 'LOGISTICS',
    keyLog: false,
    content: `Requisition order #8843 approved. Supplies include: 50kg refined obsidian, 20 barrels industrial sulfur, 5 crates rare medicinal herbs from the Chult region. Expected delivery: 6 weeks.`,
    redactedSections: [],
  },
  {
    id: 'LOG-009',
    date: '1301 DR',
    title: 'Training Exercise After-Action Report',
    classification: 'CONFIDENTIAL',
    declassifiedDate: '1450 DR',
    operationCode: 'TRAINING-SIM-A',
    keyLog: false,
    content: `Combat simulation results for Squad Omega. Objective achieved in 4.2 minutes (exceeding baseline expectations). Recommendation: elevate squad clearance for field deployment.`,
    redactedSections: [],
  },
  {
    id: 'LOG-010',
    date: '1310 DR',
    title: 'Recruitment Drive Update',
    classification: 'CONFIDENTIAL',
    declassifiedDate: null,
    operationCode: 'TALENT-ACQUISITION',
    keyLog: false,
    content: `Targeting specific magical academies for potential operatives. Candidates must exhibit high arcane proficiency and low moral apprehension. Screening process to begin next month.`,
    redactedSections: [],
  },
  {
    id: 'LOG-011',
    date: '1330 DR',
    title: 'Internal Conflict Resolution',
    classification: 'RESTRICTED',
    declassifiedDate: null,
    operationCode: 'HR-INCIDENT',
    keyLog: false,
    content: `Grievance filed by Operative ██████ against Supervisor ██████. Investigation concluded. Supervisor transferred to remote listening post. Matter considered resolved.`,
    redactedSections: [0], // First two sentences
  },
  {
    id: 'LOG-012',
    date: '1340 DR',
    title: 'Experimental Magic Review',
    classification: 'TOP SECRET',
    declassifiedDate: null,
    operationCode: 'R-AND-D',
    keyLog: false,
    content: `Classified research summary regarding necromantic energy containment. Initial trials show promise but stability issues persist. Budget increase requested for better containment vessels.`,
    redactedSections: [],
  },
  {
    id: 'LOG-013',
    date: '1365 DR',
    title: 'Asset Status Updates',
    classification: 'CONFIDENTIAL',
    declassifiedDate: '1480 DR',
    operationCode: 'FIELD-OPS',
    keyLog: false,
    content: `Routine check-ins with field agents in Waterdeep, Baldur's Gate, and Neverwinter. Cover identities remain intact. Information flow steady. No immediate threats detected.`,
    redactedSections: [],
  },
  {
    id: 'LOG-014',
    date: '1375 DR',
    title: 'Diplomatic Incident (Waterdeep)',
    classification: 'TOP SECRET',
    declassifiedDate: null,
    operationCode: 'DAMAGE-CONTROL',
    keyLog: false,
    content: `Awkward encounter between Operative 7 and local constabulary. Situation diffused via standard bribery protocols and memory modification. Cover story successfully disseminated. Operative 7 recalled for debriefing.`,
    redactedSections: [],
  },
  {
    id: 'LOG-015',
    date: '1388 DR',
    title: 'Information Breach Contained',
    classification: 'RESTRICTED',
    declassifiedDate: null,
    operationCode: 'COUNTER-INTEL',
    keyLog: false,
    content: `Spy discovered attempting to access Archive Sub-Level B. Subject apprehended. Interrogation revealed ties to ████████. Subject subsequently executed per standard operating procedure. Clean-up crews deployed.`,
    redactedSections: [2], // Sentence 3
  },
  // --- PROJECT NIGHTBRINGER LOGS (HIDDEN INITIALLY) ---
  {
    id: 'LOG-HIST-01',
    date: '1182 DR',
    title: 'Project Nightbringer: Initial Prospect Review',
    classification: 'TOP SECRET / HISTORICAL',
    declassifiedDate: null,
    operationCode: 'PROJECT-NIGHTBRINGER',
    keyLog: true,
    isHidden: true,
    content: `Initial contact established with target AA (Patriar class, Upper City).
Subject possesses substantial financial resources and a disturbing lack of moral boundaries.
Agent OH deployed to assess viability for Nightbringer integration.
AA requests access to the ████████ ████ in exchange for funding.
Recommendation: Deny request, offer alternative arcane boons.`,
    redactedSections: [3],
  },
  {
    id: 'LOG-HIST-02',
    date: '1204 DR',
    title: 'Funding Secured & Site Preparation',
    classification: 'EYES ONLY / HISTORICAL',
    declassifiedDate: null,
    operationCode: 'PROJECT-NIGHTBRINGER',
    keyLog: true,
    isHidden: true,
    content: `Patriar AA has officially transferred operational capital to unmarked accounts.
Agent OH confirms the excavation beneath the family estate is proceeding.
Workers reporting excessive lethargy and strange whisperings from the bedrock.
Black Thorne protocol: quarantine the dig site, replace laborers with ██████ constructs.
Nightbringer phase one is on schedule.`,
    redactedSections: [3],
  },
  {
    id: 'LOG-HIST-03',
    date: '1221 DR',
    title: 'Anomalous Readings at Estate Site',
    classification: 'RESTRICTED / HISTORICAL',
    declassifiedDate: null,
    operationCode: 'PROJECT-NIGHTBRINGER',
    keyLog: false,
    isHidden: true,
    content: `Agent OH reports fluctuating planar energy bleeding from AA's subterranean vault.
Patriar AA insists the phenomenon is controlled and requests further esoteric components.
Vessel containment integrity must be verified immediately.
If Project Nightbringer breaches containment, Upper Baldur's Gate will suffer catastrophic reality failure.
Agent OH authorized to terminate AA if compromise reaches 80%.`,
    redactedSections: [],
  },
  {
    id: 'LOG-HIST-04',
    date: '1245 DR',
    title: 'Agent OH Misconduct & Containment Adjustments',
    classification: 'TOP SECRET / HISTORICAL',
    declassifiedDate: null,
    operationCode: 'NIGHTBRINGER-AUDIT',
    keyLog: true,
    isHidden: true,
    content: `Internal audit reveals Agent OH has been heavily modified by the Nightbringer core.
Agent OH's reports display erratic formatting and obsessive references to the "shadow beneath the gold".
Patriar AA continues to fund the project despite total loss of the estate's domestic staff.
Black Thorne intervention team dispatched to reinforce the ████████ seals.
OH will remain onsite as a permanent, expendable observer.`,
    redactedSections: [3],
  },
  {
    id: 'LOG-HIST-05',
    date: '1299 DR',
    title: 'Project Nightbringer Dormancy Protocol',
    classification: 'EYES ONLY / HISTORICAL',
    declassifiedDate: null,
    operationCode: 'PROJECT-NIGHTBRINGER',
    keyLog: true,
    isHidden: true,
    content: `Centennial review of the Nightbringer apparatus.
Patriar AA is presumed dead, though estate ledgers continue to authorize Black Thorne stipends automatically.
Agent OH is entirely assimilated into the containment matrix; biological form highly degraded but functional.
The entity slumbers. The investment yields acceptable arcane dividends.
Site sealed. Monitoring reduced to passive ██████ surveillance unless active breach detected.`,
    redactedSections: [4],
  },
];
