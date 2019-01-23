import store from '../stores/store.js';

export function fetchLogsForGrid() {
    return fetch('http://localhost:8083/nmslog/')
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (logData) {
            store.dispatch({
                type: 'grid',
                logs: logData
            });
            console.log("logData in ajax", logData);
        });
};

export function fetchCount() {
    return fetch('http://localhost:8083/nmslog/count/').then(function (response) {
        return response.json();
    }).then(function (countData) {
        console.log(countData);
        const formattedData = [];
        formattedData.push({
            key : "error",
            value : countData.errorCount
        })
        formattedData.push({
            key : "warning",
            value : countData.warnCount
        })
        formattedData.push({
            key : "info",
            value : countData.infoCount
        })
        formattedData.push({
            key : "debug",
            value : countData.debugCount
        })
        store.dispatch({
            type: 'dashboard',
            count: formattedData
        });
        console.log("count in ajax", formattedData);
    });
};