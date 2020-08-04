# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
# Bonus: Can you do this in one pass?

def add_to_k(array, k)
  options = array.combination(2).to_a;
  # p options

  result = []

  options.each do | val |
    sum = val.sum
    # p sum
    result.push(sum)
  end

  # p result

  if result.include?(17) 
    return true
  end
end 

puts add_to_k([10, 15, 3, 7], 17)


# if any combination of the 2 letters summed together equals 17 
# sum the number going through by index 
# return true 