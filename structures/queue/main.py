from typing import TypeVar, Generic
from dataclasses import dataclass

T = TypeVar("T")


@dataclass(frozen=True)
class Queue(Generic[T]):
    _items: tuple[T, ...]

    def add(self, item: T) -> "Queue[T]":
        return Queue((item,) + self._items)

    def remove(self) -> "Queue[T]":
        return Queue(self._items[:-1]) if self._items else self

    def length(self) -> int:
        return len(self._items)

    def print(self) -> list[T]:
        return list(self._items)


def queue(items: list[T] | None = None) -> Queue[T]:
    return Queue(tuple(items) if items else ())
