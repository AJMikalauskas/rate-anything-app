const styles = {
    ratedItemsList : {
        display: "flex",
        width: "80%",
        height: "80%",
       // For Testing to see --> backgroundColor: "red"
    },
    ratedItemsListSidebar: {
        backgroundColor: "#9575cd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 2,
        borderRadius: 7
    },
    ratedItemsListTitle: {
        fontSize: "3rem",
        color: "white",
        fontWeight: 700,
        margin: 60,
        letterSpacing: 0
    },
    sidebarImage: {
        width: "50%",
        boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "40%"
    },
    ratedItemsListItems: {
        height: "90%",
        width: "70%",
        backgroundColor: "white",
        alignSelf: "center",
        boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        overflow: "scroll",
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7

    }
}

export default styles;