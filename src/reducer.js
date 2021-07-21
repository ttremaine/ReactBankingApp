function usersReducer(state, action) {
    
    switch(action.type) {
      case "CREATE_USER": {
        const newUser = action.payload.newUser;
        return { users: [...state.users, newUser] };
      }
      
      case "UPDATE_BALANCE": {
        return { 
            users: state.users.map(user => {
                if (user.index === state.users.length-1) {
                    return { 
                        ...user, 
                        balance: action.payload.newBalance
                    };
                } else {
                    return user;
                }
            })
        };
      }
      default:
        return state;
    }
}
  
export default usersReducer;