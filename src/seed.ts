import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

import { User } from './users/entities/user.entity';
import {
  Customer,
  HomeType,
  RentOrOwn,
} from './customers/entities/customer.entity';
import {
  Application,
  Priority,
  Status,
  SubStatus,
} from './applications/entities/application.entity';

const priorities = Object.values(Priority);
const status = Object.values(Status);
const subStatus = Object.values(SubStatus);
const rentOrOwn = Object.values(RentOrOwn);
const homeType = Object.values(HomeType);

const customers = [];
const users = [];
const applications = [];

function randomNumberBetweenMinMax(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createUser(id: number): User {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const avatarURL = faker.internet.avatar();

  return {
    id,
    avatarURL,
    email,
    firstName,
    lastName,
  };
}

function createCoBorrower(id: number): Customer['coBorrower'] {
  return {
    id,
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date.birthdate().toISOString(),
    address: faker.address.streetAddress(),
    atPnc: !!randomNumberBetweenMinMax(0, 1),
    phoneNumber: faker.phone.number('1##########'),
    ssn: faker.random.numeric(9, {
      allowLeadingZeros: true,
    }),
  };
}

function createCustomer(id: number): Customer {
  return {
    id,
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date.birthdate().toISOString(),
    address: faker.address.streetAddress(),
    atPnc: !!randomNumberBetweenMinMax(0, 1),
    phoneNumber: faker.phone.number('1##########'),
    ssn: faker.random.numeric(9, {
      allowLeadingZeros: true,
    }),
    borrowerCreditFactors: {
      creditScore: randomNumberBetweenMinMax(300, 850),
      totalDebt: randomNumberBetweenMinMax(0, 10000000),
      dtiAccept: randomNumberBetweenMinMax(1, 100),
    },
    borrowerIncome: {
      incomeSource: 'Employment',
      jobTitle: faker.name.jobTitle(),
      statedIncome: randomNumberBetweenMinMax(2000000, 50000000),
      employer: faker.company.name(),
    },
    coBorrower: createCoBorrower(id + 1000000),
    housingInformation: {
      rentOrOwn: rentOrOwn[randomNumberBetweenMinMax(0, rentOrOwn.length - 1)],
      homeType: homeType[randomNumberBetweenMinMax(0, rentOrOwn.length - 1)],
      monthlyPayment: randomNumberBetweenMinMax(100000, 1000000),
      numberOfYears: randomNumberBetweenMinMax(3, 10),
    },
  };
}

function createApplication(
  id: number,
  applicantId: number,
  assigneeId: number,
): Application {
  return {
    id,
    applicantId,
    assigneeId,
    priority: priorities[randomNumberBetweenMinMax(0, priorities.length - 1)],
    status: status[randomNumberBetweenMinMax(0, status.length - 1)],
    submittedDate: faker.date.recent().toISOString(),
    subStatus: subStatus[randomNumberBetweenMinMax(0, subStatus.length - 1)],
    updatedAt: faker.date.recent().toISOString(),
    limiteRequested: randomNumberBetweenMinMax(10000000, 100000000),
    productName: 'Consumer Credit Card',
    productType: 'Cash Rewards® Visa®',
    referralRule: 'DTI',
  };
}

for (let id = 1; id <= 100; id++) {
  users.push(createUser(id));
  customers.push(createCustomer(id));
}

for (let id = 1; id <= 100; id++) {
  applications.push(
    createApplication(
      id,
      randomNumberBetweenMinMax(1, customers.length),
      randomNumberBetweenMinMax(1, users.length),
    ),
  );
}

try {
  writeFileSync(
    './src/users/users.ts',
    `export default ${JSON.stringify(users, null, 2)}`,
  );
  writeFileSync(
    './src/customers/customers.ts',
    `export default ${JSON.stringify(customers, null, 2)}`,
  );
  writeFileSync(
    './src/applications/applications.ts',
    `export default ${JSON.stringify(applications, null, 2)}`,
  );
} catch (error) {
  console.error('error writing data:', error);
}
