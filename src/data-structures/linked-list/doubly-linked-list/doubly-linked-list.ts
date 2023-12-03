// ━━━━━━━━━━━━━━━━━━━━━━━
//  ⛓️Doubly Linked List
// ━━━━━━━━━━━━━━━━━━━━━━━
class MyNode {
  private _previousNode: MyNode | null;
  private _value: string;
  private _nextNode: MyNode | null;

  constructor(value: string) {
    this._value = value;
    this._nextNode = null;
    this._previousNode = null;
  }

  get value() {
    return this._value;
  }

  set previousNode(targetNode: MyNode | null) {
    this._previousNode = targetNode;
  }

  set nextNode(newNode: MyNode | null) {
    this._nextNode = newNode;
  }

  myPreviousNode() {
    return this._previousNode;
  }
  myNextNode() {
    return this._nextNode;
  }
}

export class DoublyLinkedList {
  private _firstNode: MyNode | null = null;
  private _lastNode: MyNode | null = null;
  private _size = 0;

  get firstNode() {
    return this._firstNode;
  }

  get lastNode() {
    return this._lastNode;
  }

  get size() {
    return this._size;
  }

  insertLast(newName: string) {
    const newNode = new MyNode(newName);

    if (!this._firstNode || !this._lastNode) {
      this._firstNode = newNode;
      this._lastNode = newNode;
      this._size++;
      return;
    }

    newNode.previousNode = this._lastNode;
    this._lastNode.nextNode = newNode;
    this._lastNode = newNode;
    this._size++;
  }

  insertFirst(newName: string): void {
    const newNode = new MyNode(newName);

    if (!this._firstNode || !this._lastNode) {
      this._firstNode = newNode;
      this._lastNode = newNode;
      this._size++;
      return;
    }

    newNode.nextNode = this._firstNode;
    this._firstNode.previousNode = newNode;
    this._firstNode = newNode;
    this._size++;
  }

  private isEmpty(): boolean {
    return this._size <= 0;
  }
}
