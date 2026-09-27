export interface Patent {
  number: string;
  title: string;
  date: string;
  assignee: string;
}

export const patents: Patent[] = [
  {
    number: 'US Patent 10,447,737',
    title: 'Delegating administration rights using application containers',
    date: 'Granted Oct 2019',
    assignee: 'Salesforce, Inc.',
  },
  {
    number: 'US Patent 10,394,412',
    title: 'User-customizable permissions in a computing environment',
    date: 'Granted Aug 2019',
    assignee: 'Salesforce, Inc.',
  },
  {
    number: 'US Patent 9,710,127',
    title: 'User-customizable permissions in a computing environment',
    date: 'Granted Jul 2017',
    assignee: 'Salesforce, Inc.',
  },
  {
    number: 'US Patent 8,583,964',
    title: 'Identifying bugs in a database system environment',
    date: 'Granted Nov 2013',
    assignee: 'Salesforce, Inc.',
  },
  {
    number: 'US Patent Pub. 20200097979',
    title: 'Sharing execution logic across workflow instances',
    date: 'Published Mar 2020',
    assignee: 'Salesforce, Inc.',
  },
];
