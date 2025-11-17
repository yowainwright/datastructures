package linkedlist

type Node struct {
	Name string
	Data interface{}
}

type List struct {
	Item     *Node
	NextItem *List
}

func Item(name string, data interface{}) *Node {
	return &Node{Name: name, Data: data}
}

func Link(nextItem *List, item *Node) *List {
	if item == nil {
		return nextItem
	}
	return &List{
		Item:     &Node{Name: item.Name, Data: item.Data},
		NextItem: nextItem,
	}
}

func Create(items []*Node) *List {
	var result *List
	for i := len(items) - 1; i >= 0; i-- {
		result = Link(result, items[i])
	}
	return result
}

func ToArray(list *List) []*Node {
	if list == nil || list.Item == nil {
		return []*Node{}
	}
	result := []*Node{list.Item}
	return append(result, ToArray(list.NextItem)...)
}

func Prepend(list *List, item *Node) *List {
	if item == nil {
		return list
	}
	return &List{
		Item:     item,
		NextItem: list,
	}
}

func Append(list *List, item *Node) *List {
	if item == nil {
		return list
	}
	if list == nil {
		return &List{Item: item, NextItem: nil}
	}
	return &List{
		Item:     list.Item,
		NextItem: Append(list.NextItem, item),
	}
}

func InsertAt(list *List, index int, item *Node) *List {
	if item == nil || index < 0 {
		return list
	}
	if index == 0 {
		return Prepend(list, item)
	}
	if list == nil {
		return list
	}
	return &List{
		Item:     list.Item,
		NextItem: InsertAt(list.NextItem, index-1, item),
	}
}

func RemoveFirst(list *List) *List {
	if list == nil {
		return nil
	}
	return list.NextItem
}

func RemoveLast(list *List) *List {
	if list == nil || list.NextItem == nil {
		return nil
	}
	return &List{
		Item:     list.Item,
		NextItem: RemoveLast(list.NextItem),
	}
}

func RemoveByName(list *List, name string) *List {
	if list == nil {
		return nil
	}
	if list.Item != nil && list.Item.Name == name {
		return list.NextItem
	}
	return &List{
		Item:     list.Item,
		NextItem: RemoveByName(list.NextItem, name),
	}
}

func RemoveAt(list *List, index int) *List {
	if list == nil || index < 0 {
		return list
	}
	if index == 0 {
		return list.NextItem
	}
	return &List{
		Item:     list.Item,
		NextItem: RemoveAt(list.NextItem, index-1),
	}
}

func Find(list *List, name string) *Node {
	if list == nil {
		return nil
	}
	if list.Item != nil && list.Item.Name == name {
		return list.Item
	}
	return Find(list.NextItem, name)
}

func FindIndex(list *List, name string) int {
	return findIndexHelper(list, name, 0)
}

func findIndexHelper(list *List, name string, index int) int {
	if list == nil {
		return -1
	}
	if list.Item != nil && list.Item.Name == name {
		return index
	}
	return findIndexHelper(list.NextItem, name, index+1)
}

func GetAt(list *List, index int) *Node {
	if list == nil || index < 0 {
		return nil
	}
	if index == 0 {
		return list.Item
	}
	return GetAt(list.NextItem, index-1)
}

func Length(list *List) int {
	if list == nil {
		return 0
	}
	return 1 + Length(list.NextItem)
}

func IsEmpty(list *List) bool {
	return list == nil
}

func Clear() *List {
	return nil
}

func Reverse(list *List) *List {
	return reverseHelper(list, nil)
}

func reverseHelper(list *List, acc *List) *List {
	if list == nil {
		return acc
	}
	return reverseHelper(list.NextItem, &List{Item: list.Item, NextItem: acc})
}
