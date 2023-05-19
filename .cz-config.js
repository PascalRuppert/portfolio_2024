module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Formatting that does not change the meaning of the code' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'perf', name: 'perf:     A code change that improves performance' },
    //   { value: 'test', name: 'test:     adding missing tests, refactoring tests; no production code change' },
    { value: 'chore', name: 'chore:    Updating grunt tasks etc; no production code change' },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],

  // scopes: [
  //   { name: 'visual' },
  //   { name: 'function' },
  //   { name: 'content' },
  //   { name: 'component' },
  //   { name: 'page' }
  // ],

  // it needs to match the value for field type. Eg.: 'fix'

  // scopeOverrides: {
  //   fix: [
  //     { name: "merge" },
  //     { name: "style" },
  //     { name: "e2eTest" },
  //     { name: "unitTest" },
  //   ],
  // },

  // SETTINGS
  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'breaking', 'footer'], // skip any questions you want
  subjectLimit: 80, // limit subject length
  breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false

  // MESSAGES
  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'Denote the SCOPE of this change (optional):',
    customScope: 'Denote the SCOPE of this change:',
    subject:
      'Write a SHORT, IMPERATIVE tense description of the change.\n  Dont capitalize, no fullstop . at the end:\n',
    body: 'Provide a LONGER description of the change (optional).\n  Use "Space" & "Enter" to skip. Break lines with "|":\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
};
