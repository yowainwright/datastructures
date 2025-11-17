package stack

import (
	"reflect"
	"testing"
)

func TestInit(t *testing.T) {
	s := New[string]()
	if s.Length() != 0 {
		t.Errorf("Expected length 0, got %d", s.Length())
	}
}

func TestAdd(t *testing.T) {
	s := New[string]().Add("foo")
	expected := []string{"foo"}
	if !reflect.DeepEqual(s.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, s.Print())
	}
}

func TestRemove(t *testing.T) {
	s := New[string]().Add("foo").Add("bar").Remove()
	expected := []string{"foo"}
	if !reflect.DeepEqual(s.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, s.Print())
	}
}

func TestLength(t *testing.T) {
	s := New[string]().Add("foo").Add("bar")
	if s.Length() != 2 {
		t.Errorf("Expected length 2, got %d", s.Length())
	}
}

func TestPrint(t *testing.T) {
	s := New[string]().Add("foo").Add("bar")
	expected := []string{"foo", "bar"}
	if !reflect.DeepEqual(s.Print(), expected) {
		t.Errorf("Expected %v, got %v", expected, s.Print())
	}
}
