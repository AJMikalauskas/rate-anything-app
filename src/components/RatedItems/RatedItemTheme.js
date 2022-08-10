const styles = {
    ratedItem: {
        display: "flex",
        borderBottom: "2px solid #eee",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        padding: "1rem"
    },
    rateItmBtns : {
        display: "flex",
        marginRight: "1rem",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "15%",
        flexWrap: "wrap",
    },
    arrowIcon: {
        fontSize: "2em",
       // margin: 10,
        cursor: "pointer"
    },
    votesLabel : {
        fontSize: 40,
        marginBottom: "50px"
    },
    rateItemTxt : {
        width: "65%",
        fontSize: "1.2rem",
        //paddingLeft: "25px",
        textAlign: "center"
    },
    ratingEmoji: {
        fontSize: "3rem",
        marginLeft: "auto",
        borderRadius: "50%",
        boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)"
    }
}

export default styles;