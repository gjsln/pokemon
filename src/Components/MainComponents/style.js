import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacer * 2,
  },
  filterSortContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
    '& .MuiNativeSelect-select': {
      padding: `${theme.spacer}px !important`,
      paddingRight: `${theme.spacer * 4}px !important`,
    },
  },
  sortContainer: {
    display: 'flex',
    paddingLeft: theme.spacer * 2,
    paddingTop: theme.spacer,
    '& .MuiInputLabel-root': {
      paddingRight: theme.spacer,
      paddingTop: theme.spacer,
    },
  },
  paginationContent: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  searchContainer: {
    padding: theme.spacer,
    border: `1px solid #F0F2F7`,
    margin: theme.spacer,
  },
  pointer: {
    cursor: 'pointer',
  },
}));
export default useStyles;
