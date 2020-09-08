import React from 'react';

export default React.createContext({
  emails: [],
  events: [],
  addEmails: () => {},
  addEvents: () => {},
});
