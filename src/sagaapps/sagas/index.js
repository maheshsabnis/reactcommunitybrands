// logic for Saga
// Sagas provides operators  to perfrom operations to subscribe to promise
// read the data from promise using 'GENERATOR FUNCTIONS'(?)
// These are opoerator functions those exeutes on collections to read daat
// these operatots can also perform the write operations

// put: returns a new output action and based on this reducer will execute
// call: invoke a method that will resolve the promise object for any async operation
// all: used to monitor all SAGA generator those are either performing asyc operations and dispatching
// output action
// takeLatest: subscrice an read latest response from the async operations

import {put, call, all, takeLatest} from 'redux-saga/effects';

import {HttpService} from './../../services/httpservice';

// a method method that will acces a method from service that returns a promise object

function getProductsData(){
    let serv = new HttpService();
    const response = serv.getData().then((result)=>result.data);
    // resolve the promise object so that
    // a generator funciton of saga will be able to read the data
    return Promise.resolve(response);
}

function saveProduct(prd){
    let serv = new HttpService();
    alert(`The save product Parameter ${JSON.stringify(prd)}`);
    const response = serv.postData(prd).then((result)=>result.data);
    return Promise.resolve(response);
}   

// generator function that will be used to subscrice to the promise, read data
// and if the data read successful then return an output action
function* fetchProductsGenerator(){
    console.log('3. Calling REST');
    // subscribe to the promise
    const response = yield call(getProductsData);
    console.log('4.DONE with s Calling REST');
    console.log(`eReceived data ${JSON.stringify(response)}`);
    // put the succsess response as output action and a payload
    yield put({
        type: 'GET_PRODUCTS_SUCCESS',
        products: response || {error: 'ERROR_OCCURED'}
    });
}

// Watcher to save data

function* saveProductsGenerator(action){
    console.log('3. saveProductsGenerator');
    const parameters = action.payload;
    alert(`The SAGA Save Parameter ${JSON.stringify(parameters)}`);
    // subscribe to the promise
    const response = yield call(saveProduct,parameters);
    console.log('4.DONE with s Calling REST');
    console.log(`eReceived data ${JSON.stringify(response)}`);
    // put the succsess response as output action and a payload
    yield put({
        type: 'SAVE_PRODUCTS_SUCCESS',
        product: response || {error: 'ERROR_OCCURED'}
    });
}

// generator function that will be used to listen (or take) the dispatcg request
function* dispatchGetProductsAction(){
    console.log('2. Action is DIspatched');
    yield takeLatest('GET_PRODUCTS',fetchProductsGenerator);
}

function* dispatchSaveProductsAction(){
    console.log('2. Save Action is DIspatched');
    yield takeLatest('ADD_PRODUCT',saveProductsGenerator);
}

// combine all saga generators so that the store will be aware about it
// the Redux store will be this saga function as a middleware to monitor 
// async calls
export default function* rootSaga() {
    console.log('1. Started Listening by SAGA');
    yield all([dispatchGetProductsAction(), dispatchSaveProductsAction()]);
}

