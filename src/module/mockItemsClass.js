const mockItems = require('../__mock__/storage.js');

module.exports = class MockItemsTest {
  constructor(description, id = 0, compl = false) {
    this.description = description;
    this.id = id;
    this.compl = compl;
  }

  getItem() {
    const task = {
      description: this.description,
      id: this.id,
      complete: this.complete,
    };
    return task;
  }

  static addTask(items) {
    mockItems.push(items);
    return mockItems;
  }

  static deleteTask(id) {
    mockItems.splice(id, 1);
    return mockItems;
  }
};
