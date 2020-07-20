import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/tab";
import Button from '@material-ui/core/Button'


import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    borderRadius: "50px",
    height: "45px",
  },

}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="Arc Development" className={classes.logo} src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
              indicatorColor="primary">
              <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
              <Tab className={classes.tab} component={Link} to="/services" label="Service"></Tab>
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"></Tab>
              <Tab className={classes.tab} component={Link} to="/about" label="Abous Us"></Tab>
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact US"></Tab>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>free Estimte</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
