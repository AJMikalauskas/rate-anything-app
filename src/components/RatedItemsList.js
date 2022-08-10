import React from "react";
// install and use mui imports for styling
// mui theming documentation -> https://mui.com/material-ui/customization/theming/ 
import { Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styles from "./RatedItemsListTheme";

const useStyles = makeStyles((theme) => (
    styles
));
const RatedItemsList = () => {
  // Stylesheet stored inside this classes const, access specific class by "classes.___"
    const classes = useStyles();
  return (
  <Box className={classes.ratedItemsList}>
        <Box className={classes.ratedItemsListSidebar}>
            <Typography className={classes.ratedItemsListTitle}>
                Dad
                <br/>
                Jokes
            </Typography>
            {/* Add width and height depending on what you're rating */}
            <img className={classes.sidebarImage} src="" alt=""/>
        </Box>
        <Box className={classes.ratedItemsListItems}>

        </Box>
  </Box>
  );
};

export default RatedItemsList;
