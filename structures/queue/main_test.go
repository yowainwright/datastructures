package queue

import (
	"reflect"
	"testing"
)

func TestInit(t *testing.T) {
	q := New[string]()
	if q.Length() != 0 {
		t.Errorf("Expected length 0, got %d", q.Length())
	}
}

func TestAdd(t *testing.T) {
	q := New[string]().Add("foo")
	expected := []string{"foo"}
	if !reflect.DeepEqual(q.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, q.Print())
	}
}

func TestRemove(t *testing.T) {
	q := New[string]().Add("foo").Add("bar").Remove()
	expected := []string{"bar"}
	if !reflect.DeepEqual(q.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, q.Print())
	}
}

func TestLength(t *testing.T) {
	q := New[string]().Add("foo").Add("bar")
	if q.Length() != 2 {
		t.Errorf("Expected length 2, got %d", q.Length())
	}
}

func TestPrint(t *testing.T) {
	q := New[string]().Add("foo").Add("bar")
	expected := []string{"bar", "foo"}
	if !reflect.DeepEqual(q.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, q.Print())
	}
}
