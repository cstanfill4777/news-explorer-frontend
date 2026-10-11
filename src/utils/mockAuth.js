
const SESSION_KEY = 'newsExplorerMockSession'

export function mockLogin(email, password) {
  if (!email || !password) {
    throw new Error('Email and password are required')
  }

  const user = {
    email,
    name: email.split('@')[0],
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  return user
}

export function mockRegister(email, password, name) {
  if (!email || !password || !name) {
    throw new Error('All fields are required')
  }

  const user = { email, name }

  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  return user
}

export function mockCheckToken() {
  try {
    const session = localStorage.getItem(SESSION_KEY)
    return session ? JSON.parse(session) : null
  } catch {
    return null
  }
}

export function mockLogout() {
  localStorage.removeItem(SESSION_KEY)
}
