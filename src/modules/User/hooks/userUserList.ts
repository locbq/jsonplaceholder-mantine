import { useState, useEffect, useCallback } from "react";

import { IUser } from "@interfaces/user.types";
import { userServices } from "@services";

export default function useUserList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUser[]>([]);

  const fetchUserList = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await userServices.getUserList();
      setUserList(res);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  return {
    loading: isLoading,
    userList,
    updateUserList: setUserList
  };
}
