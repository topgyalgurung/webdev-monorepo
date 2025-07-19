puts 1+2 
puts 9/2  # output 4
puts "hello world"

# to run file $ ruby filename.rb

myString = "hello"

# conversion 
var1 = 2 
var2= '5'
puts var1.to_s + var2
puts '15'.to_f


# Before puts tries to write out an object, it uses to_s to get the string version of that object
# In fact, the s in puts stands for string; puts really means put string

# methods: gets and chomp 
puts gets 

puts 'Hello there, and what\'s your name?'
name = gets.chomp
puts 'Your name is ' + name + '?  What a lovely name!'
puts 'Pleased to meet you, ' + name + '.  :)'



puts var1.reverse



letters = 'aAbBcCdDeE'
puts letters.upcase
puts letters.downcase
puts letters.swapcase
puts letters.capitalize
puts ' a'.capitalize
puts letters


puts rand

srand 1776
puts(rand(100))


puts(Math::PI)
puts(Math::E)

puts((1 + Math.sqrt(5))/2)

# if else
if name == name.capitalize
else
end

# loop
command = ''

while command != 'bye'
  puts command
  command = gets.chomp
end

puts 'Come again soon!'


# iterators
languages = ['English', 'German', 'Ruby']

languages.each do |lang|
  puts 'I love ' + lang + '!'
  puts 'Don\'t you?'
end

# write own methods:
def sayMoo
  puts 'mooooooo...'
end

# method params
def sayMoo numberOfMoos
  puts 'mooooooo...'*numberOfMoos
end


# class

# extending classes
class Integer
  def to_eng
    if self == 5
      english = 'five'
    else
      english = 'fifty-eight'
    end

    english
  end
end

# create class
class Die

  def roll
    1 + rand(6)

    # instance variable 
    @numberShowing = 1 + rand(6)

  end

end
# Let's make a couple of dice...
dice = [Die.new, Die.new]


