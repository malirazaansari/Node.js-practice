// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// function reverseList(head) {
//   let prev = null;
//   let curr = head;
//   let next = null;

//   while (curr !== null) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// }

// // Example usage
// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// const reversedHead = reverseList(head);

// console.log(reversedHead);
