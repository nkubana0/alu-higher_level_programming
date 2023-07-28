#!/usr/bin/python3
# 10-base_geometry.py
"""A python module
that creates an empty
class
"""


Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """This is a class Square
    that inherits from the
    class Rectangle and indirectly
    from the class BaseGeometry
    """
    def __init__(self, size):
        """The initialization method for
        the class Square
        """
        self.__size = self.integer_validator("size", size)

    def area(self):
        return self.__size * self.__size

    def __str__(self):
        return f"[Rectangle] {self.__size}/{self.__size}"
