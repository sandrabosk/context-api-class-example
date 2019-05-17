import React from 'react';

// first we will make a new context
const MyContext = React.createContext();

class MyProvider extends React.Component{
    state = {
      teacher: {
        name: 'Joss',
        age: 23,
        cool: true
      }
    }
    getYearOlder = () => {
      this.setState(prev => {
        return {
          teacher: { 
            ...prev.teacher, 
            age: prev.teacher.age + 1 
          }
        }  
      })     
    }
    
    render() {
      return (
        <MyContext.Provider value={{
          ...this.state,
          getYearOlder: this.getYearOlder
        }}>
          {this.props.children}
        </MyContext.Provider>
      );
    }
}

export { MyProvider, MyContext };
