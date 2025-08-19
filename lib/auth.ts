export const isAdminAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("adminAuth") === "true"
}

export const logoutAdmin = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminAuth")
  }
}

export const requireAuth = (callback: () => void) => {
  if (!isAdminAuthenticated()) {
    window.location.href = "/admin"
    return
  }
  callback()
}
