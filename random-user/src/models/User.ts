export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  dob: {
    date: string;
  };
  cell: string;
  location: {
    city: string;
    country: string;
  };
}
