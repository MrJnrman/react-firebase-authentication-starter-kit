// the context api is used to provide a top level(singleton) firebase instance that is available to the entire project
import React from 'react';

const FirebaseContext = React.createContext(null);

/**
 * withFirebase is a higher order component which can be used to wrap a base component.
 * This wrapped component will have access to the higher order compoenents intstance of firebase
 */
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;