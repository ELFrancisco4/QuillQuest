import { UserModel } from "../models/user";

export const createUser = async (
  authorName: string,
  email: string,
  password: string
) => {
  const newUser = new UserModel({
    authorName: name,
    email: email,
    password: password,
  });
  await newUser.save();
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePasswords = async (
  password: string,
  name: string
): Promise<boolean | null> => {
  const query = await UserModel.findOne({ name })
    .select({ password: 1 })
    .exec();

  if (query) {
    const result = await bcrypt.compare(password, query.password);
    return result;
  }
  return;
};