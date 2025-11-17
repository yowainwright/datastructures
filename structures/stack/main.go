package stack

type Stack[T any] struct {
	items []T
}

func New[T any]() *Stack[T] {
	return &Stack[T]{items: []T{}}
}

func (s *Stack[T]) Add(item T) *Stack[T] {
	newItems := make([]T, len(s.items)+1)
	copy(newItems, s.items)
	newItems[len(s.items)] = item
	return &Stack[T]{items: newItems}
}

func (s *Stack[T]) Remove() *Stack[T] {
	if len(s.items) == 0 {
		return s
	}
	newItems := make([]T, len(s.items)-1)
	copy(newItems, s.items[:len(s.items)-1])
	return &Stack[T]{items: newItems}
}

func (s *Stack[T]) Length() int {
	return len(s.items)
}

func (s *Stack[T]) Print() []T {
	result := make([]T, len(s.items))
	copy(result, s.items)
	return result
}
