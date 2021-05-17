import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import classNames from 'classnames';

const CustomTypography = ({ 
    color = 'primary',
    ...other
 }) => {
    const styles = useStyles();

    return (
        <Typography
            color={color}
            className={classNames(
                styles.root,
                styles[color],
            )}
            {...other}
        />
    )
 }
 export default CustomTypography;
