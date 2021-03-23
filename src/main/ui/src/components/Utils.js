import React from "react";

function getNotification(errors) {
    if (errors < 0) {
        console.log("Something goes wrong. Number of errors couldn't be negative number...");
        return (
            <div></div>
        );
    } else if (errors === 0) {
        return (
            <div className="alert alert-success" role="alert">
                Everything is right.
            </div>
        )
    } else if (errors < 5) {
        return (
            <div className="alert alert-warning" role="alert">
                There are some warnings! Please, pay attention for it.
            </div>
        )
    } else {
        return (
            <div className="alert alert-danger" role="alert">
                Too many errors!!! You need to replace it.
            </div>
        )
    }
}

export default getNotification;
