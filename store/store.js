const state = {
  registeredUser: {
      email: 'test@mail.com',
      password: 'password'
  }
}

const authenticate = (payload) => {
  if(payload.email === state.registeredUser.email && payload.password === state.registeredUser.password) {
    return true;
  } else {
    return false;
  }
}

export { authenticate }
