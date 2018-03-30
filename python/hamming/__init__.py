# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#


def compute(first_str, second_str):
    if len(first_str) != len(second_str):
        raise ValueError('DNA strands must be of equal length.')
    return sum(first != second for first, second in zip(first_str, second_str))
