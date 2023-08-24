import React, {useCallback, useEffect, useState} from "react";
import "./componentsStyles.scss";

interface Props {
  page?: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onPageChange: (v: number) => void;
}

interface ButtonProps {
  currentPage: number;
  totalPages: number;
}

export const usePaginationBehavior = ({ page: inputPage = 1 } = {}) => {
  const [page, setPage] = useState(inputPage);

  const onNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  const onPreviousPage = useCallback(() => {
    setPage((page) => page - 1);
  }, []);

  const onPageChange = useCallback((index: number) => {
    setPage(index);
  }, []);

  return {
    page,
    onNextPage,
    onPageChange,
    onPreviousPage,
  };
};

const MAX_HANDLES_TO_SHOW = 7;

const range = (start: number, stop: number) => {
  const output = [];
  for (let i = start; i <= stop; i++) {
    output.push(i);
  }
  return output;
};

const getPaginationButtonContent = ({
  currentPage,
  totalPages,
}: ButtonProps) => {
  if (totalPages <= MAX_HANDLES_TO_SHOW) {
    return range(1, totalPages);
  }

  if (totalPages > MAX_HANDLES_TO_SHOW && currentPage <= 4) {
    return [...range(1, 5), "...", totalPages];
  }

  if (totalPages - currentPage < 4) {
    return [1, "...", ...range(totalPages - 4, totalPages)];
  }

  return [
    1,
    "...",
    ...range(currentPage - 1, currentPage + 1),
    "...",
    totalPages,
  ];
};

const MyPagination: React.FC<Props> = ({
  page: currentPage = 1,
  totalPages,
  onNextPage,
  onPreviousPage,
  onPageChange,
}) => {
  return (
    <div
      className="pagination-block"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/*<Pagination.Prev disabled={currentPage == 1} onClick={onPreviousPage} />*/}

      {getPaginationButtonContent({ currentPage, totalPages }).map((page) => (
        <>
          <div
            className={`pagination-btn ${
              currentPage === page && "pagination-btn__active"
            } `}
            onClick={() => {
              //@ts-ignore
              onPageChange(page);
            }}
          >
            {page}
          </div>
        </>
      ))}
      {/*<Pagination.Next*/}
      {/*  disabled={currentPage !== totalPages}*/}
      {/*  onClick={onNextPage}*/}
      {/*/>*/}
    </div>
  );
};

export default MyPagination;
