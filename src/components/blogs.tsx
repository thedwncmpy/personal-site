"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { blogs as content } from "@/data/data";
import SearchBar from "./search-bar";

interface Blog {
  id: string;
  name: string;
  displaydate: string;
  date: string;
  url: string;
  content: string;
}

const sortedBlogs = [...content].sort((a, b) => b.date.localeCompare(a.date));

const BlogList = () => {
  // State to hold filtered blogs - starts with all blogs
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(sortedBlogs);
  const [selectedId, setSelectedId] = useState<string>("0");

  // Handle filtered results - memoized to prevent useEffect dependency issues
  const handleFilteredResults = useCallback((filtered: Blog[]) => {
    setFilteredBlogs(filtered);
  }, []);

  // Handle selected ID changes - memoized to prevent useEffect dependency issues
  const handleSelectedIdChange = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {/* SearchBar component that will filter the blogs */}
      <SearchBar
        blogs={sortedBlogs}
        onFilteredResults={handleFilteredResults}
        onSelectedIdChange={handleSelectedIdChange}
      />
      {/* Blog list that displays filtered results */}
      <div className="mt-5">
        {filteredBlogs.map((blogItem, id) => (
          <Link href={blogItem.url} key={id}>
            <div className="hover-group flex items-center justify-between py-2">
              <div className="hover-group-text text-xl transition-colors duration-400 ease-in-out">
                {selectedId === blogItem.id && (
                  <span className="mr-2 text-light-green">{"*"}</span>
                )}
                {blogItem.name}
              </div>
              <div className="hidden text-light-grey md:block">
                {blogItem.displaydate}
              </div>
            </div>
          </Link>
        ))}
        {/* Show message when no blogs match the search */}
        {filteredBlogs.length === 0 && (
          <div className="mt-5 text-center text-light-grey">
            No blogs found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
