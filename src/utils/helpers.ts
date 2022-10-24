import * as bcrypt from 'bcrypt';

export async function hashPassword(rawPassword: string) {
  const saltOrRounds = 10;
  return bcrypt.hash(rawPassword, saltOrRounds);
}
