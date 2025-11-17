from typing import TypeVar, Generic
from dataclasses import dataclass

T = TypeVar("T")


@dataclass(frozen=True)
class Stack(Generic[T]):
    _items: tuple[T, ...]

    def add(self, item: T) -> "Stack[T]":
        return Stack(self._items + (item,))

    def remove(self) -> "Stack[T]":
        return Stack(self._items[:-1]) if self._items else self

    def length(self) -> int:
        return len(self._items)

    def print(self) -> list[T]:
        return list(self._items)


def stack(items: list[T] | None = None) -> Stack[T]:
    return Stack(tuple(items) if items else ())
