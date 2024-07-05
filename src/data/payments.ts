import { names, uniqueNamesGenerator } from "unique-names-generator";
import { v4 as uuidV4 } from "uuid";

const config = {
  dictionaries: [names],
};

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  clientName: string;
};

const randomStatus = () => {
  const statuses = ["pending", "processing", "success", "failed"] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const randomEmail = (clientName: string) => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${clientName}@${randomDomain}`;
};

export const payments: Payment[] = Array.from({ length: 500 }, (_) => {
  const randomName = uniqueNamesGenerator(config);

  return {
    id: uuidV4(),
    amount: Math.floor(Math.random() * 10000),
    status: randomStatus(),
    clientName: randomName,
    email: randomEmail(randomName.toLowerCase()),
  };
});