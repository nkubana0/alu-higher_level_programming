def add_integer(a, b=98):
    """
    Adds two integers.

    Args:
        a (int or float): The first integer or float.
        b (int or float, optional): The second integer or float. Defaults to 98.

    Returns:
        int: The sum of a and b (after casting to integers if necessary).

    Raises:
        TypeError: If a or b is not an integer or a float.

    Examples:
        >>> add_integer(1, 2)
        3
        >>> add_integer(100, -2)
        98
        >>> add_integer(2)
        102
        >>> add_integer(100.3, -2)
        98
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer or b must be an integer")

    if not isinstance(b, (int, float)):
        raise TypeError("a must be an integer or b must be an integer")

    return int(a) + int(b)

# Example usage
if __name__ == "__main__":
    print(add_integer(1, 2))
    print(add_integer(100, -2))
    print(add_integer(2))
    print(add_integer(100.3, -2))
    try:
        print(add_integer(4, "School"))
    except Exception as e:
        print(e)
    try:
        print(add_integer(None))
    except Exception as e:
        print(e)

