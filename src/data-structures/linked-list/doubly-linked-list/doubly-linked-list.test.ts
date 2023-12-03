import { describe, test, expect } from 'vitest';
import { DoublyLinkedList } from './doubly-linked-list.js';

describe('Doubly Linked List', () => {
  test('should initantiate DoublyLinkedList completely', () => {
    // Arrange
    const myDoublyLinkedList = new DoublyLinkedList();
    // Act
    // Assert
    expect(myDoublyLinkedList).toBeDefined();
    expect(myDoublyLinkedList.size).toEqual(0);
    expect(myDoublyLinkedList.firstNode).toBeNull();
    expect(myDoublyLinkedList.lastNode).toBeNull();
  });

  describe('insertLast (tail)', () => {
    test('insert an item to last(tail), should be completely', () => {
      // Arrange
      const myDoublyLinkedList = new DoublyLinkedList();
      // Act
      myDoublyLinkedList.insertLast('John');
      // Assert
      expect(myDoublyLinkedList.firstNode?.value).toBe('John');
      expect(myDoublyLinkedList.lastNode?.value).toBe('John');
      expect(myDoublyLinkedList.firstNode?.myNextNode()).toBeNull();
      expect(myDoublyLinkedList.firstNode?.myPreviousNode()).toBeNull();
    });

    test('insert 2 items to last(tail), should be completely', () => {
      // Arrange
      const myDoublyLinkedList = new DoublyLinkedList();
      // Act
      myDoublyLinkedList.insertLast('John');
      myDoublyLinkedList.insertLast('Aek');
      // Assert
      expect(myDoublyLinkedList.firstNode?.value).toStrictEqual('John');
      expect(myDoublyLinkedList.firstNode?.myNextNode()?.value).toStrictEqual('Aek');
      expect(myDoublyLinkedList.lastNode?.value).toBe('Aek');
      expect(myDoublyLinkedList.lastNode?.myPreviousNode()?.value).toStrictEqual('John');
    });
  });

  describe('insertFirst (head)', () => {
    test('insert an to first(head), should be completely', () => {
      // Arrange
      const myDoublyLinkedList = new DoublyLinkedList();
      // Act
      myDoublyLinkedList.insertFirst('Jo');
      // Assert
      expect(myDoublyLinkedList.firstNode?.value).toBe('Jo');
      expect(myDoublyLinkedList.lastNode?.value).toBe('Jo');
      expect(myDoublyLinkedList.firstNode?.myNextNode()).toBeNull();
      expect(myDoublyLinkedList.firstNode?.myPreviousNode()).toBeNull();
    });

    test('insert 2 items to first(head), should be completely', () => {
      // Arrange
      const myDoublyLinkedList = new DoublyLinkedList();
      // Act
      myDoublyLinkedList.insertFirst('Jo');
      myDoublyLinkedList.insertFirst('Aek');
      // Assert
      expect(myDoublyLinkedList.size).toEqual(2);
      expect(myDoublyLinkedList.firstNode?.value).toBe('Aek');
      expect(myDoublyLinkedList.lastNode?.value).toBe('Jo');
    });

    test('insert 3 items to first(head), should be completely', () => {
      // Arrange
      const myDoublyLinkedList = new DoublyLinkedList();
      // Act
      myDoublyLinkedList.insertFirst('Jo');
      myDoublyLinkedList.insertFirst('Aek');
      myDoublyLinkedList.insertFirst('Boss');
      // Assert
      expect(myDoublyLinkedList.size).toEqual(3);
      expect(myDoublyLinkedList.firstNode?.value).toBe('Boss');
      expect(myDoublyLinkedList.firstNode?.myNextNode()?.value).toBe('Aek');
      expect(myDoublyLinkedList.firstNode?.myPreviousNode()).toBeNull();
      expect(myDoublyLinkedList.lastNode?.value).toBe('Jo');
    });
  });
});
