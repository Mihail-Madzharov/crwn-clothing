import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { createBrowserHistory, createMemoryHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { rootReducer } from "./root-reducer";

export const history = createBrowserHistory();

const middlewares = [logger, routerMiddleware(history)];

export const configureStore = () => {
  return createStore(
    rootReducer(history),
    compose(applyMiddleware(...middlewares))
  );
};

// export const persistor = persistStore(store);
