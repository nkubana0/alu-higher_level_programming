#!/usr/bin/python3
def print_last_digit(number):
    y = abs(number)
    x = y % 10
    print(f"{x}", end="")
    return(x)
