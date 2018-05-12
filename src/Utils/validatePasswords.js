const MIN_PASSWORD_LENGTH = 8

export function validatePasswords(password1, password2) {
  if (password1 && password2 &&
      password1.length >= MIN_PASSWORD_LENGTH &&
      password1 === password2) {
    return 'success'
  } else if (password1.length === 0 && password2.length === 0) {
    return null
  }
  return 'warning'
}
