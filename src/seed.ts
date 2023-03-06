import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

import { User } from './users/entities/user.entity';
import { Customer } from './customers/entities/customer.entity';
import { Application } from './applications/entities/application.entity';

const priorities = [
  'blocker',
  'critical',
  'high',
  'highest',
  'low',
  'lowest',
  'medium',
  'major',
  'minor',
  'trivial',
] as const;
const status = [
  'active',
  'fraud',
  'fulfillment',
  'complete',
  'cancelled',
] as const;

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

function createCustomer(id: number): Customer {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();

  return {
    id,
    email,
    firstName,
    lastName,
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
    subStatus: 'sub-status',
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
