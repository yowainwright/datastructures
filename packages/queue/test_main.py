from main import queue


def test_init():
    q = queue()
    assert q.length() == 0


def test_add():
    q = queue().add("foo")
    assert q.print() == ["foo"]


def test_remove():
    q = queue().add("foo").add("bar").remove()
    assert q.print() == ["bar"]


def test_length():
    q = queue().add("foo").add("bar")
    assert q.length() == 2


def test_print():
    q = queue().add("foo").add("bar")
    assert q.print() == ["bar", "foo"]
