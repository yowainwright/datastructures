package linkedlist

import (
	"reflect"
	"testing"
)

func TestItemCreation(t *testing.T) {
	result := Item("foo", map[string]string{"foo": "bar"})
	if result.Name != "foo" {
		t.Errorf("Expected name 'foo', got '%s'", result.Name)
	}
}

func TestCreate(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	result := Create([]*Node{a, b})

	if result.Item.Name != "foo" {
		t.Errorf("Expected first item name 'foo', got '%s'", result.Item.Name)
	}
	if result.NextItem.Item.Name != "bar" {
		t.Errorf("Expected second item name 'bar', got '%s'", result.NextItem.Item.Name)
	}
}

func TestToArray(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	testList := Create([]*Node{a, b})
	result := ToArray(testList)

	if len(result) != 2 {
		t.Errorf("Expected length 2, got %d", len(result))
	}
	if result[0].Name != "foo" {
		t.Errorf("Expected first item 'foo', got '%s'", result[0].Name)
	}
	if result[1].Name != "bar" {
		t.Errorf("Expected second item 'bar', got '%s'", result[1].Name)
	}
}

func TestPrepend(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	initialList := Create([]*Node{b})
	result := Prepend(initialList, a)
	arr := ToArray(result)

	if len(arr) != 2 {
		t.Errorf("Expected length 2, got %d", len(arr))
	}
	if arr[0].Name != "foo" {
		t.Errorf("Expected first item 'foo', got '%s'", arr[0].Name)
	}
}

func TestAppend(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	initialList := Create([]*Node{a})
	result := Append(initialList, b)
	arr := ToArray(result)

	if len(arr) != 2 {
		t.Errorf("Expected length 2, got %d", len(arr))
	}
	if arr[1].Name != "bar" {
		t.Errorf("Expected second item 'bar', got '%s'", arr[1].Name)
	}
}

func TestInsertAt(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	c := Item("middle", map[string]string{"middle": "value"})
	initialList := Create([]*Node{a, b})
	result := InsertAt(initialList, 1, c)
	arr := ToArray(result)

	if len(arr) != 3 {
		t.Errorf("Expected length 3, got %d", len(arr))
	}
	if arr[1].Name != "middle" {
		t.Errorf("Expected middle item 'middle', got '%s'", arr[1].Name)
	}
}

func TestRemoveFirst(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	initialList := Create([]*Node{a, b})
	result := RemoveFirst(initialList)
	arr := ToArray(result)

	if len(arr) != 1 {
		t.Errorf("Expected length 1, got %d", len(arr))
	}
	if arr[0].Name != "bar" {
		t.Errorf("Expected item 'bar', got '%s'", arr[0].Name)
	}
}

func TestRemoveLast(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	initialList := Create([]*Node{a, b})
	result := RemoveLast(initialList)
	arr := ToArray(result)

	if len(arr) != 1 {
		t.Errorf("Expected length 1, got %d", len(arr))
	}
	if arr[0].Name != "foo" {
		t.Errorf("Expected item 'foo', got '%s'", arr[0].Name)
	}
}

func TestRemoveByName(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	c := Item("baz", map[string]string{"test": "data"})
	initialList := Create([]*Node{a, b, c})
	result := RemoveByName(initialList, "bar")
	arr := ToArray(result)

	if len(arr) != 2 {
		t.Errorf("Expected length 2, got %d", len(arr))
	}
	if arr[0].Name != "foo" || arr[1].Name != "baz" {
		t.Errorf("Expected items 'foo' and 'baz', got '%s' and '%s'", arr[0].Name, arr[1].Name)
	}
}

func TestRemoveAt(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	c := Item("baz", map[string]string{"test": "data"})
	initialList := Create([]*Node{a, b, c})
	result := RemoveAt(initialList, 1)
	arr := ToArray(result)

	if len(arr) != 2 {
		t.Errorf("Expected length 2, got %d", len(arr))
	}
	if arr[0].Name != "foo" || arr[1].Name != "baz" {
		t.Errorf("Expected items 'foo' and 'baz', got '%s' and '%s'", arr[0].Name, arr[1].Name)
	}
}

func TestFind(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	testList := Create([]*Node{a, b})
	result := Find(testList, "bar")

	if result == nil {
		t.Error("Expected to find item, got nil")
	} else if result.Name != "bar" {
		t.Errorf("Expected name 'bar', got '%s'", result.Name)
	}
}

func TestFindNonExistent(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	testList := Create([]*Node{a})
	result := Find(testList, "nonexistent")

	if result != nil {
		t.Error("Expected nil for non-existent item")
	}
}

func TestFindIndex(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	testList := Create([]*Node{a, b})
	result := FindIndex(testList, "bar")

	if result != 1 {
		t.Errorf("Expected index 1, got %d", result)
	}
}

func TestFindIndexNonExistent(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	testList := Create([]*Node{a})
	result := FindIndex(testList, "nonexistent")

	if result != -1 {
		t.Errorf("Expected index -1, got %d", result)
	}
}

func TestGetAt(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	testList := Create([]*Node{a, b})
	result := GetAt(testList, 1)

	if result == nil {
		t.Error("Expected to get item, got nil")
	} else if result.Name != "bar" {
		t.Errorf("Expected name 'bar', got '%s'", result.Name)
	}
}

func TestGetAtOutOfBounds(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	testList := Create([]*Node{a})
	result := GetAt(testList, 5)

	if result != nil {
		t.Error("Expected nil for out of bounds index")
	}
}

func TestLength(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	c := Item("baz", map[string]string{"test": "data"})
	testList := Create([]*Node{a, b, c})
	result := Length(testList)

	if result != 3 {
		t.Errorf("Expected length 3, got %d", result)
	}
}

func TestLengthEmpty(t *testing.T) {
	result := Length(nil)
	if result != 0 {
		t.Errorf("Expected length 0, got %d", result)
	}
}

func TestIsEmpty(t *testing.T) {
	emptyList := (*List)(nil)
	nonEmptyList := Create([]*Node{Item("foo", nil)})

	if !IsEmpty(emptyList) {
		t.Error("Expected empty list to be empty")
	}
	if IsEmpty(nonEmptyList) {
		t.Error("Expected non-empty list to not be empty")
	}
}

func TestClear(t *testing.T) {
	result := Clear()
	if result != nil {
		t.Error("Expected cleared list to be nil")
	}
	if !IsEmpty(result) {
		t.Error("Expected cleared list to be empty")
	}
}

func TestReverse(t *testing.T) {
	a := Item("foo", map[string]string{"foo": "bar"})
	b := Item("bar", map[string]string{"biz": "baz"})
	c := Item("baz", map[string]string{"test": "data"})
	testList := Create([]*Node{a, b, c})
	result := Reverse(testList)
	arr := ToArray(result)

	expected := []string{"baz", "bar", "foo"}
	if len(arr) != len(expected) {
		t.Errorf("Expected length %d, got %d", len(expected), len(arr))
	}
	for i, name := range expected {
		if arr[i].Name != name {
			t.Errorf("Expected item %d to be '%s', got '%s'", i, name, arr[i].Name)
		}
	}
}

func TestReverseEmpty(t *testing.T) {
	result := Reverse(nil)
	if result != nil {
		t.Error("Expected reversed empty list to be nil")
	}
}

func nodesEqual(a, b *Node) bool {
	if a == nil && b == nil {
		return true
	}
	if a == nil || b == nil {
		return false
	}
	return a.Name == b.Name && reflect.DeepEqual(a.Data, b.Data)
}
