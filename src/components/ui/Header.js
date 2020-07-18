import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
}))

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

 const Header = () => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color= "primary">
                    <Toolbar>
                        <Typography variant= "h3">
                            ARC Development
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>   
    )
}
 export default Header
