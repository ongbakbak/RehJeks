var challengeArray = [{
  "title": "Hex Color",
  "prompt": "write a regular expression that matches a hex color",
  "text": ' #rgf #abc #dks366 #f00 #BADA55 #C0FFEE #349',
  "difficulty": "hard",
  "expected": ["#abc", "#f00", "#BADA55", "#C0FFEE"],
  "answer": "/^#([a-f\d]{3}){1,2}$i",
  "cheats": [""]
},
{
  "title": "Number",
  "prompt": "Number without exponent or digit separators",
  "text": ["-1 .05 +1000 3.1415926535 42. "],
  "difficulty": "very hard",
  "expected": ["-1", ".05", "+1000", "3.1415926535", "42."],
  "answer": "/^[-+]?(\d*\.?\d+|\d+\.)$/",
  "cheats": [""]
},
{
  "title": "ISO 8601 Dates",
  "prompt": "Just dates, no time or timezone information",
  "text": "2012-12-12  Tue Dec 06 2016 14:19:04 GMT-0800 (PST) 1986-06-13",
  "difficulty": "very hard",
  "expected": ["2012-12-12", "1986-06-13"],
  "answer": "/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])$/",
  "cheats": [""]
},
{
  "title": "Intersection",
  "prompt": "A 6+ letter password with at least: one number, one letter and a symbol",
  "text": "apple6 orange9! 123 123456 89apple",
  "difficulty": "medium",
  "expected": ["orange9!"],
  "answer": "/^(?=.*\d)(?=.*[a-z])(?=.*[W_]).{6,}$/i",
  "cheats": [""]
},
{
  "title": "Word Count",
  "prompt": "Count words",
  "text": ["a word to count"],
  "difficulty": "easy",
  "expected": ["4"],
  "answer": "text[0].split(/\s+/)",
  "cheats": [""]
},
{
  "title": "Matching Characters",
  "prompt": "Only match the first three strings, but not the last three strings.",
  "text": ["can man fan dan ran pan"],
  "difficulty": "easy",
  "expected": ["can man fan"],
  "answer": "[cmf]an",
  "cheats": [""]
},
{
  "title": "Excluding specific characters",
  "prompt": "Pattern that matches only the live animals (hog, dog, but not bog).",
  "text": ["hog dog bog"],
  "difficulty": "easy",
  "expected": ["hot dog"],
  "answer": "[^b]og",
  "cheats": [""]
},
{
  "title": "Subtraction",
  "prompt": "Any number that's not divisible by 50",
  "text": "50 40 100",
  "difficulty": "medium",
  "expected": ["50", "100"],
  "answer": "/\b(?!\d+[50]0)\d+\b/",
  "cheats": [""]
},
{
  "title": "Negation",
  "prompt": "Anything that doesn't contain 'foo'",
  "text": "foo bar foo apple",
  "difficulty": "easy",
  "expected": ["bar", "apple"],
  "answer": (/^(?!.*foo).+$/),
  "cheats": [""]
},
{
  "title": "Strings",
  "prompt": "Anything that doesn't contain 'foo'",
  "text": "\"foo\", \'bar\', \'He said \"hi\"\', \"He \'said\' \\\"hi\\\"\",\"\",\'\\\\\'",
  "difficulty": "hard",
  "expected": ["bar", 'He said "hi"', "hi", "He 'said' \"hi\"", "", '\\', 'said'],
  "answer": (/("|')(\\?.)*?\1/g),
  "cheats": [""]
}
];