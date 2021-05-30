#!/usr/bin/python3
# This is a simple implementation of the logistic map, that is intoduced on pages 27f..


startx = float(input("Starting value for X (must be a between 0.0 and 1.0): "))
r = float(input("Value for R (must be a number): "))
repetitions = int(input("How many steps shall be calculated? (must be an integer): "))

x = startx
print("Calculating %d steps with starting x = %f and R = %f" % (repetitions, startx, r))
for i in range(6):
    print("Step: %d x is %f" % (i,x))
    x = r * x * (1 -x)
