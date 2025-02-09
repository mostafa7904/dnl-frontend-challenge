import { CompaniesState } from '@/types/companies-types';

const companiesState: CompaniesState = {
  companies: [
    {
      companyId: 'id1',
      className: 'company-item',
      companyName: 'Company X',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2020: 'good',
    },
    {
      companyId: 'id2',
      className: 'company-item',
      companyName: 'Company Y',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2021: 'bad',
    },
    {
      companyId: 'id3',
      className: 'company-item',
      companyName: 'Company Z',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'en',
      2019: 'good',
    },
  ],
  companyTableHeaders: [
    { text: 'Name', value: 'companyName' },
    { text: 'Balance 2019', value: '2019' },
    { text: 'Balance 2020', value: '2020' },
    { text: 'Balance 2021', value: '2021' },
    { text: 'Language', value: 'language' },
    { text: 'Updated at', value: 'updatedAt' },
    { text: 'Created at', value: 'createdAt' },
  ],
  companyForm: [
    {
      type: 'textField',
      key: 'companyName',
      label: 'Company Name',
      placeholder: 'Type name',
      required: true,
    },
    {
      type: 'selectField',
      key: '2019',
      label: 'Balance 2019',
      placeholder: 'Type',
      required: false,
      items: [
        {
          text: 'Good',
          value: 'good',
        },
        {
          text: 'Bad',
          value: 'bad',
        },
      ],
    },
    {
      type: 'radioGroup',
      key: 'language',
      label: 'Language',
      required: false,
      items: [
        {
          text: 'de',
          value: 'de',
        },
        {
          text: 'en',
          value: 'en',
        },
      ],
    },
  ],
};

export default companiesState;
