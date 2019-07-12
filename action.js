const itemData = [
    {
        itemDiscount: "20%",
        itemName: "ToothPaste",
        price: "Rs 400",
        id:1
    },
    {
        itemDiscount: "10%",
        itemName: "Tower",
        price: "Rs 200",
        id:2
    },
    {
        itemDiscount: "5%",
        itemName: "Deo",
        price: "Rs 100",
        id:3
    },
    {
        itemName: "Pen",
        price: "Rs 25",
        id:4
    },
    {
        itemDiscount: "2%",
        itemName: "Notebook",
        price: "Rs 10",
        id:5
    },
    {
        itemName: "Rubber",
        price: "Rs 5",
        id:6
    },
    {
        itemDiscount: "1%",
        itemName: "File",
        price: "Rs 50",
        id:7
    },
    {
        itemName: "Marker",
        price: "Rs 10",
        id:8
    }
]

export const getItems = function () {
    return (dispatch) => {
        var promise = new Promise((resolve, reject) => {
            dispatch({type : "resetitemlist", payload : []})
            resolve();
        });
        promise.then(
            () => {
                dispatch({type : "fetchitemlist", payload : itemData})
             },
            () => {
                alert("error!!!");
             }
        )
    }
}

export const addItem = function (item) {
    return (dispatch) => {
        var promise = new Promise((resolve, reject) => {
            resolve();
        });
        promise.then(
            () => {
                dispatch({type : "additemlist", payload : item})
             },
            () => {
                alert("error!!!");
             }
        )
    }
}

export const removeFromCart = function (id) {
    return (dispatch) => {
        var promise = new Promise((resolve, reject) => {
            resolve();
        });
        promise.then(
            () => {
                dispatch({type : "remove", payload : id})
             },
            () => {
                alert("error!!!");
             }
        )
    }
}

