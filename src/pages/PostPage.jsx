
import React, { useState, useEffect, useMemo } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import fetchPosts from '../hooks/fetchPosts';

// A simple custom hook for fetching data (could be in src/hooks/)
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};


const PostsPage = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  // Memoized search/filter results
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Loading and Error States
  if (loading) {
    return <div className="text-center text-2xl">Loading data...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl text-red-600">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">User Data</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
        className="w-full max-w-lg mx-auto block p-3 border rounded-md mb-8 dark:bg-gray-700 dark:border-gray-600"
      />

      {/* Grid Layout (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {currentUsers.map(user => (
          <Card key={user.id} className="transition-all hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            <p className="text-gray-500 mt-2">{user.company.name}</p>
          </Card>
        ))}
      </div>
      
      {filteredUsers.length === 0 && (
         <p className="text-center text-gray-500 text-xl mt-8">No users found.</p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-10">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary"
          >
            Previous
          </Button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary"
          >
            Next
          </Button>
        </div>
      )}
    </div>
    
  );
};

export default PostsPage;