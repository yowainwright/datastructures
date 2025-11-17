package queue

type Queue[T any] struct {
	items []T
}

func New[T any]() *Queue[T] {
	return &Queue[T]{items: []T{}}
}

func (q *Queue[T]) Add(item T) *Queue[T] {
	newItems := make([]T, len(q.items)+1)
	newItems[0] = item
	copy(newItems[1:], q.items)
	return &Queue[T]{items: newItems}
}

func (q *Queue[T]) Remove() *Queue[T] {
	if len(q.items) == 0 {
		return q
	}
	newItems := make([]T, len(q.items)-1)
	copy(newItems, q.items[:len(q.items)-1])
	return &Queue[T]{items: newItems}
}

func (q *Queue[T]) Length() int {
	return len(q.items)
}

func (q *Queue[T]) Print() []T {
	result := make([]T, len(q.items))
	copy(result, q.items)
	return result
}
