interface Transfer {
  _id?: string;
  account_holder: string;
  iban: string;
  amount: number;
  date: string;
  note: string;
}

export default Transfer