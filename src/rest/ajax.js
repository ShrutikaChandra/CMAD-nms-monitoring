import store from '../stores/store.js';

export function fetchLogsForGrid() {
    return fetch('../sampleData/logs.json')
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
    return fetch('../sampleData/count.json').then(function (response) {
        return response.json();
    }).then(function (countData) {
        store.dispatch({
            type: 'dashboard',
            count: countData
        });
        console.log("count in ajax", countData);
    });
};