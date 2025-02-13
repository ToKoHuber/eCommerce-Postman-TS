type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
};

export const users: User[] = [
  {
    _id: "1",
    name: "John Doe",
    email: "John.doe@example.com",
    password: "password123",
  },
];
