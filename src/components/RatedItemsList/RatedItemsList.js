import React, { useEffect, useState, useCallback } from "react";
// install and use mui imports for styling
// mui theming documentation -> https://mui.com/material-ui/customization/theming/
import { Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styles from "./RatedItemsListTheme";
import RatedItem from "../RatedItems/RatedItem";
import axios from "axios";

const useStyles = makeStyles((theme) => styles);
const optionsForAPICall = {
  method: "GET",
  url: "https://ajith-holy-bible.p.rapidapi.com/GetBooks",
  headers: {
    "X-RapidAPI-Key": "3fb132f0a4msh01884afa74b3096p1653c7jsnd2db1dce89cf",
    "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
  },
};

const RatedItemsList = () => {
  // Stylesheet stored inside this classes const, access specific class by "classes.___"
  const classes = useStyles();
  const [ratedItems, setRatedItems] = useState([]);

  async function getRatedItems() {
    let newItems = [];
    // Need ids for key prop in list items
    let id = 0;
    let res = await axios.request(optionsForAPICall);

    let oldTestamentBooks = res.data.The_Old_Testament;
    let newTestamentBooks = res.data.The_New_Testament;
    //console.log(oldTestamentBooks);
    oldTestamentBooks = oldTestamentBooks.split(" ");
    newTestamentBooks = newTestamentBooks.split(" ");
    //      newItems.push(oldTestamentBooks[1], ol)
    for (var i = 1; i < 10; i += 2) {
      newItems.push({id: id+i-1,nameOfBibleBook: oldTestamentBooks[i], votes: 0}, {id: id+i, nameOfBibleBook: newTestamentBooks[i], votes: 0});
    }
    console.log(newItems);
    setRatedItems(newItems);
  }
  //  I will implement call to my own API with ability to add and create a list of 10 things to rate.
  // For now just call and show bible books --> install axios ino order to call API, simpler, but can also use fetch
  useEffect(() => {
    // Only calls once but the called function logic could be in here as async
    getRatedItems();
  }, []);

  // Maybe try my own logic with this later? Memoizes the function in useCallback and will just call memoized function unless any dependencies change 
  const voteHandler = useCallback((id, offset) => {
    let filteredBibleBooks = ratedItems.filter((book) => book.id !== id);
    let bibleBook = ratedItems.find((book) => book.id === id)

    if(bibleBook.votes + offset > 10 || bibleBook.votes + offset < 0) {
       console.log("Voting Range is from 0-10");
    } else {
    bibleBook.votes += offset;
    // Push the new ratedItem based on its votes, this coding logic in react can probably be changed?
    filteredBibleBooks.push(bibleBook);
    // Sort bible books by the votes they have on them
    filteredBibleBooks.sort((a,b) => b.votes - a.votes); // --> descending order
    setRatedItems(filteredBibleBooks);
    }
}, [ratedItems, setRatedItems])
  return (
    <>
      {ratedItems ? (
        <Box className={classes.ratedItemsList}>
          <Box className={classes.ratedItemsListSidebar}>
            <Typography className={classes.ratedItemsListTitle}>
              Bible
              <br />
              Books
            </Typography>
            {/* Add width and height depending on what you're rating */}
            <img className={classes.sidebarImage} src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" 
            alt="main-emoji" />
          </Box>
          <Box className={classes.ratedItemsListItems}>
            {/* Format of having a styled raterItemsList and ratedItem itself, 
        will props and map data in here to ratedItem.js?  --> Make sure it shows in UI */}
        {ratedItems.map((ratedItem) => {
          return (
            // Send in props of data down to specific ratedItem 
            <RatedItem votes={ratedItem.votes} name={ratedItem.nameOfBibleBook} key={ratedItem.id} 
            upVote ={() => voteHandler(ratedItem.id, 1)} 
            downVote = {() => voteHandler(ratedItem.id, -1)} />
          )
        })}
          </Box>
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default RatedItemsList;
