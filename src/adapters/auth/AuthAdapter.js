/**
 * @typedef {Object} AuthResult
 * @property {Object} user
 * @property {string} user.id
 * @property {string} user.email
 * @property {string} [user.name]
 * @property {string} [user.avatar]
 * @property {Object} session
 */

/**
 * Auth adapter interface.
 * Any auth provider (Supabase, Firebase, Auth0) must implement these methods.
 */
export class AuthAdapter {
  async signInWithGoogle() { throw new Error('Not implemented'); }
  async signInWithEmail(email, password) { throw new Error('Not implemented'); }
  async signUp(email, password, metadata) { throw new Error('Not implemented'); }
  async signOut() { throw new Error('Not implemented'); }
  async getCurrentUser() { throw new Error('Not implemented'); }
  async getSession() { throw new Error('Not implemented'); }
  onAuthStateChange(callback) { throw new Error('Not implemented'); }
  async resetPassword(email) { throw new Error('Not implemented'); }
}
