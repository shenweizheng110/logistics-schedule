import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import '../style/console.less';
import AppContainer from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import { message } from 'antd';
import { showMsg } from './actions'

const mountNode = document.getElementById('root');
const AppWrapper = withRouter(AppContainer);
const middleware: any[] = [ thunkMiddleware ];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

// 订阅  error 显示error后清空error
store.subscribe(() => {
    let msgInfo = store.getState().msgInfo;
    if(msgInfo.msg){
        let type: any = msgInfo.type;
        switch(type){
            case 'error':
                message.error(msgInfo.msg);
                break;
            case 'success':
                message.success(msgInfo.msg);
                break;
            case 'info':
                message.info(msgInfo.msg);
                break;
            case 'warn':
            case 'warning':
                message.warning(msgInfo.msg);
                break;
            case 'loading':
                message.loading(msgInfo.msg);
                break;
        }
        store.dispatch(showMsg({
            type: null,
            msg: null
        }));
    }
})

ReactDom.render(
    <Provider store={store}>
        <Router>
            <LocaleProvider locale={zhCN}>
                <Route path='/console' component={AppWrapper} />
            </LocaleProvider>
        </Router>
    </Provider>
,mountNode);
