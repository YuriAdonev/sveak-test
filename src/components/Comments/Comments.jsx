import React, { Fragment, useState } from 'react';
import Layout from '../Layout/Layout';
import Pagination from '../Pagination/Pagination';
import IconPlus from '../Icons/IconPlus';

const COMMENTS_ON_PAGE = 20;

const Comments = ({ currentClient }) => {
  const [commentsToShow, setCommentsToShow] = useState([]);

  console.log(currentClient);

  return (
    <Layout
      title="Комментарии"
      buttons={[{text: 'Добавить', icon: <IconPlus size="12"/>, action: () => console.log('Add comment click')}]}
    >
      {currentClient.comments.length === 0 ? (
        <div className="empty-data">Нет комментариев</div>
      ) : (
        <Fragment>
          <table className="table clients-table">
            <thead>
            <tr>
              <th>Дата</th>
              <th>Автор</th>
              <th>Комментарий</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>18 окт 2016 13:30</td>
              <td>Система</td>
              <td>Администратор TestRU изменил email c ljolik_87@bk.ru на ljolik_86@bk.ru</td>
              <td>
                <button type="button">Редактировать</button>
                <button type="button">Удалить</button>
              </td>
            </tr>
            </tbody>
          </table>
          <Pagination
            itemsOnPage={COMMENTS_ON_PAGE}
            itemsList={currentClient.comments}
            setItemsToShow={setCommentsToShow}
          />
        </Fragment>
      )}
    </Layout>
  )
};

export default Comments;
