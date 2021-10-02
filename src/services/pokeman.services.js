const api = 'https://pokeapi.co/api/v2/pokemon';

export function fetchDataList(pagination, successCB) {
  const offset = pagination.newPageNumber;
  const limit = pagination.rowsPerPage;
  const url = `${api}?offset=${offset}&limit=${limit}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        let details = [];
        let val = {};
        let res = data?.results || [];
        let count = data?.count;
        res.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((list) => {
              if (list) {
                details = [...details, list];
                val = { count: count, details: details };
                successCB(val);
              }
              return '';
            })
            .catch(console.log);
          return '';
        });
      }
      return '';
    })
    .catch(console.log);
}

export function fetchDetails(id, successCB) {
  const url = `${api}/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log('Data: ', data);
        successCB(data);
      }
    })
    .catch(console.log);
}
