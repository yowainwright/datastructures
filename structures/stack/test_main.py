from main import stack


def test_init():
    s = stack()
    assert s.length() == 0


def test_add():
    s = stack().add("foo")
    assert s.print() == ["foo"]


def test_remove():
    s = stack().add("foo").add("bar").remove()
    assert s.print() == ["foo"]


def test_length():
    s = stack().add("foo").add("bar")
    assert s.length() == 2


def test_print():
    s = stack().add("foo").add("bar")
    assert s.print() == ["foo", "bar"]
