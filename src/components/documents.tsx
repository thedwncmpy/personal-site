"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { documents as content } from "@/data/data";
import SearchBar from "./search-bar";

interface Document {
  id: string;
  name: string;
  displaydate: string;
  date: string;
  url: string;
  content: string;
}

const sortedDocuments = [...content].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const DocumentList = () => {
  const [filteredDocuments, setFilteredDocuments] =
    useState<Document[]>(sortedDocuments);
  const [selectedId, setSelectedId] = useState<string>("0");

  const handleFilteredResults = useCallback((filtered: Document[]) => {
    setFilteredDocuments(filtered);
  }, []);

  const handleSelectedIdChange = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      <SearchBar
        blogs={sortedDocuments}
        onFilteredResults={handleFilteredResults}
        onSelectedIdChange={handleSelectedIdChange}
      />
      <div className="mt-5">
        {filteredDocuments.map((documentItem, id) => (
          <Link href={documentItem.url} key={id}>
            <div className="hover-group flex items-center justify-between py-2">
              <div className="hover-group-text text-xl transition-colors duration-400 ease-in-out">
                {selectedId === documentItem.id && (
                  <span className="mr-2 text-light-green">{"*"}</span>
                )}
                {documentItem.name}
              </div>
              <div className="hidden text-light-grey md:block">
                {documentItem.displaydate}
              </div>
            </div>
          </Link>
        ))}
        {filteredDocuments.length === 0 && (
          <div className="mt-5 text-center text-light-grey">
            No documents found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentList;
