class Fraction:
    def __init__(self, top, bottom):
        self.num = top
        self.den = bottom

    def show(self):
        print self.num, '/', self.den

    def __str__(self):
        return str(self.num), "/", str(self.den)

myFraction = Fraction(3,5)
# myFraction.show()

myFraction.__str__()
