interface Transfer {
  id?: number;
  account_holder: string;
  iban: string;
  amount: number;
  date: string;
  note: string;
}

export default Transfer