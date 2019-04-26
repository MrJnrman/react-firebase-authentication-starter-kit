// the context api is used to provide a top level(singleton) firebase instance that is available to the entire project
import React from 'react';

const FirebaseContext = React.createContext(null);

export default FirebaseContext;