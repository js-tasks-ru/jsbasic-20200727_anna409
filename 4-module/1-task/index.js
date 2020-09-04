/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  let newFriends = friends.map((friend) => `${friend.firstName} ${friend.lastName}`);
  for (let item of newFriends) {
    let li = document.createElement('li');
    li.innerHTML = item;
    ul.append(li);
  }
  return ul;
}
