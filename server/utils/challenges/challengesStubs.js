var challengeArray = [{
  "title": "Hex Color",
  "prompt": "write a regular expression that matches a hex color",
  "text": ["#abc", "#f00", "#BADA55", "#C0FFEE"],
  "difficulty": "very hard",
  "expected": [""],
  "answer": "/^#([a-f\d]{3}){1,2}$i",
  "cheats": [""]
},
{
  "title": "Number",
  "prompt": "Number without exponent or digit separators",
  "text": ["-1", ".05", "+1000", "3.1415926535", "42."],
  "difficulty": " very hard",
  "expected": ["-1", ".05", "+1000", "3.1415926535", "42."],
  "answer": "/^[-+]?(\d*\.?\d+|\d+\.)$/",
  "cheats": [""]
},
{
  "title": "ISO 8601 Dates",
  "prompt": "Just dates, no time or timezone information",
  "text": ["2012-12-12", "1986-06-13"],
  "difficulty": "very hard",
  "expected": ["2012-12-12", "1986-06-13"],
  "answer": "/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])$/",
  "cheats": [""]
},
{
  "title": "Intersection",
  "prompt": "A 6+ letter password with at least: one number, one letter and a symbol",
  "text": "",
  "difficulty": "hard",
  "expected": [""],
  "answer": "/^(?=.*\d)(?=.*[a-z])(?=.*[W_]).{6,}$/i",
  "cheats": [""]
},
{
  "title": "Word Count",
  "prompt": "Count words",
  "text": ["a word to count"],
  "difficulty": "medium",
  "expected": ["4"],
  "answer": "text[0].split(/\s+/)",
  "cheats": [""]
},
{
  "title": "Subtraction",
  "prompt": "Any number that's not divisible by 50",
  "text": ["50", "40", "100"],
  "difficulty": "medium",
  "expected": [true, false, true],
  "answer": "/\b(?!\d+[50]0)\d+\b/",
  "cheats": [""]
},
{
  "title": "Negation",
  "prompt": "Anything that doesn't contain 'foo'",
  "text": ["foo", 'bar', 'He said \"hi\"', '"He \'said'],
  "difficulty": "hard",
  "expected": [""],
  "answer": (/("|')(\\?.)*?\1/g),
  "cheats": [""]
}];