"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        """Initialize a serial number."""
        self.start = start -1
        self.new = start

    def __repr__(self):
        """Representation of a serial."""
        return f"SerialGenerator: Initial value: {self.new}, Current value: {self.start}"

    def generate(self):
        """Return the current value of your serial. Adds 1 each time it is called."""
        self.start += 1
        return self.start

    def reset(self):
        """Reset serial to value at initialization."""
        self.start = self.new -1


serial = SerialGenerator(start=100)
print(serial)
print(serial.generate())
print(serial.generate())
print(serial.generate())
print(serial.generate())
serial.reset()
print(serial.generate())
print(serial.generate())