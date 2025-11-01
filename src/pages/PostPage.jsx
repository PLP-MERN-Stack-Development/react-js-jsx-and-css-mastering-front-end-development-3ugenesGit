import React, { useState, useMemo } from 'react';
import fetchPosts from '../api/fetchPosts';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';

// Configuration
const POSTS_PER_PAGE = 10;
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Component to display, search, and paginate fetched API posts.
 */
function PostPage() {
  const { isDarkMode } = useTheme();
  const { data: allPosts, loading, error } = useFetch(API_URL);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm) {
      return allPosts;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(lowerCaseSearch) ||
      post.body.toLowerCase().includes(lowerCaseSearch)
    );
  }, [allPosts, searchTerm]);

  // 2. Implement Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (pageNumber) => {
    // Ensure page number is within bounds
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
    }
  };

  // --- Rendering States ---

  if (loading) {
    return (
      <Card title="Loading API Data..." className="text-center">
        <div className="flex justify-center items-center py-8">
            {/* Simple Tailwind Loading Spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 dark:border-blue-300"></div>
            <p className="ml-4 text-xl font-medium">Fetching 100 Posts...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="API Error" className="bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100">
        <p className="text-lg font-semibold mb-2">Failed to load data:</p>
        <p>{error}</p>
        <p className="mt-4 text-sm">Attempted URL: {API_URL}</p>
      </Card>
    );
  }

  // --- Main Content ---
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Task 4: API Posts ({allPosts.length} total)
      </h1>

      {/* Search Feature */}
      <Card className="p-4">
        <input
          type="text"
          placeholder="Search posts by title or body..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="w-full p-3 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition"
        />
        {searchTerm && (
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
          </p>
        )}
      </Card>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPosts.map(post => (
          <Card key={post.id} title={`Post #${post.id}: ${post.title}`} className="hover:shadow-xl transition-shadow duration-300">
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{post.body}</p>
            <div className="mt-4 text-xs font-medium text-blue-600 dark:text-blue-400">User ID: {post.userId}</div>
          </Card>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <Card className="flex justify-center items-center gap-2 p-4">
          <Button 
            variant="secondary" 
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {/* Display current page number */}
          <span className="px-4 py-2 font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button 
            variant="secondary" 
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Card>
      )}

      {filteredPosts.length === 0 && !loading && !error && (
        <Card title="No Results" className="text-center">
            <p className="text-lg text-gray-500">No posts matched your search criteria.</p>
        </Card>
      )}

    </div>
  );
}

export default PostPage;