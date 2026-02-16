"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationMovieProps = {
  currentPage: number;
  totalPage: number;
  nextPage: () => void;
  prevPage: () => void;
  // className: string;
};

export const PaginationMovie = ({
  currentPage,
  totalPage,
  nextPage,
  prevPage,
}: PaginationMovieProps) => {
  return (
    <div className="flex justify-end">
      <Pagination className="w-fit m-0">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              variant="outline"
            >
              <ChevronLeft /> Previous
            </Button>
          </PaginationItem>
          {currentPage > 1 && (
            <PaginationItem>
              <Button onClick={prevPage} variant="outline">
                {currentPage - 1}
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <Button variant="default" className="bg-gray-400">
              {currentPage}
            </Button>
          </PaginationItem>

          {totalPage > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {currentPage < totalPage && (
            <PaginationItem>
              <Button onClick={nextPage} variant="outline">
                {currentPage + 1}
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPage}
              variant="outline"
            >
              Next <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
