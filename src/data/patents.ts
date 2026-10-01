export interface Patent {
  number: string;
  title: string;
  granted: string;
  href: string;
}

export const patents: Patent[] = [
  {
    number: 'US 10,447,737',
    title: 'Delegating administration rights using application containers',
    granted: 'October 2019',
    href: 'https://patents.google.com/patent/US10447737B2/en',
  },
  {
    number: 'US 10,394,412',
    title: 'User-customizable permissions in a computing environment',
    granted: 'August 2019',
    href: 'https://patents.google.com/patent/US10394412B2/en',
  },
  {
    number: 'US 9,710,127',
    title: 'User-customizable permissions in a computing environment',
    granted: 'July 2017',
    href: 'https://patents.google.com/patent/US9710127B2/en',
  },
  {
    number: 'US 8,583,964',
    title: 'Identifying bugs in a database system environment',
    granted: 'November 2013',
    href: 'https://patents.google.com/patent/US8583964B2/en',
  },
];
