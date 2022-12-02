import { ReactNode, useState } from "react";
import { Table as MTable, Pagination, Loader, Text, Flex } from "@mantine/core";

interface TableProps {
  loading?: boolean;
  head: ReactNode;
  colSpan: number;
  data: any[];
  renderRows: Function;
}

export default function Table({
  loading,
  head,
  colSpan,
  data,
  renderRows
}: TableProps) {
  const [page, setPage] = useState<number>(1);

  const indexOfLastItem = page * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentDataList = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableBody = () => {
    if (loading === true) {
      return (
        <tr>
          <td colSpan={colSpan}>
            <Flex justify="center" align="center">
              <Loader size="sm" />
            </Flex>
          </td>
        </tr>
      );
    }
    if (data?.length === 0) {
      return (
        <tr>
          <td colSpan={colSpan}>
            <Text align="center">No data</Text>
          </td>
        </tr>
      );
    }
    return currentDataList.map((item) => renderRows(item));
  };

  return (
    <div>
      <MTable withBorder>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </MTable>
      {Math.ceil(data.length / 10) > 1 && (
        <Pagination
          mt="md"
          page={page}
          onChange={setPage}
          total={Math.ceil(data.length / 10)}
        />
      )}
    </div>
  );
}
