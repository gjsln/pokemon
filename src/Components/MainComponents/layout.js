import React, { useState } from 'react';
import {
  NativeSelect,
  OutlinedInput,
  Grid,
  Box,
  InputLabel,
  InputBase,
  TablePagination,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import PokeMonList from '../PokemonList';
import useStyles from './style';

function MainLayout(props) {
  const { pokemonDetails, count } = props;
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortValue, setSortValue] = useState('');

  const dropValue = ['Select', 'name', 'height', 'weight'];
  const paginationDropDownList = [10, 20, 50, 100];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    handlePagination({
      rowsPerPage: rowsPerPage,
      newPageNumber: newPage,
    });
  };

  const handleOnSearch = (search) => {
    props.handleDataSearch(search.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    let recordsPerPage = parseInt(event.target.value, 10);
    setPage(0);
    setRowsPerPage(recordsPerPage);
    handlePagination({ rowsPerPage: recordsPerPage, newPageNumber: 0 });
  };

  const handleSelectChanges = (data) => {
    if (data.target.value !== 'Select' || data.target.value !== '') {
      setSortValue(data.target.value);
      props.handleDataSorting(data.target.value);
    }
  };

  const handleClickItem = (e, item) => {
    history.push({
      pathname: `/details/${item.id}`,
      pokemon: item,
    });
    // history.push(`/details/${item}`);
  };

  const handlePagination = (value) => {
    const pagination = {
      rowsPerPage: value.rowsPerPage,
      newPageNumber: value.newPageNumber,
    };
    props.handlePageChange(pagination);
  };

  const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
    return (
      <Grid item xs={12} md={4} lg={3} sm={6} key={index}>
        <Box
          component='div'
          className={classes.pointer}
          onClick={(e) => handleClickItem(e, pokemon)}
        >
          <PokeMonList pokemon={pokemon} />
        </Box>
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box component='div' className={classes.searchContainer}>
        <IconButton className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder='Search'
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => handleOnSearch(e)}
        />
      </Box>
      <Box component='div' className={classes.filterSortContainer}>
        <Box component='div' className={classes.sortContainer}>
          <InputLabel>Sort by: </InputLabel>
          <NativeSelect
            id='drop'
            input={<OutlinedInput />}
            value={sortValue}
            onChange={(e) => handleSelectChanges(e)}
            variant='outlined'
          >
            {dropValue.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))}
          </NativeSelect>
        </Box>
        <TablePagination
          className={classes.paginationContent}
          component='div'
          rowsPerPageOptions={paginationDropDownList}
          count={count}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      <Grid item xs={12} md={12} lg={12} sm={12} className={classes.container}>
        <Grid container spacing={2}>
          {renderedPokemonList}
        </Grid>
      </Grid>

      <TablePagination
        component='div'
        rowsPerPageOptions={paginationDropDownList}
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}

export default MainLayout;
