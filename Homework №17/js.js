let str = "ahb acb aeb aeeb adcb axeb",
    reg = /a.b/g
console.log(str.match(reg))
str = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
reg = /\*q+\+/g
console.log(str.match(reg))
str = "2012/09/18 12:10"
reg = /^(1\d{3}|20(0\d|1[0-2]))\/(0[1-9]|1[012])\/(0[1-9]|[12]\d|30) ([01]\d|2[0-3]):[0-5]\d(:([0-5]\d))?$/
console.log(reg.test(str))
str = "2013/09/09 09:09"
console.log(reg.test(str))
str = "Extra   spaces"
reg = /\s+/g
console.log(str.replace(reg, " "))
str = "Sentence.   Sentence. "
console.log(str.replace(reg, " "))