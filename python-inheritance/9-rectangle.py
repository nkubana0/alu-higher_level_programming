#!/usr/bin/python3
# 9-base_geometry.py
"""A python module
that creates an empty
class
"""


class BaseGeometry():
    """An empty class
    called BaseGeometry
    """
    def __init__(self, do_print=False):
        if do_print:
            self.count = 1

    def area(self):
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        self.name = name
        if not type(value) == int:
            raise TypeError(f"{self.name} must be an integer")
        elif value <= 0:
            raise ValueError(f"{self.name} must be greater than 0")
        else:
            return value


class Rectangle(BaseGeometry):
    """The class Recatangle that
    inherits the class BaseGeometry
    """
    def __init__(self, width, height):
        """The initialization method
        of the class Rectangle using the
        class basegeometry method called
        integer_validator()
        """
        self.__width = self.integer_validator("width", width)
        self.__height = self.integer_validator("height", height)

    def area(self):
        return self.__width * self.__height

    def __str__(self):
            return f"[Rectangle] {self.__width}/{self.__height}"
