/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTableFunction(rows);
  }
  createTableFunction(rows) {
    let table = document.createElement('table');
    table.innerHTML = `<thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
</thead>`;
    let tbody = document.createElement('tbody');
    table.append(tbody);
    for (let row of rows) {
      let tr = document.createElement('tr');
      for (let item in row) {
        let td = document.createElement('td');
        td.innerHTML = row[item];
        tr.append(td);
      }
      this.#tdButton(tr);
      tbody.append(tr);
    }
    return table;
  }
  #tdButton(tr) {
    let tdButton = document.createElement('td');
    let button = document.createElement('button');
    button.innerText = 'X';
    tdButton.append(button);
    tdButton.onclick = () => {
      let buttonElement = event.target;
      let removedRow = buttonElement.closest('tr');
      removedRow.parentElement.removeChild(removedRow);
    }
    tr.append(tdButton);
  }
}
