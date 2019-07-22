const dictionary = {
  MON: "Montag",
  TUE: "Dienstag",
  WED: "Mittwoch",
  THU: "Donnerstag",
  FRI: "Freitag",
  SAT: "Samstag",
  SUN: "Sonntag",
  Closed: "Geschlossen",
  "Exceptional days": "Besondere Öffnungszeiten",
  Loading: "Öffnungszeiten werden geladen",
  "Opening hours": "Öffnungszeiten",
  to: "bis"
};

const translate = key => {
  if (key in dictionary) {
    return dictionary[key];
  } else {
    console.warn(`Missing translation for "${key}"`);
    return key;
  }
};

export default translate;
