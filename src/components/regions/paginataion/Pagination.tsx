import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  url: string;
  perPage: number;
}

interface DataItem {
  // Define your data item structure here
}

const Pagination: React.FC<PaginationProps> = ({ url, perPage }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}?page=${currentPage + 1}`);
      const responseData = response.data;

      setData(responseData.data);
      setTotalPages(responseData.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div>
      {/* Render your data here */}
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
