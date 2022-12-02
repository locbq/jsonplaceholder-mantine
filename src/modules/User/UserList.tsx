import { useState } from "react";
import { Button, Flex, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

import { useUserList } from "./hooks";
import { Table, ActionButton, DeleteModal } from "@components";
import { TableHead } from "./components";
import { IUser } from "@interfaces/user.types";
import { IconPlus } from "@tabler/icons";
import paths from "@router/router.paths";

export default function UserList() {
  const [isOpen, { close, open }] = useDisclosure(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const { loading, userList, updateUserList } = useUserList();

  const renderRows = (item: IUser) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>
          <Flex>
            <Link to={`/user/edit/${item.id}`}>
              <ActionButton mr="xs" color="blue.5" actionType="edit" />
            </Link>
            <ActionButton
              actionType="delete"
              color="red.5"
              onClick={() => handleClickDelete(item.id)}
            />
          </Flex>
        </td>
      </tr>
    );
  };

  const handleClickDelete = (id: number) => {
    setSelectedUserId(id);
    open();
  };
  const handleConfirmDelete = () => {
    const newUserList = userList.filter((user) => user.id !== selectedUserId);
    updateUserList(newUserList);
    close();
  };

  return (
    <>
      <Paper shadow="xs" p="md" mb="md">
        <Flex justify="end" align="center">
          <Link to={paths.PATH_USER_CREATE}>
            <Button
              leftIcon={<IconPlus strokeWidth="1.5" />}
              variant="filled"
              color="blue.4"
            >
              Create new user
            </Button>
          </Link>
        </Flex>
      </Paper>
      <Paper shadow="xs" p="md">
        <Table
          loading={loading}
          data={userList}
          head={<TableHead />}
          colSpan={6}
          renderRows={renderRows}
        />

        <DeleteModal
          open={isOpen}
          item="user"
          onClose={close}
          onConfirm={handleConfirmDelete}
        />
      </Paper>
    </>
  );
}
