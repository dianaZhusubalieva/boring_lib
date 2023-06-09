import React, { useMemo } from "react";
import Table from "components/table/custom/customTable";

export const mockResponse = {
  content: {
    payments: [
      {
        id: "d99cce86-b125-4ab6-ad2d-cb1045e341e7",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:35:08.822",
        requisite: "17434007662017",
        amount: 3004.0,
      },
      {
        id: "fef9dea2-1e5f-4f99-8514-b717c0a7b048",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:27:23.332",
        requisite: "17546007662028",
        amount: 1200.0,
      },
      {
        id: "ab086ad1-eca8-43a4-9e2f-80458377500c",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:25:34.883",
        requisite: "17404007662013",
        amount: 279.0,
      },
      {
        id: "5bfb64b9-fbdb-407e-a8b4-d83dabd87d4e",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:21:45.252",
        requisite: "16415007661430",
        amount: 727.4,
      },
      {
        id: "67e57578-e760-4bd5-be20-1d23e70904d8",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:05:13.9",
        requisite: "17356007661856",
        amount: 279.0,
      },
      {
        id: "cb73a065-ba04-4e5e-a20c-25801166fe70",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:04:30.097",
        requisite: "17020007661837",
        amount: 1301.0,
      },
      {
        id: "d27fff33-76b5-4b68-9cd6-5f4a715e909e",
        status: "COMMITTED",
        dateTime: "2023-05-16T09:03:17.979",
        requisite: "17819007661829",
        amount: 8842.0,
      },
      {
        id: "3439d711-2179-44da-bae5-d42192527a07",
        status: "COMMITTED",
        dateTime: "2023-05-16T08:56:23.255",
        requisite: "16058007661791",
        amount: 727.4,
      },
      {
        id: "83774eb6-b798-43a4-9013-b38d005bca66",
        status: "COMMITTED",
        dateTime: "2023-05-16T08:46:25.901",
        requisite: "17121007661754",
        amount: 4354.0,
      },
      {
        id: "dcba4077-47db-4638-8a66-c955eb225eed",
        status: "COMMITTED",
        dateTime: "2023-05-16T08:34:03.818",
        requisite: "17108007661733",
        amount: 279.0,
      },
    ],
  },
  page: 0,
  size: 10,
  totalPage: 294,
  totalElement: 2937,
  empty: false,
  fist: true,
  last: false,
};

const Usage = () => {
  const tableData = useMemo(
    () => ({
      columns: [
        { accessor: "dateTime", Header: "dateTime" },
        { accessor: "id", Header: "id" },
        { accessor: "requisite", Header: "requisite" },
        { accessor: "amount", Header: "amount" },
        {
          accessor: "status",
          Header: "status",
        },
      ],
      rows: mockResponse.content.payments,
    }),
    [mockResponse.content.payments]
  );

  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
};

export default Usage;
