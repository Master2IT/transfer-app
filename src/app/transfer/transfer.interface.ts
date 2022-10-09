interface Transfer {
  id?: string;
  account_holder: string;
  iban: string;
  amount: number;
  date: number;
  note: string;
}

export default Transfer