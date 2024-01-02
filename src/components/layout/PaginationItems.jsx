import { useState } from "react";
import ReactPaginate from "react-paginate";
import newCollectionData from "../../../data/newCOllectionData";
// import FeaturedProduct from "./FeaturedProduct";
import ProductCart from "./ProductCart";
const x = Array(120).keys();
const items = [...newCollectionData, ...x];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((productItems, i) => (
          <ProductCart key={i} productData={productItems} />
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, showNum }) {
  const taleItemsPerPage = showNum ? showNum : itemsPerPage;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + taleItemsPerPage;
  // console.log("tiemOffst", itemOffset);
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  // total pages
  const pageCount = Math.ceil(items.length / taleItemsPerPage);

  const handlePageClick = (event) => {
    // event selected holo page number ja O based. so add 1, to make it your way.
    // console.log("event selected:", event, event.selected);
    const newOffset = (event.selected * taleItemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`,
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="col-span-3 mt-[50px] flex items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          // marginPagesDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-4 pagination"
          pageClassName="border px-4 py-2"
          pageLinkClassName="page-link"
          previousClassName="hidden"
          previousLinkClassName="page-link"
          nextClassName="hidden"
          nextLinkClassName="page-link"
          activeClassName="active border bg-black px-4 py-2 text-white"
          breakClassName="self-end"
        />
        <p className="font-dm text-sm text-secondary">
          Products from {itemOffset + 1} to {endOffset} of {items.length}
        </p>
      </div>
    </>
  );
}
export default PaginatedItems;
