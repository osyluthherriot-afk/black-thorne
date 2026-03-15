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
    hiddenCategory: 'NIGHTBRINGER',
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
    hiddenCategory: 'NIGHTBRINGER',
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
    hiddenCategory: 'NIGHTBRINGER',
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
    hiddenCategory: 'NIGHTBRINGER',
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
    hiddenCategory: 'NIGHTBRINGER',
    content: `Centennial review of the Nightbringer apparatus.
Patriar AA is presumed dead, though estate ledgers continue to authorize Black Thorne stipends automatically.
Agent OH is entirely assimilated into the containment matrix; biological form highly degraded but functional.
The entity slumbers. The investment yields acceptable arcane dividends.
Site sealed. Monitoring reduced to passive ██████ surveillance unless active breach detected.`,
    redactedSections: [4],
  },
  // --- AUDIO LOG TRANSCRIPTS (HIDDEN INITIALLY) ---
  {
    id: 'LOG-HIST-LOVE',
    date: 'UNKNOWN',
    title: 'Unsent Transmission - Transcript',
    classification: 'TOP SECRET / PERSONAL',
    declassifiedDate: null,
    operationCode: 'AUDIO-LOG-LOVE',
    keyLog: true,
    isHidden: true,
    hiddenCategory: 'LOVE',
    content: `[REDACTED]: I did not choose to be [REDACTED]. I wanted to express my feelings to you. If only we shared a common tongue. Vengeance was what drove me to them... The only language left to me, revenge. But the words we shared... No, that was no language at all. That is why... I chose the language of gratitude instead, and go back to silence. I am [REDACTED]... I am... the absence of words.`,
    redactedSections: [],
  },
  {
    id: 'LOG-HIST-27',
    date: 'UNKNOWN',
    title: 'Sanatorium Incident - Post-Action Interrogation',
    classification: 'EYES ONLY / INCIDENT REPORT',
    declassifiedDate: null,
    operationCode: 'AUDIO-LOG-27',
    keyLog: true,
    isHidden: true,
    hiddenCategory: '27',
    content: `[REDACTED]: Well, [REDACTED]... I have the report on the incident at the Sanatorium. Assuming the throat-blight evolved—I’m sorry, "underwent a mutation"—the only plausible explanations are exposure to a high concentration of raw Abyssal energy or concentrated radiance. As you know, some of the acolytes were infected with the blight. The anti-magic salts prevented the curse from spreading, but the necrotic spores themselves cannot be purged from a host’s throat once they take root. Once you’re marked by the [REDACTED]’s "parting gift," you’re stuck with it.

The mages regularly used true seeing crystals to monitor the spores. No problem there; they kept a close eye on the arcane resonance. But those crystals didn't just emit divination magic; they were also leaking concentrated radiant energy from the Positive Energy Plane, even though that’s unnecessary for a simple scan. See, raw radiance has far more volatile effects on a curse’s essence than simple divination, meaning the only logical conclusion is that someone etched a specific rune into the crystal to trigger a mutation. That energy leaked out from the focus. Because the rune was added later, the containment wards were inadequate, and the person who commissioned and inspected those crystals... was you, [REDACTED]. That makes you the only person with the opportunity to sabotage those tools.

[REDACTED]: So now you're saying I sabotaged holy relics for some wild plan to make the throat-blight kill everyone?!

[REDACTED]: Or maybe you thought it'd reveal a way to cure the blight without using the salts... with that much to barter, I suppose the Zhentarim or the Red Wizards would welcome even a pathetic cur like you.

[REDACTED]: Just stop it!

[REDACTED]: You'd have no shortage of buyers, but most would be happy with just the blight. You wouldn't need to offer anything else... however, if that buyer already knew about the curse, they'd also know that by itself, it's no longer the ultimate bargaining chip it once was. To sell to that buyer, you'd need to throw in a bonus; a way to one-up it. There's only one cabal who'd be after that.

[REDACTED]: [stammers nervously]

[REDACTED]: [REDACTED], we monitor all sending spells and scrying within this keep. That includes messages sent via illicit arcane focuses. You've been in frequent contact with people in Waterdeep: a private alchemical guild, whose primary benefactor is the Lords' Alliance, and they are connected to The Watchers. You made a deal with them. You offered them a refined blight in exchange for your safety. This is the only place in Toril where this curse still exists. And you used it as a testing ground, trying to resurrect their bio-warfare! But your plan to harvest the blight has failed. Your lies end now! ...And don't think you're leaving this tower alive.`,
    redactedSections: [],
  },
  {
    id: 'LOG-HIST-DEVIL',
    date: 'UNKNOWN',
    title: 'Demon\'s Fane Investigation - Briefing',
    classification: 'TOP SECRET / CRITICAL INTELLIGENCE',
    declassifiedDate: null,
    operationCode: 'AUDIO-LOG-DEVIL',
    keyLog: true,
    isHidden: true,
    hiddenCategory: 'DEVIL',
    content: `[REDACTED]: Commander, about those poor souls you saw in that "Demon’s Fane"...

[REDACTED]: Gods help them. All shackled to the stone slabs, with those pulsing growths on their chests.

[REDACTED]: The temple healers tell me they were likely a form of magical cyst or tumor.

[REDACTED]: Can a simple growth truly become that massive?

[REDACTED]: Under the influence of a Wild Magic surge, perhaps, but... supposing they are a type of abscess forming on the surface of the skin, the scale is simply impossible, and the texture is all wrong. In the end, the Circle of Alchemists was at a loss. Those growths were like nothing they’d ever seen in any bestiary. The ichor you said you got on your gauntlet when you touched one was scorched away in the fray... and the laboratory burned to the ground, too. None of the divination rites we performed once you were back at the keep revealed a curse or plague that could have birthed them. Meaning we don't have a single drop of essence to study.

[REDACTED]: Everything was lost to the fire...

[REDACTED]: What worries the High Priest most is whether it’s a spreading blight. Whether there’s a chance we could all end up like those husks.

[REDACTED]: And?

[REDACTED]: The keep’s warding and purification rites have always been strict. After all, a marching army is the perfect vessel for a pestilence. For the time being, at least, the protective circles hold; there’s no sign of the blight spreading, nor any symptoms of the corruption.`,
    redactedSections: [],
  },
  {
    id: 'LOG-HIST-MSR',
    date: 'UNKNOWN',
    title: 'The Origins of the Mass Shadow Ritual - Lecture Transcript',
    classification: 'EYES ONLY / HISTORICAL RESEARCH',
    declassifiedDate: null,
    operationCode: 'AUDIO-LOG-MSR',
    keyLog: true,
    isHidden: true,
    hiddenCategory: 'MSR',
    content: `[REDACTED]: The origins of the Mass Shadow Ritual date back nearly an eon, to the Age of Blue Fire. At that time, these energies were not a curse, but primordial echoes of the Void itself. They are believed to be the common ancestor to the necrotic blights of the Shadowfell and the life-draining mists of the Ethereal Plane.

However, the cosmology of Toril underwent a violent change during the Era of Upheaval. The cause is debated by scholars, but the evidence suggests that over ninety percent of the ethereal spirits at that time were extinguished. The most pronounced threat to these proto-shadows was the thinning of the Weave. The result was a splintering—a metamorphosis that gave birth to a new strain of magic that could parasitize the soul-essence of living beings. This survival technique helped the shadows anchor themselves to reality, and inhabiting the spirit kept them securely connected to the Material Plane.

The most successful strains were those that haunted the Great Wyrms that flourished at the time. Entering the Age of Colossi, the dragons evolved, and the proto-shadows shared in their majesty. Dragons developed "Soul-Anchors" to adapt to the fluctuating magic of the world. These, in particular, helped the shadow-parasites thrive.

But another trial awaited them. The end of that Age saw another drastic change in the world's planar alignment. Originally, the shadow and its host were one and the same—hermaphroditic in their metaphysical nature. But to survive the shifting of the planes, the ritual needed to secure a steady pool of diverse spiritual energy. Another split occurred. Now, the newest strain of the ritual required "resonance" with souls found in other hosts. And in order to increase its encounters with those souls, the new strain utilized the voice of its host. They came to inhabit the host’s very breath.

This was the true birth of the "Whispering Shadow." The ritual developed the host's throat to form resonating chambers for the Void, using them to hum sophisticated, dark incantations. The upright posture of the humanoid races was vital... because the refined throat was more suited to the development of these dark harmonies. These developments ushered in a time of great prosperity for the shadow-tongue.

But for the third time, a major hurdle arrived: the Fall of Netheril. With their archmage hosts extinct or transformed, the shadows had no option but to find a new habitat—the Kenku and the Aves. As creatures with an innate mimicry of sound, they were the perfect choice. But the shadows could not survive in creatures that flew too close to the sun's radiance. So they parasitized ground-dwelling kin and altered their vocal systems for the sake of spiritual reproduction. They gave these creatures the means to create sophisticated, haunting sounds—the "Siren-Call" responsible for their magical mimicry. This is the proof that points to the activation of the "Shadow-Chord" in both songbirds and Men.

The current Era began with a rise in the Weave’s stability, which helped the younger races to evolve. The shadows then shifted to Humans, Elves, and Dwarves as more effective hosts. Our complex languages meant our throats could support larger resonating chambers for the Void. At first, the ritual entered humans using avian spirits as intermediate vessels, but eventually, it changed to conducting its entire cycle within the mortal soul.

What happens next is as I have already described. People took the vocalizing prowess given them by the shadows and turned it into common language; once the shadows could no longer use it as their mating call, they faded into myth. Or in other words, the shadows overcame every hurdle except the rise of civilized speech.

[REDACTED] shared an opinion on that matter. They said Liara Moor’s project was sure to succeed. After all, the shadows had a grudge against us mortals. Even the Archdevils of the Nine Hells look upon her work with disgust; they claim the ritual is a perversion beyond even their laws. They say one should "seek the Seeker for the 13th" to ask them directly why their Patron—the Archivist—gave such a foul gift to Moor.

To think we awoke these shadows after such a long slumber, just so they could sate their thirst for vengeance... It is terrible... unforgivable. And yet, it is what I have done.`,
    redactedSections: [],
  },
];
