# puts "Hello World"

# Create a function that returns the array of numbers from a given range. But for multiples of three, return “Eda” instead of the number and for the multiples of five, return “Bit”. For numbers which are multiples of both three and five, return “EdaBit”.

# def eda_bit(start, finish)
#   range = start..finish
#   range.to_a
#   output = []

#   range.each do | n |
#     if n == 0 
#       output.push("EdaBit")
#     elsif (n % 3 == 0) && (n % 5 == 0)
#       output.push("EdaBit")
#     elsif ( n % 3 == 0)
#       output.push("Eda")
#     elsif ( n % 5 == 0) 
#       output.push("Bit")
#     else 
#       output.push(n)
#     end
#   end

#   return output
# end

# p(eda_bit(0, 15))
# ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]


# Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

# If the length of the string is less than two, return "Incompatible.".
# If the argument is not a string, return "Incompatible.".
# If the first and last characters are the same, return "Two's a pair.". 

# def flip_end_chars(str)
#   if str.length < 2 || str.class != String
#     return "Incompatible"
#   elsif 
#     str.chr == str[-1..-1]
#     return "Two\'s a pair"
#   else
#     arr = str.split("")
#     first = arr.shift()
#     last = arr.pop()
#     return arr.unshift(last).push(first).join()
#   end
# end

# p(flip_end_chars("Cat, dog, and mouse."))

# 

# def is_special_array(arr)
#   arr.each_with_index.all? do | num, i |
#     num.even? == i.even?
#   end
# end

# p is_special_array([2, 7, 4, 9, 6, 1, 6, 3])

  # puts "#{i}: #{num}"
  #   if (((i % 2 == 0) && (num % 2 == 0)) && ((i % 2 != 0) && (num % 2 != 0)))
  #     return true
  #   else
  #     return false
  #   end
  # end
  # return 


  def flatten(arr)
    arr.reduce(:+)
  end
  p flatten([1,2,3,4,5])