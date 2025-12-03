"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PreviousNextProps = {
  previousUrl: string;
  nextUrl: string;
};

export function PreviousNext({ previousUrl, nextUrl }: PreviousNextProps) {
  return (
    <Pagination className="w-fit border border-red-500 m-0">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem className=" hover:border rounded-md">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>

        <PaginationItem className=" hover:border rounded-md">
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem className=" hover:border rounded-md">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>

        <PaginationItem className=" hover:border rounded-md">
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        <PaginationItem className=" hover:border rounded-md">
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
