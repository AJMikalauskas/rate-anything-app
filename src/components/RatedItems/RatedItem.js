import React, { useCallback } from 'react'
import { Box, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Typography from '@material-ui/core/Typography';
import styles from './RatedItemTheme';

// mui theming documentation -> https://mui.com/material-ui/customization/theming/ 
const useStyles = makeStyles((theme) => (styles))

const RatedItem = (props) => {
    // object destructure from props to only use it as name instead of with props.votes, use votes
    const { votes, name, upVote, downVote } = props;
    const classes = useStyles();

    const getEmojiBasedOnVotes = useCallback(() => {
        if(votes >= 9) {
            return "em em-rolling_on_the_floor_laughing";
        } else if(votes >= 6) {
            return "em em-laughing";
        } else if(votes >= 3) {
            return "em em-slightly_smiling_face";
        } else {
            return "em em-neutral_face";
        }
    }, [votes])

    return (
        <div>
            <Box className={classes.ratedItem}>
                {/* Test Rated Item */}
                <Box className={classes.rateItemBtns}>
                    {/* Add Upvote and downvote for specific items you're rating */}
                    <ArrowUpwardIcon className={classes.arrowIcon} onClick={() => upVote()}/>
                    {/* Will Make votes dynamic based on clicks of down and up, start 
                    value will be 0, will add by useState hook */}
                    <span className={classes.votesLabel}>{votes}</span>
                    <ArrowDownwardIcon className={classes.arrowIcon} onClick={() => downVote()}/>
                </Box>
                <Box className={classes.rateItemTxt}>
                    {name}
                </Box>
                <Box className={classes.ratingEmoji}>
                    <i className={getEmojiBasedOnVotes(votes)}/>
                </Box>
            </Box>
        </div>
    )
}
export default RatedItem;