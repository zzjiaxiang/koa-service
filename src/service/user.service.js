const connections = require('../app/database')

class UserService {
  async create(user) {
    const { name, id, phon, emali } = user;
    const statement = `INSERT INTO users (id, name,phon,emali) VALUES (?, ?,?,?);`;
    const result = await connections.execute(statement, [id, name, phon, emali],)
    return result[0];
  }
  async getUserById(id) {
    const statement = `SELECT * FROM users WHERE id = ?;`;
    const result = await connections.execute(statement, [id]);
    return result[0];
  }
  async getAllUsers() {
    const statement = `SELECT * FROM users;`;
    const result = await connections.execute(statement);
    return result[0];
  }
  async remove(id) {
    const statement = `DELETE FROM users WHERE id = ? `
    const [result] = await connections.execute(statement, [id])
    return result
  }
}

module.exports = new UserService()