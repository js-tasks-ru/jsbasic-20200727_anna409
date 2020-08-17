/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.prepend(ul);
  let newFriends = friends.map((friend) => `${friend.firstName} ${friend.lastName}`);
  for (let item of newFriends) {
    let li = document.createElement('li');
    li.innerHTML = item;
    document.body.querySelector('ul').append(li);
  }
  return document.body.querySelector('ul');
}
