import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {    //createDataContext() i kullanırken alacagı parametreleer

  const Context = React.createContext();                //contexti olusturdum
  
  const Provider = ( { children } )  =>  {              
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    //action==={ addBlogPost : (dispatch) => { return () => {} }  }

    return (                                            //stateti ve fonksiyonları geriye dondurdum
      <Context.Provider value={{ state, ...boundActions }}> 
        {children}                                     
      </Context.Provider>
    );
  };


  return { Context, Provider };                         //context i ve provideri return ile uygulamaya actım.
};
