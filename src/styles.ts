import { makeStyles } from '@material-ui/core/styles';

//todo how does this work?
export const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));