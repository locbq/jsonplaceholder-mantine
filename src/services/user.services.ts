import { IUser } from "@interfaces/user.types";
import request from "./request";

const getUserList = async (): Promise<IUser[]> => await request.get("/users");

const userServices = {
  getUserList
};

export default userServices;
