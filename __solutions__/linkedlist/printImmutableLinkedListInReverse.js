/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
//  4 -> aqui retorna a recursão
//  3
//  2
//  1
//  recursion stack
var printLinkedListInReverse = function (head) {
  // nao tenho acesso ao node (.next, .val, .prev), então nao posso modifica-lo diretamente
  // preciso usar as APIs dadas
  // usando stack da recursão
  if (head.getNext()) printLinkedListInReverse(head.getNext());

  head.printValue();
};

// iterative
const printLinkedListInReverse = (head) => {
  const stack = [];

  while (head) {
    stack.push(head);
    head = head.getNext();
  }

  while (stack.length) stack.pop().printValue();
};
