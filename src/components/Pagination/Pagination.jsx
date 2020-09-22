import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = ({ itemsOnPage, itemsList, setItemsToShow }) => {
  const [showButtons, setShowButtons] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [pagesInfo, setPagesInfo] = useState({fromItem: 0, toItem: 0});

  useEffect(() => {
    const pageCount = Math.ceil(itemsList.length / itemsOnPage);

    if (pageCount === 1) {
      setShowButtons(false);
      setItemsToShow(itemsList);
    }

    if (pageCount > 1) {
      setShowButtons(true);
      const newButtons = [];
      for (let i = 0; i < pageCount; i++) {
        newButtons.push(i);
      }
      setButtons(newButtons);
    }
  }, [itemsList]);

  useEffect(() => {
    let offset = 0;

    if (currentPage > 0) {
      offset = itemsOnPage * currentPage;
    }

    const newItemsToShow = itemsList.slice(offset, itemsOnPage);

    if (newItemsToShow.length < itemsOnPage) {
      setPagesInfo({fromItem: offset + 1, toItem: newItemsToShow.length})
    } else {
      setPagesInfo({fromItem: offset + 1, toItem: offset + itemsOnPage})
    }

    setItemsToShow(newItemsToShow);
  }, [itemsList, currentPage]);

  console.log(buttons);
  console.log('current page', currentPage);

  return (
    <div className="pagination">
      <p className="pagination__summary">Результат {pagesInfo.fromItem}-{pagesInfo.toItem} из {itemsList.length}</p>
      {showButtons && (
        <div className="pagination__list">
          {buttons.map(button => {
            return (
              <button
                key={button}
                className="pagination__btn"
                type="button"
                onClick={() => setCurrentPage(button)}
              >
                {button + 1}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
};

export default Pagination;
