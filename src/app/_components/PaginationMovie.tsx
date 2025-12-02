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
            <Button onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft /> Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button onClick={nextPage} disabled={currentPage === totalPage}>
              <ChevronRight /> Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
