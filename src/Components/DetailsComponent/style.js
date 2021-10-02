import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    display: 'block',
    paddingTop: theme.spacer * 3,
    paddingBottom: theme.spacer * 3,
    textAlign: 'center',
  },
  detailsContainer: {
    display: 'flex',
    padding: theme.spacer * 3,
    justifyContent: 'center',
  },
}));
export default useStyles;
